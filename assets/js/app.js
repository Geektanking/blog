//雪花粒子控制器
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 150,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 5,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": 0,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 3,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  }
});
