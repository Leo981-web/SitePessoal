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

const swiper = new Swiper('.swiper', {
  loop: true,
  
  
  slidesPerView: 1,
  spaceBetween: 30, 
  

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
