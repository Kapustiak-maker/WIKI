
let currentLang = 'ru';
let pageHistory = [];

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

setLang('ru');

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
  currentTrackIndex = index;
  const audio = document.getElementById('audioPlayer');
  const trackBtns = document.querySelectorAll('.track-btn');
  
  audio.src = tracks[index];
  
  trackBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  
  audio.play();
  document.getElementById('playBtn').textContent = '⏸️';
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

