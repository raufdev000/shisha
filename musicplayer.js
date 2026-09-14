/* ================================================================
   CAFE MOISHI — BACKGROUND MUSIC PLAYER
   ----------------------------------------------------------------
   - Tries to autoplay the ambient track the moment the page loads.
   - Browsers block unmuted autoplay until the visitor has interacted
     with the page at least once — if that happens, we fall back to
     starting playback on the very first click/tap/keypress anywhere
     on the site, so the music still starts itself without the
     visitor needing to find and press the icon specifically.
   - Playback position is saved to sessionStorage continuously, so a
     refresh resumes from the same spot instead of restarting from 0.
   - If the visitor explicitly pauses via the icon, that choice is
     also remembered for the rest of the browser tab's session.
   ================================================================ */
(function () {
  'use strict';

  var STORAGE_TIME = 'moishiMusicTime';
  var STORAGE_PAUSED = 'moishiMusicPaused';

  document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bgMusic');
    var player = document.getElementById('musicPlayer');
    var toggleBtn = document.getElementById('musicToggle');

    if (!audio || !player || !toggleBtn) return;

    // ---- Restore saved playback position (so refresh doesn't restart) ----
    var savedTime = parseFloat(sessionStorage.getItem(STORAGE_TIME));
    if (!isNaN(savedTime) && savedTime > 0) {
      try { audio.currentTime = savedTime; } catch (e) { /* not ready yet, retry on loadedmetadata */
        audio.addEventListener('loadedmetadata', function onMeta() {
          audio.currentTime = savedTime;
          audio.removeEventListener('loadedmetadata', onMeta);
        });
      }
    }

    var userPaused = sessionStorage.getItem(STORAGE_PAUSED) === 'true';

    function setPlayingUI(isPlaying) {
      player.classList.toggle('is-playing', isPlaying);
      toggleBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      toggleBtn.setAttribute(
        'aria-label',
        isPlaying ? 'Pause background music' : 'Play background music'
      );
    }

    function attemptPlay() {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            setPlayingUI(true);
          })
          .catch(function () {
            // Autoplay blocked — wait for the first user interaction anywhere
            // on the page, then start automatically (no click on the icon needed).
            setPlayingUI(false);
            // Only events the browser actually treats as a qualifying "user
            // gesture" for unlocking audio playback — mousemove/scroll do NOT
            // count in Chrome/Safari's autoplay policy, so they're left out.
            // The moment the visitor does any of these ANYWHERE on the page
            // (not specifically on the music icon), playback starts itself.
            var interactionEvents = ['click', 'mouseup', 'pointerup', 'keyup', 'touchend'];
            var startOnInteract = function () {
              if (!userPaused) {
                audio.play().then(function () { setPlayingUI(true); }).catch(function () {});
              }
              interactionEvents.forEach(function (evt) {
                document.removeEventListener(evt, startOnInteract);
              });
            };
            interactionEvents.forEach(function (evt) {
              document.addEventListener(evt, startOnInteract, { once: true, passive: true });
            });
          });
      }
    }

    // ---- Boot: play automatically unless the visitor paused it earlier this tab session ----
    if (!userPaused) {
      attemptPlay();
    } else {
      setPlayingUI(false);
    }

    // ---- Manual toggle via the icon ----
    toggleBtn.addEventListener('click', function () {
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

    // ---- Persist playback position continuously ----
    audio.addEventListener('timeupdate', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
    });

    window.addEventListener('beforeunload', function () {
      sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
      sessionStorage.setItem(STORAGE_PAUSED, audio.paused ? 'true' : 'false');
    });

    // Keep the icon in sync if playback state changes for any other reason
    audio.addEventListener('play', function () { setPlayingUI(true); });
    audio.addEventListener('pause', function () { setPlayingUI(false); });
  });
})();