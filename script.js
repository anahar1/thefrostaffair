document.getElementById('menyAvPaa').addEventListener('change', function () {
  document.body.classList.toggle('menu-open', this.checked);
});

let currentPanel = 1;
const panelWidth = window.innerWidth; // Set to viewport width
const totalPanels = 6; // Number of panels

function changePanel(panel) {
  currentPanel = panel;

  if (currentPanel < 1) {
    currentPanel = totalPanels;
  } else if (currentPanel > totalPanels) {
    currentPanel = 1;
  }

  updateCarousel();
}

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  const translateValue = -panelWidth * (currentPanel - 1);
  carousel.style.transform = `translateX(${translateValue}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index + 1 === currentPanel) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Call updateCarousel initially to set the correct position
updateCarousel();

// Update panelWidth and carousel on window resize
window.addEventListener('resize', () => {
  panelWidth = window.innerWidth;
  updateCarousel();
});

// Automatically change panel every 2 seconds
setInterval(() => {
  changePanel(currentPanel + 1);
}, 2000);
