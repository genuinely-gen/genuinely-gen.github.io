// script.js - loads content.json and renders the page
async function loadContent(){
  try{
    const res = await fetch('content.json');
    const data = await res.json();

    document.querySelector('.name').textContent = data.displayName || '- gen -';
    document.getElementById('pronouns').textContent = data.pronouns || '';
    document.getElementById('bio').textContent = data.bio || '';
    document.getElementById('timezone').textContent = data.timezone || '';

    const iconsEl = document.getElementById('icons');
    iconsEl.innerHTML = '';
    for(const s of data.socials){
      const a = document.createElement('a');
      a.href = s.url || '#';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'icon';

      const img = document.createElement('img');
      img.src = s.icon || '';
      img.alt = s.name || '';
      a.appendChild(img);
      iconsEl.appendChild(a);
    }
  }catch(err){
    console.error('Failed to load content.json', err);
  }
}

loadContent();
