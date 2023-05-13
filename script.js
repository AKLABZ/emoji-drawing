const emojis = [
  '🥵', '🥶', '🤤', '🍆','😏', '😮‍💨', '🤤', '😜', '😝', '😰', '😩', '😈', '🙈', '❤️‍🔥', '💋', '💦', '👌', '👉', '💕', '🦴', '👀', '👅', '👄', '👄', '🤰', '🏊‍♂️', '🐶', '🐱', '🐫', '🐍', '🍌', '🍑', '🍆', '🌭', '🌮', '🍭', '🔥', '💧', '🌊'
];

const imageContainer = document.getElementById('image-container');
let isMouseDown = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'q') {
    imageContainer.innerHTML = '';
  }
});

// Add touch event listener for touch-based devices
document.addEventListener('touchstart', function(event) {
  isMouseDown = true;
});

// Add touch event listener for touch-based devices
document.addEventListener('touchend', function(event) {
  isMouseDown = false;
});

// Add touch event listener for touch-based devices
document.addEventListener('touchmove', function(event) {
  event.preventDefault(); // prevent scrolling
  if (isMouseDown) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const div = document.createElement('div');
    div.textContent = emoji;
    div.classList.add('emoji');
    div.style.left = event.touches[0].clientX + 'px'; // use the first touch point
    div.style.top = event.touches[0].clientY + 'px'; // use the first touch point
    imageContainer.appendChild(div);

    setTimeout(function() {
      div.style.opacity = 1;
    }, 10);
  }
});

// Add mouse event listener for desktop-based devices
document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    isMouseDown = true;
  }
});

// Add mouse event listener for desktop-based devices
document.addEventListener('mouseup', function(event) {
  if (event.button === 0) {
    isMouseDown = false;
  }
});

// Add mouse event listener for desktop-based devices
document.addEventListener('mousemove', function(event) {
  if (isMouseDown) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const div = document.createElement('div');
    div.textContent = emoji;
    div.classList.add('emoji');
    div.style.left = event.clientX + 'px';
    div.style.top = event.clientY + 'px';
    imageContainer.appendChild(div);

    setTimeout(function() {
      div.style.opacity = 1;
    }, 10);
  }
});
