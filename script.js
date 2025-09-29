// particulas
window.addEventListener("load", function () {
  tsParticles.load("particlesJs", {
    fullscreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        },
        limite: 150
      },
      color: {
        value: '#00ffff'
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 2,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outMode: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  });
});


//carrossel

const carrosselSlide = document.querySelector('.carrosselslide');
const carrosselImages = document.querySelectorAll('.carrosselslide img');

const prevBtn = document.querySelector('#btanterior');
const nextBtn = document.querySelector('#btproximo');

let counter = 1;
const size = carrosselImages[0].clientWidth;

carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', () => {
  if (counter >= carrosselImages.length - 1) return;
  carrosselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carrosselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carrosselSlide.addEventListener('transitionend', () => {
  if (carrosselImages[counter].id === 'cloneUltimo') {
    carrosselSlide.style.transition = "none";
    counter = carrosselImages.length - 2;
    carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carrosselImages[counter].id === 'clonePrimeiro') {
    carrosselSlide.style.transition = "none";
    counter = carrosselImages.length - counter;
    carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
