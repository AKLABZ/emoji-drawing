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

document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    isMouseDown = true;
  }
});

document.addEventListener('mouseup', function(event) {
  if (event.button === 0) {
    isMouseDown = false;
  }
});

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

document.addEventListener('touchstart', function(event) {
  isMouseDown = true;
  event.preventDefault();
});

document.addEventListener('touchend', function(event) {
  isMouseDown = false;
});

document.addEventListener('touchmove', function(event) {
  if (isMouseDown) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const div = document.createElement('div');
    div.textContent = emoji;
    div.classList.add('emoji');
    div.style.left = event.touches[0].clientX + 'px';
    div.style.top = event.touches[0].clientY + 'px';
    imageContainer.appendChild(div);

    setTimeout(function() {
      div.style.opacity = 1;
    }, 10);
  }
});

document.body.addEventListener('touchmove', function(e) {
  if (isMouseDown) {
    e.preventDefault();
  }
}, { passive: false });


interact('#image-container').gesturable({
  onstart: function (event) {
    event.preventDefault();
  }
});

interact('#image-container').gesturable({
  onmove: function (event) {
    event.preventDefault();
  }
});


