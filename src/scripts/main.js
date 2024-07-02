
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'slider slider__bg-img--1',
    'slider slider__bg-img--2',
    'slider slider__bg-img--3',
    'slider slider__bg-img--4',
  ];
  let currentIndex = 0;

  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateBackgroundImage() {
    const sliderClassWithModifier = images[currentIndex];
    slider.setAttribute('class', sliderClassWithModifier);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateBackgroundImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateBackgroundImage();
  });

  // Initial image set
  updateBackgroundImage();
});
