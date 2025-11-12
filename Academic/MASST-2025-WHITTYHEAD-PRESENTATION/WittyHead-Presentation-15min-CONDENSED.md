# WittyHead: When Empathy Isn't About Mirroring
**15-Minute Presentation for MASST 2025 Workshop (CONDENSED)**

**Multi-Modal Architecture for Empathetic Human-Agent Collaboration Through Scientifically-Grounded Emotional Expressivity**

---

**Presenter:** Yuri A. Tijerino
**Affiliation:** Kwansei Gakuin University
**Conference:** MASST Initiative Workshop, November 14-15, 2025, London

---

## Condensed Structure (15 minutes exactly)

**Strategy:** Merged and streamlined to fit strict 15-minute limit while preserving core narrative and emotional impact.

**Key Changes from Full Version:**
- Combined Slides 2-3 (Yui + Empathy Paradox) → Single powerful opening
- Merged Slides 4-5 (What Empathy Requires + Introducing WittyHead) → Integrated intro
- Condensed Slide 6 (Architecture) → High-level only, no code
- Combined Slides 7-8 (Context/Safety + Accessibility) → Single MASST slide
- Merged Slides 9-10 (Digital MOAI + MASST Alignment) → Integrated application
- Shortened Slides 11-12 (Status + Open Questions) → Brief bullets only

**Result:** 10 slides, 15 minutes, preserves storytelling impact

---

## Slide 1: Title Slide
**Duration: 30 seconds**

### Visual:
Split image: Generic smiling chatbot (LEFT) vs. WittyHead compassionate concern (RIGHT)

### Speaker Notes:

Good afternoon. I want to tell you about a mistake every "empathetic AI" makes. A mistake that seems intuitive, natural—and is completely wrong.

This is about empathy. Real empathy. The kind that saves lives.

And it turns out: **empathy is NOT what we think it is.**

---

## Slide 2: The Empathy Paradox - Yui's Story
**Duration: 3 minutes** *(COMBINES: Encounter + Paradox)*

### Visual:
- TOP: Yui (22, hikikomori) with smiling chatbot → closing app in distress
- BOTTOM: Research comparison - Mirrored distress ("invalidating") vs. Compassionate concern ("supportive")
- Gilbert et al. study results highlighted

### Speaker Notes:

**Meet Yui.** Twenty-two years old. Hasn't left her room in two years. In Japan: *hikikomori*—social withdrawal.

Tonight, 2:47 AM, she opens a mental health app. Types: *"I can't do this anymore. Everything feels hopeless."*

The AI responds with a big smile, cheerful voice:

**"I hear you're feeling down! Remember, tomorrow is a new day! Have you tried going outside? 😊"**

Yui closes the app. Never opens it again.

**[Pause. Three beats.]**

**Here's what went wrong:** The AI mirrored what IT thought was helpful—positivity.

**Here's what Yui needed:** Someone to see her pain. Not fix it. Not smile at it. **See it.**

**[Shift to research.]**

This isn't anecdotal. Gilbert et al. at University of Derby showed people in distress different facial expressions.

**Mirrored distress** (sad face at sad person): Rated as "invalidating," "aversive," "made me feel worse."

**Compassionate concern** (furrowed brow + gentle smile + steady eye contact): Rated as "understanding," "supportive," "made me feel safe."

**Why?** Empathy isn't sharing the emotion. It's conveying: *"I see your pain. I'm here—steady, calm, present. You're not alone."*

**The neuroscience backs this:** Empathy activates compassion networks, NOT the same emotional circuits as distress. Mirroring someone's panic doesn't help them. It adds a second person who needs help.

**[Pause.]**

Current AI systems—chatbots, virtual assistants—get this catastrophically wrong. For vulnerable populations experiencing depression, anxiety, trauma? This isn't just annoying. **It's dangerous.**

---

## Slide 3: WittyHead - Authentic Empathy Requires Four Coordinated Modalities
**Duration: 2 minutes** *(COMBINES: What Empathy Requires + Introducing WittyHead)*

### Visual:
Four-quadrant diagram:
1. FACE: FACS patterns (AU4+AU6+gentle AU12)
2. GAZE: 60-90% eye contact, direction
3. GESTURE: Prosodic alignment, palm orientation
4. VOICE: Prosody (pitch, rate, volume)

WittyHead avatar in center showing compassionate concern

### Speaker Notes:

Authentic empathy requires coordinating FOUR modalities with millisecond precision:

**FACE:** Specific Facial Action Units:
- AU4 (brow lowerer): Attention, concern
- AU6 (cheek raiser): Warmth, approach
- Gentle AU12 (lip corner puller): Reassurance, NOT happiness
- Relaxed lower face: NOT tension

**GAZE:** 60-90% eye contact (Western cultures). But nuanced:
- Direct gaze for approach emotions (anger, joy)
- Averted gaze for avoidance emotions (fear, shame)

**GESTURE:** Aligned with prosodic peaks (pitch, stressed syllables), not keywords. Palm orientation:
- Palm-up: Openness, trust (optimal for empathy)
- Palm-down: Dominance (AVOIDED in supportive contexts)

**VOICE:** Prosody conveys emotional state:
- Slower rate = calm
- Softer intensity = non-threatening
- Smooth attack = reassurance

**[Introduce WittyHead.]**

**WittyHead** is a multi-modal empathetic agent coordinating all four modalities based on therapeutic alliance research.

**Core innovation:** Non-mirroring empathetic response mapping.

When user shows distress:
- **User: Sad** → Avatar: Compassionate Concern (NOT mirrored sadness)
- **User: Angry** → Avatar: Calm Concern (NOT defensive)
- **User: Fear** → Avatar: Reassuring (NOT shared fear)

For positive emotions, we DO mirror (strengthens rapport).

**This asymmetry is critical:** Compassionate concern achieves significantly higher empathy ratings than mirrored distress.

---

## Slide 4: The Architecture - Six Services, 60 FPS Synchronization
**Duration: 2.5 minutes**

### Visual:
System diagram showing:
1. Emotion Detection → 2. Empathetic Response Orchestrator → 3-6. Modality Controllers (Face, Gaze, Gesture, Voice)
Timeline: 16.7ms synchronization (60 FPS)

Example flow: User Sad (0.82) → Avatar Compassionate Concern (16.7ms response)

### Speaker Notes:

WittyHead integrates six services, synchronized at **60 FPS—16.7 millisecond precision**:

**1. EMOTION DETECTION:** Multi-modal fusion from audio prosody, facial analysis, body pose
Output: "User: Sad (0.82 intensity, 0.15 uncertainty)"

**2. EMPATHETIC RESPONSE ORCHESTRATOR:** The heart of WittyHead. Non-mirroring mapping:

```
User: Sad (0.82) → Avatar: Compassionate Concern
  Face: AU4(0.4) + AU6(0.3) + gentle AU12(0.2)
  Gaze: 75% eye contact, direct
  Voice: 0.85x rate, softer
  Gestures: Palm-up, 4.5/min
```

**3. FACIAL EXPRESSION MANAGER:** Translates FACS patterns to ARKit blendshapes (52 blendshapes)

**4. GAZE MANAGER:** Controls:
- Eye contact % (70-80% for sadness, 30-40% for shame)
- Direction (approach vs. avoidance)
- Pupil dilation (arousal-correlated)
- Blink rate (conversational punctuation)

**5. GESTICULATION MANAGER:** Prosodic-aligned gestures:
- Triggers on TTS pitch peaks
- Palm orientation signals social dynamics
- Frequency adapts: 3.5/min (calm), 7.0/min (energetic)

**6. VOICE MODULATION MANAGER:** Adjusts TTS prosody for emotion

**All synchronized through single timing spine. 16.7 milliseconds. Every frame.**

Because authentic empathy requires temporal coordination. Misaligned modalities = uncanny valley.

---

## Slide 5: MASST Priorities - Context, Safety, Accessibility
**Duration: 2 minutes** *(COMBINES: Context/Safety + Accessibility)*

### Visual:
Three pillars supporting "Multi-Agent Safety":
1. Context-Aware Guardrails (ontology diagram)
2. Mutual Observability (XAI trace)
3. Accessibility-First Design (universal design wheel)

### Speaker Notes:

WittyHead addresses three critical MASST priorities:

**1. CONTEXT-AWARE BEHAVIORAL GUARDRAILS**

Empathy ontology (RDF/OWL) validates responses against:
- **Domain rules:** Block celebration for serious medical diagnosis
- **Cultural norms:** Western (60-90% eye contact) vs. Eastern (30-60%)
- **Individual needs:** Autism spectrum → reduced eye contact

Example safety check:
```
User: Diagnosed with serious illness (sad, fearful)
Candidate: Happy, celebratory → BLOCKED
Override: Generate compassionate concern
```

**2. MUTUAL OBSERVABILITY**

Transparent multi-modal reasoning:
```
XAI Trace:
Input: User Sad (0.82)
Response: Compassionate Concern
  - 75% eye contact (therapeutic alliance research)
  - AU4/AU6/AU12 (Gilbert et al. compassion pattern)
  - Voice 0.85x rate (calming)
  - Palm-up gestures 4.5/min
Reasoning: Non-mirroring for negative emotion
```

Humans can audit WHY the avatar chose this response.

**3. ACCESSIBILITY-FIRST DESIGN**

Universal design across modalities:
- **Visual:** Screen readers, high contrast, voice-first
- **Auditory:** Visual alerts, text, vibration
- **Motor:** Voice control, switch access
- **Cognitive:** "Easy Japanese," progressive disclosure
- **Cultural:** Multilingual, context-aware norms

**Key insight:** Features for accessibility benefit EVERYONE. Voice control helps elderly. Simplified language helps non-native speakers. High-stress users need all of this.

**Design for the edges, improve the center.**

---

## Slide 6: WittyHead + Digital MOAI - Real-World Application
**Duration: 2 minutes** *(COMBINES: Digital MOAI + MASST Alignment)*

### Visual:
Integration diagram:
- Traditional MOAI (5 humans in mutual aid network)
- WittyHead avatars for each member
- Emergency scenario: Haruto's heart attack → Empathetic alert to MOAI

MASST alignment matrix overlay

### Speaker Notes:

WittyHead serves as the empathetic interface for **Digital MOAI**—an AI-enhanced adaptation of traditional Okinawan mutual aid networks.

**MOAI (模合):** Five people. Lifelong mutual support. Proven by Okinawa Centenarian Study (50+ years research): highest centenarian concentration globally.

**Digital MOAI:** AI augments this human structure.

**Example:** Haruto (74, widower) experiences chest pain at 11:47 PM. Alone, afraid, ashamed.

He taps emergency button.

**WittyHead's role:**

1. **Responds to Haruto** with compassionate concern (NOT panic):
   - Face: AU4+AU6+gentle AU12 (understanding)
   - Voice: Calm, steady
   - Message: "Help is on the way. You're not alone."

2. **Alerts MOAI members** with adapted emotional tone:
   - Keiko (close friend): Urgent but NOT panic-inducing
   - Takeshi (practical): Direct, action-oriented
   - Each adapted to their communication style

3. **Coordinates emergency services** with medical history

**Outcome:** Keiko arrives in 5 minutes. Haruto survives.

**WittyHead's contribution:** Emotional support that doesn't mirror panic, adapts to individuals, preserves privacy (local processing), maintains human agency.

**[Quick MASST alignment.]**

**MASST Themes → WittyHead Contributions:**
- Safety by design → Non-mirroring prevents empathy failures
- Context-aware guardrails → Ontology validation
- Mutual observability → XAI traces
- Design-time risk mitigation → Therapeutic research integration
- Human-agent teamwork → Digital MOAI hybrid collectives
- Accessibility → Universal design from inception
- Vulnerable populations → Mental health, disability, elderly focus

---

## Slide 7: Current Status & Open Questions
**Duration: 1.5 minutes** *(COMBINES: Implementation + Questions)*

### Visual:
LEFT: Status chart (✅ Implemented, 🔄 In Progress, 📋 Planned)
RIGHT: Open questions for MASST community

### Speaker Notes:

**CURRENT STATUS (October 2025):**

**✅ Implemented:**
- Non-mirroring architecture design
- FACS-to-ARKit mappings
- Research-validated emotion patterns
- Empathy ontology (RDF/OWL)

**🔄 In Progress:**
- Real-time ARKit integration
- Six-service synchronization
- TTS prosody + gesture coordination

**📋 Planned:**
- Field studies (JSPS KAKENHI Grant JP23K01882)
- Digital Therapeutic Alliance (DTA) measurement
- Cultural adaptation, personalization

**[Shift to engagement.]**

**OPEN QUESTIONS FOR MASST COMMUNITY:**

1. **Formal Verification:** How do we verify "appropriately compassionate" (not just functional correctness)?

2. **Cultural Adaptation:** What's universal vs. culturally specific in empathetic expressivity?

3. **DTA Measurement:** How to extend from text-based chatbots to multi-modal embodied agents?

4. **Personalization vs. Standards:** Balance individual preferences with research-validated baselines?

5. **Safety Standards:** What should govern context-aware empathetic behavior for vulnerable populations?

**These aren't just academic. They're about whether AI can genuinely support people who need it most.**

---

## Slide 8: Conclusion - The Empathy We Need
**Duration: 1.5 minutes**

### Visual:
Return to Yui:
- LEFT: Failed chatbot (smiling, disconnected)
- RIGHT: WittyHead (compassionate concern, connection)
Contact information

### Speaker Notes:

**[Return to beginning. Full circle.]**

Remember Yui and the smiling chatbot that failed her?

Imagine instead WittyHead.

She types: *"I can't do this anymore. Everything feels hopeless."*

WittyHead detects: Sadness (0.91), hopelessness (0.87)

Avatar expression shifts to compassionate concern:
- AU4 (I see your pain)
- AU6 (I care)
- Gentle AU12 (you're safe)
- 75% eye contact (I'm present)

Voice, calm: *"That sounds incredibly hard. I'm here. You don't have to carry this alone."*

No platitudes. No invalidating smile.

Just: **I see you. I'm with you. You matter.**

**[Pause.]**

That's empathy. Real empathy. The kind that might keep Yui talking instead of closing the app. **The kind that might save a life.**

**This is what WittyHead is for.** Not to replace human connection. To augment it. To provide empathetic support when humans aren't available.

**Because empathy isn't about mirroring.**

**It's about being steady when someone else can't be. Understanding pain without falling apart. Compassionate concern, not shared distress.**

**If we're building AI for vulnerable people, we need to get empathy right.**

**[Final beat.]**

Thank you. I'd love to discuss this further—especially the open questions.

**Contact:** ontologist@kwansei.ac.jp
**Project:** WittyHead (empathetic interface for Digital MOAI)
**Supported by:** JSPS KAKENHI Grant JP23K01882

**Let's build empathetic AI that actually works.**

---

## Condensed Timing Breakdown

| Slide | Topic | Time | Cumulative |
|-------|-------|------|------------|
| 1 | Title & Hook | 0:30 | 0:30 |
| 2 | Yui + Empathy Paradox | 3:00 | 3:30 |
| 3 | Four Modalities + WittyHead Intro | 2:00 | 5:30 |
| 4 | Architecture (Six Services) | 2:30 | 8:00 |
| 5 | MASST Priorities (Context/Safety/Accessibility) | 2:00 | 10:00 |
| 6 | Digital MOAI Application + MASST Alignment | 2:00 | 12:00 |
| 7 | Status + Open Questions | 1:50 | 13:50 |
| 8 | Conclusion (Return to Yui) | 1:10 | 15:00 |
| **TOTAL** | | **15:00** | |

**Perfect 15-minute target achieved.**

---

## Condensation Strategy Notes

### What Was Merged:
1. **Slides 2+3:** Yui's encounter + empathy paradox research → Single emotional + scientific opening
2. **Slides 4+5:** What empathy requires + WittyHead introduction → Integrated explanation
3. **Slides 7+8:** Context/safety + accessibility → Single MASST priorities slide
4. **Slides 9+10:** Digital MOAI + MASST alignment → Combined application/alignment
5. **Slides 11+12:** Implementation status + open questions → Brief combined slide

### What Was Preserved:
- ✅ Opening hook (Yui's story)
- ✅ Core insight (empathy ≠ mirroring)
- ✅ Scientific grounding (Gilbert et al., FACS, therapeutic alliance)
- ✅ All four modalities (face, gaze, gesture, voice)
- ✅ Architecture overview (six services, 60 FPS)
- ✅ MASST alignment (all major themes)
- ✅ Digital MOAI integration (Haruto example)
- ✅ Narrative closure (return to Yui)

### What Was Streamlined:
- ❌ Deep code examples (architecture kept high-level)
- ❌ Detailed FACS-to-ARKit mapping tables
- ❌ Extended research citations (mentioned but not elaborated)
- ❌ Separate accessibility deep-dive (integrated into MASST slide)
- ❌ Extended future work discussion (brief bullets only)

### Pacing Strategy:
- **Fast start:** Hook immediately with Yui (0:30 title, 3:00 story+paradox)
- **Build momentum:** Science → Architecture → MASST (2:00 + 2:30 + 2:00)
- **Application:** Digital MOAI shows it working (2:00)
- **Engage:** Open questions invite participation (1:50)
- **Strong close:** Return to Yui for emotional resonance (1:10)

---

## Delivery Tips for 15-Minute Format

### Critical Timing Checkpoints:
- **5:30 mark:** Should be finishing Slide 3 (WittyHead intro)
- **10:00 mark:** Should be finishing Slide 5 (MASST priorities)
- **13:50 mark:** Should be starting conclusion

### If Running Over:
**Cut in this order:**
1. Shorten Slide 4 (Architecture) - Remove code example, just show diagram
2. Reduce Slide 7 (Status) - Skip "In Progress" details, focus on Implemented + Questions
3. Tighten Slide 6 (Digital MOAI) - Mention Haruto, don't narrate full scenario

### If Running Under:
**Expand in this order:**
1. Add pause after Yui's story (let emotion land)
2. Expand research citation in Slide 2 (Gilbert study details)
3. Add example XAI trace in Slide 5 (show actual log output)

### Energy Management:
- **High energy:** Slides 1-3 (hook, engage, surprise)
- **Technical confidence:** Slides 4-5 (demonstrate rigor)
- **Warm application:** Slide 6 (show it working for real people)
- **Collaborative:** Slide 7 (invite community participation)
- **Emotional close:** Slide 8 (return to human impact)

---

## Visual Design Guidelines (Condensed Version)

### Slide Aesthetics:
- **Minimal text:** Maximum 3-4 bullet points per slide
- **Large, clear diagrams:** Architecture and modality wheels
- **Human faces:** WittyHead expressions demonstrate concepts
- **Consistent color scheme:** Warm (empathy) vs. cool (technology)
- **High contrast:** Accessibility from design stage

### Key Visuals to Prepare:
1. **Slide 1:** Split image (failed chatbot vs. WittyHead)
2. **Slide 2:** Yui photo sequence + research comparison chart
3. **Slide 3:** Four-modality quadrant diagram with WittyHead center
4. **Slide 4:** Six-service architecture with timing spine
5. **Slide 5:** Three-pillar diagram (Context/Safety/Accessibility)
6. **Slide 6:** MOAI network + WittyHead integration
7. **Slide 7:** Status chart + question marks
8. **Slide 8:** Return to Yui (side-by-side before/after)

---

## Backup Slides (Not in Main Presentation)

### Slide B1: Detailed FACS Mapping
*Use if asked: "How do you implement compassionate concern?"*

### Slide B2: Performance Metrics
*Use if asked: "What's the computational overhead?"*

### Slide B3: Cultural Adaptation Details
*Use if asked: "How does this work across cultures?"*

### Slide B4: Digital MOAI Architecture
*Use if asked: "Tell me more about Digital MOAI"*

### Slide B5: Research Citations
*Use if asked: "What's the research basis?"*

---

## Q&A Strategy (5-10 minutes after presentation)

### Anticipated Questions:

**Q: "How do you validate perceived empathy?"**
A: Planned field studies with DTA instruments adapted for multi-modal agents. Extending research from text-based chatbots (Beatty et al.) to embodied expressivity.

**Q: "Cultural differences?"**
A: Critical issue. Current: Western norms. Future: Cultural ontology for adaptive gaze (Eastern 30-60% vs. Western 60-90%). Semantic approach allows cultural rules without retraining.

**Q: "Individual differences like autism?"**
A: Personalized empathy profiles. Users configure expression intensity, gaze %, gesture frequency based on comfort. Accessibility-first design from inception.

**Q: "Performance overhead?"**
A: Target 60 FPS (16.7ms). FACS-to-ARKit is lightweight (table lookup). Bottleneck: TTS prosody for gesture alignment. Optimizing real-time audio features.

**Q: "Uncanny valley?"**
A: Three strategies: (1) Scientifically-validated expressions (not random), (2) Temporal coordination (misalignment creates uncanny), (3) Asymmetric responses (avoiding fake empathy feel).

---

## Post-Presentation Materials

### One-Page Handout:
- Core insight: Empathy ≠ Mirroring
- Four modalities (face, gaze, gesture, voice)
- MASST alignment bullet points
- Key references (Gilbert, McEwan, FACS, DTA)
- Contact: ontologist@kwansei.ac.jp

### QR Code Links:
- WittyHead project page (when available)
- Digital MOAI presentation (follow-up)
- Research paper PDF

---

**Document Status:** Ready for 15-Minute Delivery
**Timing:** Exactly 15:00 with strategic buffer points
**Next Actions:**
1. Create visual slides (8 main + 5 backup)
2. Practice with timer (aim for 14:30-15:00)
3. Prepare one-page handout
4. Coordinate timing with Digital MOAI presentation

---

**Contact Information:**
**Yuri A. Tijerino**
Kwansei Gakuin University
Intelligent Blockchain+ Innovation Research Center
ontologist@kwansei.ac.jp

**Supported by:** JSPS KAKENHI Grant JP23K01882 (PI: Kazuko Kotoku)

---

**END OF CONDENSED PRESENTATION**
