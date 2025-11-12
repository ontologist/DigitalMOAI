// ============================================
// WittyHead Presentation - MASST 2025 Workshop
// Interactive Navigation & Timer
// ============================================

(function() {
    'use strict';

    // === STATE ===
    let currentSlide = 0;
    let totalSlides = 0;
    let timerStartTime = Date.now();
    let timerInterval = null;
    let speakerNotesVisible = false;
    let keyboardShortcutsVisible = false;

    // === DOM ELEMENTS ===
    let slides = [];
    let prevButton, nextButton, toggleNotesButton, fullscreenButton, resetTimerButton, helpButton;
    let slideCounter, timer, progressFill;
    let keyboardShortcuts;

    // === INITIALIZATION ===
    function init() {
        // Get all slides
        slides = Array.from(document.querySelectorAll('.slide'));
        totalSlides = slides.length;

        // Get control elements
        prevButton = document.getElementById('prev-slide');
        nextButton = document.getElementById('next-slide');
        toggleNotesButton = document.getElementById('toggle-notes');
        fullscreenButton = document.getElementById('fullscreen');
        resetTimerButton = document.getElementById('reset-timer');
        helpButton = document.getElementById('help');
        slideCounter = document.getElementById('slide-counter');
        timer = document.getElementById('timer');
        progressFill = document.querySelector('.progress-fill');
        keyboardShortcuts = document.getElementById('keyboard-shortcuts');

        // Set up event listeners
        setupEventListeners();

        // Show first slide
        showSlide(0);

        // Start timer
        startTimer();

        // Update URL hash if present
        checkUrlHash();
    }

    // === EVENT LISTENERS ===
    function setupEventListeners() {
        // Navigation buttons
        prevButton.addEventListener('click', previousSlide);
        nextButton.addEventListener('click', nextSlide);

        // Control buttons
        toggleNotesButton.addEventListener('click', toggleSpeakerNotes);
        fullscreenButton.addEventListener('click', toggleFullscreen);
        resetTimerButton.addEventListener('click', resetTimer);
        helpButton.addEventListener('click', toggleKeyboardShortcuts);

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyPress);

        // Hash change for direct slide access
        window.addEventListener('hashchange', checkUrlHash);

        // Fullscreen change
        document.addEventListener('fullscreenchange', updateFullscreenButton);
        document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
        document.addEventListener('mozfullscreenchange', updateFullscreenButton);
    }

    // === NAVIGATION ===
    function showSlide(index) {
        // Validate index
        if (index < 0 || index >= totalSlides) return;

        // Remove active class from all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'previous');
            if (i < index) {
                slide.classList.add('previous');
            }
        });

        // Add active class to current slide
        slides[index].classList.add('active');
        currentSlide = index;

        // Update controls
        updateControls();

        // Update URL hash
        window.location.hash = `slide-${index + 1}`;

        // Scroll to top of slide
        slides[index].scrollTop = 0;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function previousSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    function updateControls() {
        // Update slide counter
        slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

        // Update progress bar
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressFill.style.width = `${progress}%`;

        // Enable/disable navigation buttons
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === totalSlides - 1;

        // Update button text
        if (currentSlide === totalSlides - 1) {
            nextButton.textContent = 'End';
        } else {
            nextButton.textContent = 'Next →';
        }
    }

    // === KEYBOARD NAVIGATION ===
    function handleKeyPress(e) {
        // Don't handle if typing in input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                showSlide(0);
                break;
            case 'End':
                e.preventDefault();
                showSlide(totalSlides - 1);
                break;
            case 'n':
            case 'N':
                e.preventDefault();
                toggleSpeakerNotes();
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                toggleFullscreen();
                break;
            case 'r':
            case 'R':
                e.preventDefault();
                resetTimer();
                break;
            case '?':
            case 'h':
            case 'H':
                e.preventDefault();
                toggleKeyboardShortcuts();
                break;
            case 'Escape':
                if (keyboardShortcutsVisible) {
                    toggleKeyboardShortcuts();
                }
                break;
        }
    }

    // === SPEAKER NOTES ===
    function toggleSpeakerNotes() {
        speakerNotesVisible = !speakerNotesVisible;

        const allNotes = document.querySelectorAll('.slide-notes');
        allNotes.forEach(notes => {
            if (speakerNotesVisible) {
                notes.classList.add('visible');
            } else {
                notes.classList.remove('visible');
            }
        });

        // Update button text
        toggleNotesButton.textContent = speakerNotesVisible ? 'Hide Notes' : 'Show Notes';
    }

    // === FULLSCREEN ===
    function toggleFullscreen() {
        const container = document.querySelector('.presentation-container');

        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement) {
            // Enter fullscreen
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
        }
    }

    function updateFullscreenButton() {
        const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        fullscreenButton.textContent = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
    }

    // === TIMER ===
    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Initial update
    }

    function updateTimer() {
        const elapsed = Date.now() - timerStartTime;
        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timer.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;

        // Color coding for time checkpoints
        if (minutes >= 15) {
            timer.style.color = '#d63031'; // Red - over time
        } else if (minutes >= 13) {
            timer.style.color = '#f59e0b'; // Orange - approaching 15 min
        } else {
            timer.style.color = '#00b894'; // Green - on track
        }
    }

    function resetTimer() {
        timerStartTime = Date.now();
        updateTimer();
    }

    function padZero(num) {
        return num.toString().padStart(2, '0');
    }

    // === KEYBOARD SHORTCUTS HELP ===
    function toggleKeyboardShortcuts() {
        keyboardShortcutsVisible = !keyboardShortcutsVisible;

        if (keyboardShortcutsVisible) {
            keyboardShortcuts.classList.add('visible');
        } else {
            keyboardShortcuts.classList.remove('visible');
        }
    }

    // === URL HASH NAVIGATION ===
    function checkUrlHash() {
        const hash = window.location.hash;
        if (hash) {
            const match = hash.match(/slide-(\d+)/);
            if (match) {
                const slideNum = parseInt(match[1], 10) - 1;
                if (slideNum >= 0 && slideNum < totalSlides) {
                    showSlide(slideNum);
                }
            }
        }
    }

    // === TOUCH GESTURES (Mobile Support) ===
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next slide
                nextSlide();
            } else {
                // Swiped right - previous slide
                previousSlide();
            }
        }
    }

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    // === PRESENTATION NOTES (Console Logging) ===
    function logSlideInfo() {
        console.log('=== WittyHead Presentation ===');
        console.log(`Total Slides: ${totalSlides}`);
        console.log(`Current Slide: ${currentSlide + 1}`);
        console.log('Keyboard Shortcuts:');
        console.log('  → / Space / PageDown : Next slide');
        console.log('  ← / PageUp          : Previous slide');
        console.log('  Home                : First slide');
        console.log('  End                 : Last slide');
        console.log('  N                   : Toggle speaker notes');
        console.log('  F                   : Toggle fullscreen');
        console.log('  R                   : Reset timer');
        console.log('  ? / H               : Show keyboard shortcuts');
        console.log('=============================');
    }

    // === SLIDE-SPECIFIC TIMING WARNINGS ===
    const slideTimings = [
        { slide: 0, target: 0.5, label: "Title" },
        { slide: 1, target: 3.5, label: "Yui + Paradox" },
        { slide: 2, target: 5.5, label: "Four Modalities" },
        { slide: 3, target: 8, label: "Architecture" },
        { slide: 4, target: 10, label: "MASST Priorities" },
        { slide: 5, target: 12, label: "Digital MOAI" },
        { slide: 6, target: 13.83, label: "Status + Questions" },
        { slide: 7, target: 15, label: "Conclusion" }
    ];

    function checkTiming() {
        const elapsed = (Date.now() - timerStartTime) / 1000 / 60; // minutes
        const currentTiming = slideTimings[currentSlide];

        if (currentTiming && elapsed > currentTiming.target + 0.5) {
            console.warn(`⚠️ Running behind schedule on "${currentTiming.label}"`);
            console.log(`Target: ${currentTiming.target} min | Actual: ${elapsed.toFixed(2)} min`);
        }
    }

    // Check timing when slide changes
    document.addEventListener('keydown', function(e) {
        if (['ArrowRight', ' ', 'PageDown', 'ArrowLeft', 'PageUp'].includes(e.key)) {
            setTimeout(checkTiming, 100);
        }
    });

    // === AUTO-START ON LOAD ===
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Log initial info
    window.addEventListener('load', logSlideInfo);

    // === PUBLIC API (for debugging) ===
    window.WittyHeadPresentation = {
        goToSlide: showSlide,
        nextSlide: nextSlide,
        previousSlide: previousSlide,
        toggleNotes: toggleSpeakerNotes,
        toggleFullscreen: toggleFullscreen,
        resetTimer: resetTimer,
        getCurrentSlide: () => currentSlide,
        getTotalSlides: () => totalSlides,
        getElapsedTime: () => {
            const elapsed = (Date.now() - timerStartTime) / 1000;
            return { minutes: Math.floor(elapsed / 60), seconds: Math.floor(elapsed % 60) };
        }
    };

})();
