let snowEnabled = true;
let snowInterval;

function createSnowflake() {
  const snowContainer = document.getElementById('snowContainer');
  if (!snowContainer || !snowEnabled) return;

  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  
  // Варианты снежинок
  const snowTypes = ['❄️', '❅', '❆', '⛄'];
  const randomSnow = snowTypes[Math.floor(Math.random() * snowTypes.length)];
  
  snowflake.textContent = randomSnow;
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random() * 15 + 10) + 'px';
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  
  // Длительность падения
  const duration = Math.random() * 10 + 15;
  snowflake.style.animationDuration = duration + 's';
  
  // Горизонтальный drift
  const drift = Math.random() * 100 - 50;
  snowflake.style.setProperty('--drift', drift + 'px');
  
  snowContainer.appendChild(snowflake);
  
  // Удалить после завершения анимации
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Переделаем анимацию для дрифта
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translateY(50vh) translateX(var(--drift, 0px)) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(100vh) translateX(calc(var(--drift, 0px) + 50px)) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

function startSnow() {
  snowEnabled = true;
  snowInterval = setInterval(createSnowflake, 300);
  // Создать несколько снежинок сразу для эффекта
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createSnowflake(), i * 100);
  }
}

function stopSnow() {
  snowEnabled = false;
  clearInterval(snowInterval);
  const snowContainer = document.getElementById('snowContainer');
  if (snowContainer) snowContainer.innerHTML = '';
}

function toggleSnow() {
  const toggle = document.getElementById('snowToggle');
  if (toggle.checked) {
    startSnow();
  } else {
    stopSnow();
  }
}

// Запустить снег при загрузке
window.addEventListener('DOMContentLoaded', () => {
  startSnow();
});
