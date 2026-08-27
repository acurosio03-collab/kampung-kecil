const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  nav.style.background = scrollY>40
    ? 'linear-gradient(180deg,#130e08ee,#130e08cc)'
    : 'linear-gradient(180deg,#130e08cc,transparent)';
});

// background music: browsers block autoplay-with-sound no matter what the
// code does, so it starts muted and the very first tap/click ANYWHERE on the
// page unmutes + plays it — no visible button, per request
const bgm=document.getElementById('bgm');
if(bgm){
  bgm.muted=true;
  bgm.play().catch(()=>{});
  document.addEventListener('click', function firstTap(){
    bgm.muted=false;
    bgm.play().catch(()=>{});
    document.removeEventListener('click', firstTap);
  }, {once:true});
}

// tap-to-reveal captions on touch devices (hover doesn't exist there)
document.querySelectorAll('.gallery-grid figure').forEach(fig=>{
  fig.addEventListener('click',()=>{
    document.querySelectorAll('.gallery-grid figcaption').forEach(c=>c.style.opacity=0);
    const cap=fig.querySelector('figcaption');
    if(cap) cap.style.opacity=1;
  });
});
