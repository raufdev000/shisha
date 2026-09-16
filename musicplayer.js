/* ================================================================
   CAFE MOISHI — MUSIC PLAYER (panel version)
   ----------------------------------------------------------------
   The headphone icon does two things on first click, together:
     1. Unmutes + plays the audio (this click IS the "user gesture"
        browsers require before audible autoplay is allowed — it is
        the earliest possible moment sound can legally start).
     2. Opens the panel (volume slider + mute button + close).
   After that, the icon just toggles the panel open/closed; the
   music itself keeps playing regardless of whether the panel is
   open. Closing the panel (X) never stops playback.

   Playback position, volume and mute state persist across a
   refresh via sessionStorage, so nothing restarts or glitches.
   ================================================================ */
(function () {
  'use strict';

  var STORAGE_TIME = 'moishiMusicTime';
  var STORAGE_VOLUME = 'moishiMusicVolume';
  var STORAGE_MUTED = 'moishiMusicMuted';
  var STORAGE_STARTED = 'moishiMusicStarted';

  document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bgMusic');
    var player = document.getElementById('musicPlayer');
    var toggleBtn = document.getElementById('musicToggle');
    var panel = document.getElementById('musicPanel');
    var closeBtn = document.getElementById('musicPanelClose');
    var volumeSlider = document.getElementById('musicVolume');
    var volumePct = document.getElementById('musicVolumePct');
    var muteBtn = document.getElementById('musicMuteBtn');
    var muteLabel = document.getElementById('musicMuteLabel');

    if (!audio || !player || !toggleBtn || !panel) return;

    var savedVolume = parseInt(sessionStorage.getItem(STORAGE_VOLUME), 10);
    var volume = isNaN(savedVolume) ? 45 : savedVolume;
    audio.volume = volume / 100;
    if (volumeSlider) volumeSlider.value = String(volume);
    if (volumePct) volumePct.textContent = volume + '%';

    var isMuted = sessionStorage.getItem(STORAGE_MUTED) === 'true';
    audio.muted = isMuted;
    updateMuteUI(isMuted);

    var savedTime = parseFloat(sessionStorage.getItem(STORAGE_TIME));
    if (!isNaN(savedTime) && savedTime > 0) {
      var restoreTime = function () {
        try { audio.currentTime = savedTime; } catch (e) { /* ignore */ }
      };
      if (audio.readyState >= 1) restoreTime();
      else audio.addEventListener('loadedmetadata', restoreTime, { once: true });
    }

    var alreadyStarted = sessionStorage.getItem(STORAGE_STARTED) === 'true';
    if (alreadyStarted) {
      audio.play().then(function () {
        setPlayingUI(true);
      }).catch(function () {
        setPlayingUI(false);
      });
    }

    function setPlayingUI(isPlaying) {
      player.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isPlaying ? 'Open music panel' : 'Play background music');
    }

    function updateMuteUI(muted) {
      panel.classList.toggle('is-muted', muted);
      if (muteLabel) muteLabel.textContent = muted ? 'Unmute' : 'Mute';
    }

    function openPanel() { panel.classList.add('is-open'); }
    function closePanel() { panel.classList.remove('is-open'); }
    function togglePanel() { panel.classList.toggle('is-open'); }

    toggleBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.muted = false;
        isMuted = false;
        sessionStorage.setItem(STORAGE_MUTED, 'false');
        updateMuteUI(false);
        audio.play().then(function () {
          setPlayingUI(true);
          sessionStorage.setItem(STORAGE_STARTED, 'true');
        }).catch(function () {});
        openPanel();
      } else {
        togglePanel();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closePanel();
      });
    }

    document.addEventListener('click', function (e) {
      if (!panel.classList.contains('is-open')) return;
      if (panel.contains(e.target) || toggleBtn.contains(e.target)) return;
      closePanel();
    });

    if (volumeSlider) {
      volumeSlider.addEventListener('input', function () {
        var v = parseInt(volumeSlider.value, 10);
        audio.volume = v / 100;
        if (volumePct) volumePct.textContent = v + '%';
        sessionStorage.setItem(STORAGE_VOLUME, String(v));
        if (v > 0 && audio.muted) {
          audio.muted = false;
          isMuted = false;
          sessionStorage.setItem(STORAGE_MUTED, 'false');
          updateMuteUI(false);
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', function () {
        isMuted = !audio.muted;
        audio.muted = isMuted;
        sessionStorage.setItem(STORAGE_MUTED, isMuted ? 'true' : 'false');
        updateMuteUI(isMuted);
        if (!isMuted && audio.paused) {
          audio.play().then(function () { setPlayingUI(true); }).catch(function () {});
        }
      });
    }

    audio.addEventListener('timeupdate', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
    });

    window.addEventListener('beforeunload', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
      sessionStorage.setItem(STORAGE_MUTED, audio.muted ? 'true' : 'false');
    });

    audio.addEventListener('play', function () { setPlayingUI(true); });
    audio.addEventListener('pause', function () { setPlayingUI(false); });
  });
})();