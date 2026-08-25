// ============================================================
// Interaction logic — reads content from data.js, doesn't hold
// any copy itself. Edit data.js to change what's shown.
// ============================================================

const panel = document.getElementById('panelContent');
const sprouts = document.querySelectorAll('.sprout');
const butterflies = document.querySelectorAll('.butterfly');
const copyPanel = document.getElementById('copyPanel');
const gardenStage = document.getElementById('gardenStage');
const contactStage = document.getElementById('contactStage');
const contactPanel = document.getElementById('contactPanelContent');

function render(html, isProject) {
  panel.classList.add('fading');
  setTimeout(() => {
    panel.innerHTML = html;
    panel.classList.remove('fading');
    copyPanel.classList.toggle('view-project', !!isProject);
  }, 180);
}

function introHTML() {
  return `
    <p class="tagline">${INTRO.h1}</p>
    <div class="back-link" onclick="showIntro()">&larr; back</div>
    <h2 class="headline">${INTRO.title}</h2>
    <p class="desc">${INTRO.body}</p>
    <div class="cta-row"><a class="pill cta" href="#" onclick="showContact(); return false;">${INTRO.cta.label}</a></div>
  `;
}

function contactHTML() {
  return `
    <div class="back-link" onclick="showGarden()">&larr; back to garden</div>
    <h2 class="headline">${CONTACT.headline}</h2>
    <p class="desc">${CONTACT.body}</p>
    <div class="tags">
      <a class="pill linkedin" href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer">linkedin</a>
      <a class="pill email" href="mailto:${CONTACT.email}">email</a>
    </div>
  `;
}

function projectHTML(p) {
  const paras = p.body.map(b => `<p class="desc">${b}</p>`).join('');
  const tags = p.tags.map(([label, type, href]) =>
    `<a class="pill ${type}" href="${href || '#'}" target="_blank" rel="noopener noreferrer">${label}</a>`
  ).join('');
  return `
    <div class="back-link" onclick="showIntro()">&larr; back</div>
    <img class="project-photo" src="${p.image}" alt="${p.title}">
    <h2 class="headline">${p.title}</h2>
    ${paras}
    <div class="tags">${tags}</div>
  `;
}

function experienceHTML(e) {
  const paras = e.body.map(b => `<p class="desc">${b}</p>`).join('');
  const tags = e.tags.map(([label, type, href]) =>
    `<a class="pill ${type}" href="${href || '#'}" target="_blank" rel="noopener noreferrer">${label}</a>`
  ).join('');
  return `
    <div class="back-link" onclick="showIntro()">&larr; back</div>
    <h2 class="headline">${e.company}</h2>
    <img class="project-photo" src="${e.image}" alt="${e.title}">
    <p class="desc" style="font-weight:700; color:var(--ink); margin-bottom:-6px;">${e.role} &middot; ${e.dates}</p>
    ${paras}
    <div class="tags">${tags}</div>
  `;
}

function clearActive() {
  sprouts.forEach(s => s.classList.remove('active'));
  butterflies.forEach(b => b.classList.remove('active'));
}

function showIntro() {
  clearActive();
  render(introHTML(), false);
}

const FADE_MS = 300;
let fading = false;

// Fades `fromStage` out, then swaps and fades `toStage` in.
function fadeStages(fromStage, toStage) {
  if (fading) return;
  fading = true;

  fromStage.style.opacity = '0';

  setTimeout(() => {
    fromStage.style.display = 'none';
    toStage.style.display = 'grid';
    toStage.style.opacity = '0';

    // force layout so the browser registers opacity:0 before we transition to 1
    void toStage.offsetHeight;
    toStage.style.opacity = '1';

    setTimeout(() => { fading = false; }, FADE_MS);
  }, FADE_MS);
}

function showContact() {
  contactPanel.innerHTML = contactHTML();
  fadeStages(gardenStage, contactStage);
}

function showGarden() {
  fadeStages(contactStage, gardenStage);
}

function showProject(id) {
  const p = PROJECTS[id];
  if (!p) return;
  clearActive();
  document.querySelector(`.sprout[data-project="${id}"]`).classList.add('active');
  render(projectHTML(p), true);
}

function showExperience(id) {
  const e = EXPERIENCES[id];
  if (!e) return;
  clearActive();
  document.getElementById(`bfly-${id}`).classList.add('active');
  render(experienceHTML(e), true);
}

sprouts.forEach(s => {
  const id = s.dataset.project;
  const tip = document.querySelector(`.tooltip[data-tip="${id}"]`);
  s.addEventListener('mouseenter', () => tip && tip.classList.add('show'));
  s.addEventListener('mouseleave', () => tip && tip.classList.remove('show'));
  s.addEventListener('click', () => {
    s.classList.add('bloomed');
    showProject(id);
  });
});

butterflies.forEach(b => {
  const id = b.dataset.exp;
  b.addEventListener('mouseenter', () => {
    b.getAnimations({ subtree: true }).forEach(a => a.playbackRate = 0.12);
  });
  b.addEventListener('mouseleave', () => {
    b.getAnimations({ subtree: true }).forEach(a => a.playbackRate = 1);
  });
  b.addEventListener('click', () => showExperience(id));
});

// initial state
showIntro();
