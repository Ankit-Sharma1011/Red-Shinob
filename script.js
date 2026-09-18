const root = document.documentElement;
const editor = document.querySelector('.editor');
document.querySelector('.editor-toggle').addEventListener('click',()=>editor.classList.toggle('open'));

const bindColor = (id, variable) => {
  const el = document.getElementById(id);
  el.addEventListener('input', e => root.style.setProperty(variable, e.target.value));
};
bindColor('accent','--accent');
bindColor('background','--bg');
bindColor('card','--card');
bindColor('text','--text');

document.getElementById('displayFont').addEventListener('change', e=>{
  document.querySelectorAll('h1,h1 strong,h2,.logo,.hey,.blog mark').forEach(x=>x.style.fontFamily=e.target.value);
});

const targetMap = {
  p1: '.project:nth-child(1) img',
  p2: '.project:nth-child(2) img',
  p3: '.project:nth-child(3) img',
  p4: '.project:nth-child(4) img'
};

document.querySelectorAll('.editor-panel input[type=file]').forEach(input=>{
  input.addEventListener('change', e=>{
    const file = e.target.files?.[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    const target = targetMap[input.dataset.target] || `#${input.dataset.target}`;
    const img = document.querySelector(target);
    if(img){ img.src=url; }
  });
});

document.querySelectorAll('.nav nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});
