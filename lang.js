
let currentLang = 'ru';
let pageHistory = [];
let isDarkTheme = true;
let deferredPrompt = null;

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-ru]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-ru-title]').forEach(el => {
    const title = el.getAttribute('data-' + lang + '-title');
    if (title) el.textContent = title;
  });

  if (pageHistory.length > 0) {
    const currentPage = pageHistory[pageHistory.length - 1];
    loadPage(currentPage);
  }
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDarkTheme = false;
    document.body.classList.remove('dark-theme');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.checked = false;
  } else {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.checked = true;
  }
}

function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('mobile-open');
}

function closeMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('mobile-open');
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showLoadingBar() {
  let loadingBar = document.getElementById('loadingBar');
  if (!loadingBar) {
    loadingBar = document.createElement('div');
    loadingBar.id = 'loadingBar';
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);
  }
  loadingBar.style.width = '0%';
  loadingBar.style.display = 'block';
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 90) progress = 90;
    loadingBar.style.width = progress + '%';
  }, 200);
  
  return () => {
    clearInterval(interval);
    loadingBar.style.width = '100%';
    setTimeout(() => {
      loadingBar.style.display = 'none';
    }, 500);
  };
}

function openSettings() {
  const modal = document.getElementById('settingsModal');
  modal.classList.add('show');
  
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }
  
  document.getElementById('settingsTheme').checked = isDarkTheme;
  document.getElementById('settingsSnow').checked = snowEnabled;
  
  const installBtn = document.getElementById('installBtn');
  const pwaStatus = document.getElementById('pwaStatus');
  
  if (window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true || 
      document.referrer.includes('android-app://')) {
    if (installBtn) installBtn.style.display = 'none';
    if (pwaStatus) pwaStatus.style.display = 'block';
  } else if (window.deferredPrompt) {
    if (installBtn) installBtn.style.display = 'block';
    if (pwaStatus) pwaStatus.style.display = 'none';
  }
}

function toggleSnowSettings() {
  const checkbox = document.getElementById('settingsSnow');
  if (checkbox.checked) {
    startSnow();
  } else {
    stopSnow();
  }
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.body.style.position = '';
    document.body.style.width = '';
  }
}

function installPWA() {
  console.log('🚀 installPWA called');
  console.log('deferredPrompt:', deferredPrompt);
  console.log('window.deferredPrompt:', window.deferredPrompt);
  
  const prompt = deferredPrompt || window.deferredPrompt;
  
  if (prompt) {
    console.log('📦 Вызываю prompt()...');
    prompt.prompt();
    prompt.userChoice.then(choiceResult => {
      console.log('📋 Результат выбора:', choiceResult.outcome);
      if (choiceResult.outcome === 'accepted') {
        showToast('✅ Приложение установлено!', 'success');
        const installBtn = document.getElementById('installBtn');
        const pwaStatus = document.getElementById('pwaStatus');
        if (installBtn) installBtn.style.display = 'none';
        if (pwaStatus) pwaStatus.style.display = 'block';
      } else {
        showToast('❌ Установка отменена', 'error');
      }
      deferredPrompt = null;
      window.deferredPrompt = null;
    }).catch(err => {
      console.error('❌ Ошибка при установке:', err);
      showToast('❌ Ошибка при установке приложения', 'error');
    });
  } else {
    console.log('⚠️ deferredPrompt не найден');
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isEdge = /Edg/.test(navigator.userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      showToast('📱 На мобиле: жди меню установки в низу экрана или в 3 точках', 'warning');
    } else if (isChrome) {
      showToast('💻 На Chrome: смотри значок в адресной строке 📍', 'warning');
    } else if (isEdge) {
      showToast('💻 На Edge: смотри значок в адресной строке 📍', 'warning');
    } else {
      showToast('⚠️ Установка доступна только в Chrome или Edge', 'warning');
    }
  }
}

document.addEventListener('beforeinstallprompt', (e) => {
  console.log('🎉 beforeinstallprompt fired (document)');
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
    console.log('✅ Кнопка установки показана');
  }
});

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('🎉 beforeinstallprompt fired (window)');
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
    console.log('✅ Кнопка установки показана');
  }
});

document.addEventListener('appinstalled', () => {
  console.log('appinstalled fired');
  deferredPrompt = null;
  const installBtn = document.getElementById('installBtn');
  const pwaStatus = document.getElementById('pwaStatus');
  if (installBtn) installBtn.style.display = 'none';
  if (pwaStatus) pwaStatus.style.display = 'block';
});

window.addEventListener('appinstalled', () => {
  console.log('appinstalled fired (window)');
  deferredPrompt = null;
  const installBtn = document.getElementById('installBtn');
  const pwaStatus = document.getElementById('pwaStatus');
  if (installBtn) installBtn.style.display = 'none';
  if (pwaStatus) pwaStatus.style.display = 'block';
});

setLang('ru');

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

const tracks = [
  'https://github.com/Kapustiak-maker/WIKI-RELATED/releases/download/music/music.1.mp3',
  'https://github.com/Kapustiak-maker/WIKI-RELATED/releases/download/music2/music.2.mp3',
  'https://github.com/Kapustiak-maker/WIKI-RELATED/releases/download/music3/Aftertune.-.Another.Feeling.mp3'
];

let currentTrackIndex = 0;

function toggleMusicPanel() {
  const panel = document.getElementById('musicPanel');
  if (panel.style.display === 'none' || panel.style.display === '') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

function toggleAudio() {
  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function setVolume(value) {
  const audio = document.getElementById('audioPlayer');
  audio.volume = value / 100;
}

function previousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  switchTrack(currentTrackIndex);
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  switchTrack(currentTrackIndex);
}

function switchTrack(index) {
  const finish = showLoadingBar();
  
  currentTrackIndex = index;
  const audio = document.getElementById('audioPlayer');
  const trackBtns = document.querySelectorAll('.track-btn');
  
  audio.src = tracks[index];
  
  trackBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  
  audio.oncanplaythrough = () => {
    finish();
    audio.play();
    document.getElementById('playBtn').textContent = '⏸️';
  };
  
  audio.play().catch(err => {
    finish();
    console.error('Ошибка воспроизведения:', err);
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audioPlayer');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');
  const volumeSlider = document.getElementById('volumeSlider');
  let isDragging = false;
  
  audio.src = tracks[0];
  
  audio.play().catch(err => {
    console.log('Автозапуск музыки невозможен (политика браузера)', err);
  });
  document.getElementById('playBtn').textContent = '⏸️';
  
  audio.addEventListener('timeupdate', function() {
    if (currentTimeEl) {
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }
    if (!isDragging && volumeSlider) {
      const percent = (audio.currentTime / audio.duration) * 100;
      volumeSlider.style.background = `linear-gradient(to right, #ffd700 0%, #ffd700 ${percent}%, #ffed4e ${percent}%, #ffed4e 100%)`;
    }
  });
  
  audio.addEventListener('loadedmetadata', function() {
    if (durationEl) {
      durationEl.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener('ended', function() {
    document.getElementById('playBtn').textContent = '▶️';
    if (volumeSlider) {
      volumeSlider.style.background = 'linear-gradient(to right, #ffd700, #ffed4e)';
    }
    nextTrack();
  });

  const progressSlider = document.createElement('input');
  progressSlider.type = 'range';
  progressSlider.id = 'progressSlider';
  progressSlider.className = 'progress-slider';
  progressSlider.min = '0';
  progressSlider.max = '100';
  progressSlider.value = '0';
  
  const musicPanel = document.getElementById('musicPanel');
  if (musicPanel) {
    const musicControls = musicPanel.querySelector('.music-controls');
    musicPanel.insertBefore(progressSlider, musicControls.nextSibling);
  }

  progressSlider.addEventListener('mousedown', function() {
    isDragging = true;
  });

  progressSlider.addEventListener('mouseup', function() {
    isDragging = false;
  });

  progressSlider.addEventListener('input', function() {
    const percent = this.value;
    audio.currentTime = (percent / 100) * audio.duration;
    this.style.background = `linear-gradient(to right, #ffd700 0%, #ffd700 ${percent}%, #ffed4e ${percent}%, #ffed4e 100%)`;
  });

  audio.addEventListener('timeupdate', function() {
    if (!isDragging) {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressSlider.value = percent;
      progressSlider.style.background = `linear-gradient(to right, #ffd700 0%, #ffd700 ${percent}%, #ffed4e ${percent}%, #ffed4e 100%)`;
    }
  });
});

