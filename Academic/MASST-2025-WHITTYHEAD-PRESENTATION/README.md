# WittyHead Presentation - MASST 2025 Workshop

**15-Minute Storytelling Presentation**
**Topic:** Non-Mirroring Empathy Architecture for Human-Agent Collaboration
**Conference:** First International MASST Initiative Workshop, London, November 14-15, 2025

---

## 📋 Overview

This presentation introduces **WittyHead**, a multi-modal empathetic interface architecture designed for safe human-agent collaboration, particularly for vulnerable populations. The presentation uses a storytelling approach centered on Yui's story to illustrate the empathy paradox and demonstrate how scientifically-grounded emotional expressivity differs from simple emotional mirroring.

---

## 🎯 Key Concepts

- **Non-Mirroring Empathy**: Compassionate concern (not mirrored distress) based on Gilbert et al. therapeutic alliance research
- **Four Modalities**: Face, Gaze, Gesture, Voice - synchronized at 60 FPS (16.7ms precision)
- **Six-Service Architecture**: Emotion Detection, Response Orchestrator, Facial Expression Manager, Gaze Manager, Gesticulation Manager, Voice Modulation Manager
- **Digital MOAI Integration**: Empathetic interface for traditional Okinawan mutual aid networks

---

## 📁 Files

### Presentation Content

- **`WittyHead-Presentation-15min-STORYTELLING.md`**: Full storytelling version with detailed speaker notes (~20 minutes of content)
- **`WittyHead-Presentation-15min-CONDENSED.md`**: Condensed version (exactly 15:00 minutes) with timing checkpoints
- **`docs/index.html`**: Interactive HTML presentation
- **`docs/styles.css`**: Complete styling with animations and responsive design
- **`docs/script.js`**: Navigation, timer, keyboard shortcuts, and presentation controls

### Source Material

- **`WittyHead/`**: Research papers, abstracts, LaTeX sources, and submission materials

---

## 🚀 Viewing the Presentation

### Option 1: GitHub Pages (Recommended for Presentation)

1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/DigitalMOAI.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under "Source", select **main** branch
   - Select **`/Academic/MASST-2025-WHITTYHEAD-PRESENTATION/docs`** folder
   - Click **Save**

3. **Access your presentation**:
   - URL: `https://YOUR_USERNAME.github.io/DigitalMOAI/Academic/MASST-2025-WHITTYHEAD-PRESENTATION/`
   - Wait 1-2 minutes for GitHub Pages to build

### Option 2: Local Viewing

1. **Open directly in browser**:
   ```bash
   open docs/index.html
   ```

2. **Or use a local web server** (recommended for full functionality):
   ```bash
   cd docs
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `N` | Toggle speaker notes |
| `F` | Toggle fullscreen |
| `R` | Reset timer |
| `?` / `H` | Show keyboard shortcuts |
| `Esc` | Close help menu |

---

## 📊 Presentation Structure (15:00 Total)

| # | Slide | Duration | Cumulative | Checkpoint |
|---|-------|----------|------------|------------|
| 1 | Title | 0:30 | 0:30 | - |
| 2 | Yui's Story + Empathy Paradox | 3:00 | 3:30 | - |
| 3 | Four Modalities | 2:00 | 5:30 | ✓ 5:30 |
| 4 | Six-Service Architecture | 2:30 | 8:00 | - |
| 5 | MASST Priorities | 2:00 | 10:00 | ✓ 10:00 |
| 6 | Digital MOAI Integration | 2:00 | 12:00 | - |
| 7 | Status + Open Questions | 1:50 | 13:50 | ✓ 13:50 |
| 8 | Conclusion (Return to Yui) | 1:10 | 15:00 | ✓ 15:00 |

---

## 🎨 Features

### Interactive Controls

- **Navigation**: Previous/Next buttons and keyboard shortcuts
- **Progress Bar**: Visual progress indicator at top of screen
- **Timer**: Live presentation timer with color-coded warnings:
  - Green: 0-13 minutes (on track)
  - Orange: 13-15 minutes (approaching limit)
  - Red: 15+ minutes (over time)
- **Slide Counter**: Current slide / Total slides
- **Speaker Notes**: Toggle visibility for practice or presentation mode
- **Fullscreen**: Immersive presentation mode
- **Timer Reset**: Reset timing for practice runs

### Responsive Design

- Optimized for desktop, tablet, and mobile devices
- Touch gestures for mobile navigation (swipe left/right)
- Print-friendly styles for handouts

### Accessibility

- Semantic HTML structure
- Keyboard-only navigation support
- High contrast color scheme
- Clear typography and spacing
- ARIA-friendly controls

---

## 🛠️ Technical Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **GitHub Pages**: Free, reliable hosting

---

## 📝 Speaker Notes

Each slide includes detailed speaker notes with:

- **Timing guidance**: Target duration for each section
- **Narrative cues**: Story beats and emotional emphasis
- **Technical details**: Key points to cover
- **Transitions**: Smooth flow between slides

Toggle speaker notes with the **"Show Notes"** button or press **`N`**.

---

## 🔧 Customization

### Modify Slide Content

Edit `docs/index.html` to change slide content. Each slide follows this structure:

```html
<section class="slide" id="slide-X">
    <div class="slide-content">
        <!-- Your content here -->
    </div>
    <div class="slide-notes">
        <p><strong>Duration: X minutes</strong></p>
        <p>Speaker notes here...</p>
    </div>
</section>
```

### Adjust Styling

Edit `docs/styles.css` to customize:

- Color scheme (`:root` CSS variables)
- Fonts and typography
- Spacing and layout
- Animations and transitions

### Modify Behavior

Edit `docs/script.js` to customize:

- Navigation logic
- Timing alerts
- Keyboard shortcuts
- Touch gestures

---

## 📚 Related Materials

- **WittyHead Research Paper**: `WittyHead/WittyHead__A_Multi_Modal_Architecture_for_Empathetic_Human_Agent_Collaboration_Through_Scientifically_Grounded_Emotional_Expressivity14page.pdf`
- **MASST 2025 Submission**: `WittyHead/MASST-2025-WITTYHEAD-SUBMISSION.pdf`
- **Digital MOAI Presentation**: `../MASST-2025-SUBMISSION/` (predecessor presentation)

---

## 🎤 Presentation Tips

1. **Practice with Timer**: Run through several times to hit 15:00 exactly
2. **Use Speaker Notes**: Toggle on during practice, off during presentation
3. **Check Timing Checkpoints**:
   - 5:30 after Slide 3 (Four Modalities)
   - 10:00 after Slide 5 (MASST Priorities)
   - 13:50 after Slide 7 (Status + Questions)
4. **Fullscreen Mode**: Use `F` key for immersive presentation
5. **Navigate Confidently**: Use arrow keys or buttons, avoid mouse distractions
6. **Emphasize Story**: Yui's opening and closing bookends create emotional impact
7. **Pace Technical Content**: Slides 3-7 are dense; maintain steady pace

---

## 📞 Contact

**Yuri Tijerino**
Block Innovation LLC
Email: [your email]
GitHub: https://github.com/blockinnovation/aingle-dlt

---

## 📄 License

This presentation is part of the Digital MOAI academic research project.

---

## 🙏 Acknowledgments

- **MASST 2025 Workshop**: First International MASST Initiative Workshop organizers
- **Gilbert et al.**: Therapeutic alliance research foundation
- **Digital MOAI Community**: Inspiration for vulnerable population support systems

---

**Document Created**: 2025-11-12
**Last Updated**: 2025-11-12
**Status**: Ready for Presentation

🤖 *Generated with [Claude Code](https://claude.com/claude-code)*
