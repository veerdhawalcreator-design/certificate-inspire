function toggleOriginal(){
  const panel = document.getElementById('originalPanel');
  const btn = document.getElementById('toggleBtn');
  const label = document.getElementById('btnLabel');
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  label.textContent = isOpen ? 'Hide original certificate' : 'Show original certificate';
  if(isOpen){
    setTimeout(() => panel.scrollIntoView({behavior:'smooth', block:'nearest'}), 200);
  }
}

(function(){
  const container = document.getElementById('stars');
  const count = 40;
  for(let i=0;i<count;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + '%';
    s.style.top = Math.random()*100 + '%';
    s.style.opacity = (Math.random()*0.5 + 0.2).toFixed(2);
    const size = (Math.random()*2 + 1.5).toFixed(1);
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    container.appendChild(s);
  }
})();
