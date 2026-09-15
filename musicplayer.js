/* ================================================================
   CAFE MOISHI — BACKGROUND MUSIC PLAYER (muted-autoplay version)
   ================================================================ */
(function () {
  'use strict';

  var STORAGE_TIME = 'moishiMusicTime';
  var STORAGE_PAUSED = 'moishiMusicPaused';
  var STORAGE_MUTED = 'moishiMusicMuted';
  var UNMUTE_PROMPT_DELAY_MS = 4500;

  document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bgMusic');
    var player = document.getElementById('musicPlayer');
    var toggleBtn = document.getElementById('musicToggle');
    var unmutePrompt = document.getElementById('unmutePrompt');

    if (!audio || !player || !toggleBtn) return;

    var savedTime = parseFloat(sessionStorage.getItem(STORAGE_TIME));
    if (!isNaN(savedTime) && savedTime > 0) {
      try { audio.currentTime = savedTime; } catch (e) {
        audio.addEventListener('loadedmetadata', function onMeta() {
          audio.currentTime = savedTime;
          audio.removeEventListener('loadedmetadata', onMeta);
        });
      }
    }

    var userPaused = sessionStorage.getItem(STORAGE_PAUSED) === 'true';
    var isMuted = sessionStorage.getItem(STORAGE_MUTED) !== 'false';
    audio.muted = isMuted;

    function setPlayingUI(isPlaying) {
      player.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isPlaying ? 'Pause background music' : 'Play background music');
    }

    function hideUnmutePrompt() {
      if (unmutePrompt) unmutePrompt.classList.remove('is-visible');
    }

    function unmuteNow() {
      audio.muted = false;
      isMuted = false;
      sessionStorage.setItem(STORAGE_MUTED, 'false');
      hideUnmutePrompt();
      if (audio.paused && !userPaused) {
        audio.play().then(function () { setPlayingUI(true); }).catch(function () {});
      }
    }

    if (!userPaused) {
      audio.play().then(function () {
        setPlayingUI(true);
        if (isMuted && unmutePrompt) {
          setTimeout(function () {
            if (audio.muted) unmutePrompt.classList.add('is-visible');
          }, UNMUTE_PROMPT_DELAY_MS);
        }
      }).catch(function () {
        setPlayingUI(false);
      });
    } else {
      setPlayingUI(false);
    }

    var interactionEvents = ['click', 'mouseup', 'pointerup', 'keyup', 'touchend', 'scroll'];
    function onFirstInteraction() {
      if (isMuted) unmuteNow();
      if (audio.paused && !userPaused) {
        audio.play().then(function () { setPlayingUI(true); }).catch(function () {});
      }
    }
    interactionEvents.forEach(function (evt) {
      document.addEventListener(evt, onFirstInteraction, { passive: true });
    });

    toggleBtn.addEventListener('click', function () {
      if (isMuted) unmuteNow();
      if (audio.paused) {
        userPaused = false;
        sessionStorage.setItem(STORAGE_PAUSED, 'false');
        audio.play().then(function () { setPlayingUI(true); }).catch(function () {});
      } else {
        userPaused = true;
        sessionStorage.setItem(STORAGE_PAUSED, 'true');
        audio.pause();
        setPlayingUI(false);
      }
    });

    if (unmutePrompt) {
      unmutePrompt.addEventListener('click', function (e) {
        e.stopPropagation();
        unmuteNow();
      });
    }

    audio.addEventListener('timeupdate', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
    });

    window.addEventListener('beforeunload', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
      sessionStorage.setItem(STORAGE_PAUSED, audio.paused ? 'true' : 'false');
      sessionStorage.setItem(STORAGE_MUTED, audio.muted ? 'true' : 'false');
    });

    audio.addEventListener('play', function () { setPlayingUI(true); });
    audio.addEventListener('pause', function () { setPlayingUI(false); });
  });
})();