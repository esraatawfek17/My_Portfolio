/* Esraa Tawfek — portfolio interactions */

const grid     = document.getElementById('caseGrid');
const modal    = document.getElementById('modal');
const modalBody= document.getElementById('modalBody');
let lastFocused = null;

document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const initials = name => name.replace(/[^A-Za-z\u0600-\u06FF ]/g,'').trim().split(/\s+/)
  .slice(0,2).map(w => w[0]).join('').toUpperCase();

function linkList(links){
  return `<ul class="linklist">${links.map(l =>
    `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join('')}</ul>`;
}

function figure(f){
  return `<figure class="m-figure">
    <img src="${esc(f.src)}" alt="${esc(f.caption)}" loading="lazy"
         onerror="this.closest('figure').style.display='none'">
    <figcaption>${esc(f.caption)}</figcaption>
  </figure>`;
}

function copyBlock(c){
  return `<div class="copy-sample">${esc(c.text)}${
    c.tags ? `<span class="tags">${esc(c.tags)}</span>` : ''}</div>`;
}

/* ---------- cards ---------- */
grid.innerHTML = CASES.map(c => `
  <button class="card" data-cat="${c.cat}" data-id="${c.id}" type="button">
    <div class="card-media">
      <div class="card-fallback">${esc(initials(c.client))}</div>
      <img src="${esc(c.cover)}" alt="" loading="lazy"
           onerror="this.style.display='none'">
      <span class="card-tag">${esc(c.tag)}</span>
    </div>
    <div class="card-body">
      <h3 class="card-client">${esc(c.client)}</h3>
      <p class="card-role">${esc(c.role)}</p>
      <p class="card-teaser">${esc(c.teaser)}</p>
      <span class="card-more">Read the case</span>
    </div>
  </button>`).join('');

/* ---------- filters ---------- */
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('is-hidden', f !== 'all' && card.dataset.cat !== f);
    });
  });
});

/* ---------- modal ---------- */
function openCase(id){
  const c = CASES.find(x => x.id === id);
  if (!c) return;

  let h = `<p class="m-tag">${esc(c.tag)}</p>
    <h2 class="m-title" id="modalTitle">${esc(c.client)}</h2>
    <p class="m-role">${esc(c.role)}</p>`;

  if (c.handle) h += `<a class="m-ig" href="${esc(c.handle.url)}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
           stroke-width="1.7" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.4"/>
        <circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/>
      </svg>${esc(c.handle.label)}</a>`;

  if (c.pills) h += `<div class="pill-row">${c.pills.map(p => `<span class="pill">${esc(p)}</span>`).join('')}</div>`;

  if (c.brief){
    h += `<h4 class="m-h">The brief</h4>` + c.brief.map(p => `<p class="m-p">${esc(p)}</p>`).join('');
  }

  if (c.films){
    h += `<h4 class="m-h">The films</h4>`;
    h += c.films.map(f => `
      <p class="m-p"><strong style="color:var(--paper)">${esc(f.name)}</strong> — ${esc(f.note)}</p>
      ${linkList([{label:'Watch '+f.name, url:f.url}])}`).join('<div style="height:14px"></div>');
  }

  if (c.copy){
    h += `<h4 class="m-h">Copy samples</h4>` + c.copy.map(copyBlock).join('');
  }

  if (c.subprojects){
    c.subprojects.forEach(sp => {
      h += `<h4 class="m-h">${esc(sp.title)}</h4>`;
      if (sp.note) h += `<p class="m-p">${esc(sp.note)}</p>`;
      if (sp.figure) h += figure(sp.figure);
      if (sp.links)  h += linkList(sp.links);
    });
  }

  if (c.linkGroups){
    c.linkGroups.forEach(g => {
      h += `<h4 class="m-h">${esc(g.title)}</h4>` + linkList(g.links);
    });
  }

  if (c.figures){
    h += `<h4 class="m-h">Content grid</h4>` + c.figures.map(figure).join('');
  }

  if (c.links){
    h += `<h4 class="m-h">More from this project</h4>` + linkList(c.links);
  }

  modalBody.innerHTML = h;
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeCase(){
  modal.hidden = true;
  document.body.style.overflow = '';
  modalBody.innerHTML = '';
  if (lastFocused) lastFocused.focus();
}

grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (card) openCase(card.dataset.id);
});

modal.addEventListener('click', e => {
  if (e.target.hasAttribute('data-close')) closeCase();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeCase();
});
