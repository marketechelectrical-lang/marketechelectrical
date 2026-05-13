// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// =========================
// HEADER SCROLL
// =========================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }

});

// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add('active');
    }

  });

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener('mousemove', (e) => {

  const floating1 = document.querySelector('.floating-1');
  const floating2 = document.querySelector('.floating-2');

  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  floating1.style.transform =
    `translate(${x * 30}px, ${y * 30}px)`;

  floating2.style.transform =
    `translate(${x * -30}px, ${y * -30}px)`;

});
