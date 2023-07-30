// up
// let up = document.querySelector('.up');
// window.onscroll = function(){

//     this.scrollY >= 800 ? up.classList.add('show') : up.classList.remove('show');
// };
// up.onclick = function(){
//     window.scrollTo({ top:0,
//         behavior:"smooth"}
//     )
// }
// Up icon
const up = document.querySelector('.up');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 800) {
    up.classList.add('show');
  } else {
    up.classList.remove('show');
  }
});

up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// awsome state increasing
let section=document.querySelector('.stats')
let stat=document.querySelectorAll('.stats .box .number');
let started=false;
window.onscroll=function(){
    if(window.scrollY >= section.offsetTop-100){
        if(!started){
            stat.forEach((st)=>startCount(st));
        }
        started=true;
    }
  
}

function startCount(el){
    let set=el.dataset.set;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent == set){
            clearInterval(count);
        }
    },2000/set)
}
