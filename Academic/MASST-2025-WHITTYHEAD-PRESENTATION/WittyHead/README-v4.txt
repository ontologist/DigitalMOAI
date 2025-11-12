WittyHead MASST Paper v4 - 2-Page Submission Package
====================================================

Author: Yuri A. Tijerino
Email: ontologist@kwansei.ac.jp
Affiliation: Kwansei Gakuin University, Intelligent Blockchain+ Innovation Research Center
Date: 2025-10-14

CONTENTS
--------
1. wittyhead-masst-paper-v4-2page.tex - Main paper (2-page condensed version)
2. IEEEtran.cls - IEEE LaTeX class file (v1.8b)
3. README-v4.txt - This file

PAPER DETAILS
-------------
Title: WittyHead: A Multi-Modal Architecture for Empathetic Human-Agent Collaboration Through Emotional Expressivity
Word Count: ~1,389 words
Target Length: 2 pages (IEEE double-column format)
References: 15 citations (from 30 total in references-v4.bib)
Bibliography Format: BibTeX
Workshop: MASST 2025 (Multi-Agent Systems Safety and Trust)

COMPILATION INSTRUCTIONS
------------------------
For Overleaf:
1. Upload wittyhead-masst-v4-2page.zip to Overleaf
2. Set main document: wittyhead-masst-paper-v4-2page.tex
3. Compiler: pdfLaTeX (recommended)
4. Overleaf will automatically run BibTeX - just click "Recompile"
5. LaTeX will select only the 15 cited papers from references-v4.bib

For Local Compilation:
pdflatex wittyhead-masst-paper-v4-2page.tex
pdflatex wittyhead-masst-paper-v4-2page.tex

Or with latexmk:
latexmk -pdf wittyhead-masst-paper-v4-2page.tex

PAPER OVERVIEW
--------------
This 2-page paper presents WittyHead, an anthropomorphic multi-modal empathetic agent addressing three MASST priorities:

1. Context-Aware Behavioral Guard Rails
   - Asymmetric emotion mappings (prevent invalidating mirroring)
   - Ontology-driven validation
   - Accessibility guard rails (WCAG 2.1 AAA)

2. Mutual Observability
   - Transparent system logs
   - Multi-modal coordination (6 services)
   - Evidence-traceable reasoning

3. Design-Time Risk Mitigation
   - FACS-validated expressions
   - Therapeutic eye contact (60-90%)
   - Prosodic gesture alignment

KEY INNOVATION
--------------
Evidence-based empathetic response architecture implementing therapeutic alliance research:
- User distress → Avatar compassionate concern (NOT mirrored distress)
- Based on Gilbert et al. (2019) research showing mirrored distress is "invalidating and aversive"
- Coordinated facial expressions (FACS), gaze, gestures, and voice

REAL-WORLD APPLICATION
-----------------------
Digital MOAI: AI-enhanced Okinawan mutual aid networks supporting vulnerable populations
- Foster care youth
- Elderly experiencing social isolation
- Mental health support between therapy sessions

TECHNICAL HIGHLIGHTS
--------------------
- Privacy-preserving: Local-first emotion processing (AIngle DLT)
- User-controlled: Three automation levels
- Accessible: Easy Japanese, WCAG 2.1 AAA compliance
- Real-time: 0.16ms latency, 60 FPS synchronization

CITATIONS (15 papers)
---------------------
Core evidence:
- Gilbert et al. (2019) - Compassionate faces (6 citations)
- Dowell & Berman (1994) - Therapeutic alliance (3 citations)
- Ekman & Friesen (1978) - FACS
- Beatty et al. (2022) - Digital Therapeutic Alliance (Wysa)
- D'Alfonso et al. (2020) - DTA framework

Multi-modal coordination:
- Adams & Kleck (2005) - Gaze and emotion
- Loehr (2012) - Gesture-prosody synchrony
- Pease & Pease (2006) - Palm orientation
- Vertegaal et al. (2001) - Gaze turn-taking

Application context:
- Bradshaw & Mahmud (2025) - MASST Initiative
- Buettner (2008) - Blue Zones & MOAI
- WCAG 2.1 (2018) - Accessibility
- Miyazaki (2007) - Easy Japanese
- FASTER H2020 (2019-2022) - AIngle DLT
- Kotoku & Tijerino (2021) - AI in nursing

CONDENSATION FROM v3
--------------------
This v4 is a condensed version of the full v3 paper (5.5 pages → 2 pages):
- 64% word reduction (3,810 → 1,389 words)
- References reduced from 30 to 15 citations
- Organized around MASST priorities
- Preserved high-impact elements:
  * Empathetic Response Mapping table
  * Gilbert et al. compassionate faces research
  * Digital MOAI integration
  * Multi-modal coordination description

VERSION HISTORY
---------------
v1: OntoGraph knowledge graph focus (rejected)
v2: WittyHead architecture (corrected, no fabricated data)
v3: Full empathetic collaboration paper (5.5 pages, 30 refs)
v4: Condensed for MASST 2-page requirement (this version)

SUPPORT
-------
JSPS KAKENHI Grant JP23K01882 (PI: K. Kotoku)
EU H2020 FASTER Project (Grant 833507)

CONTACT
-------
Yuri A. Tijerino
Intelligent Blockchain+ Innovation Research Center
Kwansei Gakuin University
Sanda, Hyogo, Japan
Email: ontologist@kwansei.ac.jp
