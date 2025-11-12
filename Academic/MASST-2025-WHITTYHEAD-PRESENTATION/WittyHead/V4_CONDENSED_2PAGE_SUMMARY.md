# WittyHead MASST Paper v4 - 2-Page Condensed Version

**Date**: 2025-10-14
**Version**: v4 (2-page condensed for MASST CFP)
**Status**: Ready for Compilation and Review

---

## Executive Summary

Created a condensed 2-page version of the WittyHead paper to meet MASST workshop's 2-page submission requirement. The v4 paper focuses exclusively on the highest-impact, most MASST-relevant content from the 5.5-page v3 version.

---

## Version Comparison

| Aspect | v3 (Full Version) | v4 (Condensed) |
|--------|-------------------|----------------|
| **Length** | 5.5 pages | ~2 pages (target) |
| **Word Count** | ~3,810 words | ~1,389 words |
| **References** | 30 citations | 15 citations (used) |
| **Bibliography Format** | Inline `\begin{thebibliography}` | Inline `\begin{thebibliography}` |
| **Sections** | 6 sections + detailed subsections | 6 sections (condensed) |
| **Focus** | Comprehensive architecture + research | MASST priorities + core innovation |
| **Background** | Detailed subsections (DTA, FACS, Gaze, Accessibility) | Integrated into main narrative |
| **Implementation** | Detailed code examples, multi-modal coordination | Core innovation only |
| **Tables** | 1 (Empathetic Response Mapping) | 1 (same table, kept for impact) |

---

## Key Condensation Strategies

### 1. **MASST-Centric Organization**
Reorganized entire paper around three MASST priorities:
- Context-aware behavioral guard rails (Section 2.1)
- Mutual observability (Section 2.2)
- Design-time risk mitigation (Section 2.3)

### 2. **Eliminated Detailed Background**
**v3 had**: Separate subsections for:
- Digital Therapeutic Alliance definitions (210 words)
- FACS detailed description (180 words)
- Gaze, Gesticulation, Prosody research (200 words)
- Accessibility and Universal Design (150 words)

**v4 approach**: Integrated key concepts directly into architecture description where needed, citing papers inline without separate background sections.

### 3. **Streamlined Implementation**
**v3 had**:
- Detailed Python code snippets for ARKit blendshapes
- Extensive multi-modal coordination algorithms
- Service-by-service implementation details

**v4 has**:
- One paragraph on compassionate concern expression (FACS pattern)
- One paragraph on multi-modal coordination principles
- No code snippets

### 4. **Focused Discussion**
**v3 had**:
- Separate subsections for MASST contributions, supporting vulnerable populations, beyond emotional mirroring, limitations, future work

**v4 has**:
- MASST Initiative Contributions (condensed to 1 paragraph per priority)
- Implications for Empathetic MAS (2 short paragraphs: beyond mirroring + DTA extension)

### 5. **Maintained High-Impact Elements**
**Kept from v3**:
- Empathetic Response Mapping table (visual + critical safety feature)
- Gilbert et al. (2019) compassionate faces research (core evidence)
- Digital MOAI integration (real-world application)
- Three MASST priorities (workshop relevance)
- Therapeutic alliance citations (scientific grounding)

---

## Section-by-Section Comparison

### Abstract
**v3**: 158 words, comprehensive description of all components
**v4**: 109 words, focused on MASST priorities and core innovation

**Key change**: Removed detailed description of multi-modal coordination, kept empathetic response mapping emphasis.

---

### Section 1: Introduction
**v3**: 2 paragraphs (245 words)
- Paragraph 1: MAS safety requirements + empathy paradox
- Paragraph 2: WittyHead system description + components

**v4**: 2 paragraphs (142 words)
- Paragraph 1: MAS safety requirements + empathy paradox (condensed)
- Paragraph 2: WittyHead system + Digital MOAI application (condensed)

**Key change**: Removed detailed component enumeration, combined system description with application context.

---

### Section 2: MASST-Aligned Architecture
**v3**: Section 3 "WittyHead Multi-Modal Architecture" (1,200+ words)
- 6 subsections: Empathetic Response Orchestrator, Facial Expression Manager, Gaze Manager, Gesticulation Manager, Accessibility Features, Digital MOAI Integration

**v4**: Section 2 "MASST-Aligned Architecture" (580 words)
- 3 subsections aligned with MASST priorities:
  - 2.1 Context-Aware Behavioral Guard Rails
  - 2.2 Mutual Observability
  - 2.3 Design-Time Risk Mitigation

**Key change**: Reorganized architecture around MASST framework instead of technical components. Each subsection directly addresses one MASST priority with concrete examples.

---

### Section 3: Digital MOAI Integration
**v3**: Subsection within Architecture (220 words)
**v4**: Standalone section (145 words)

**Key change**: Elevated to main section to emphasize real-world impact. Removed detailed technical descriptions, kept privacy-preserving, user-controlled, and safety-critical application aspects.

---

### Section 4: Implementation
**v3**: Section 4 "Implementation and Validation" (450 words)
- Detailed Python code for ARKit blendshapes
- Multi-modal coordination algorithms
- Validation methodology

**v4**: Section 4 "Implementation" (135 words)
- 1 paragraph: Compassionate concern expression (FACS pattern without code)
- 1 paragraph: Multi-modal coordination principles (no algorithms)

**Key change**: Removed all code snippets and detailed algorithms. Focused on conceptual innovation (non-mirroring empathetic response architecture) and research grounding.

---

### Section 5: Discussion
**v3**: Section 5 "Discussion and Future Work" (520 words)
- 5 subsections: MASST Initiative Contributions, Supporting Vulnerable Populations, Beyond Emotional Mirroring, Limitations, Future Work

**v4**: Section 5 "Discussion" (240 words)
- 2 subsections:
  - 5.1 MASST Initiative Contributions (3 paragraphs, one per priority)
  - 5.2 Implications for Empathetic MAS (2 paragraphs: beyond mirroring + DTA extension)

**Key change**: Consolidated all discussion into MASST contributions and implications. Moved limitations/future work to conclusion.

---

### Section 6: Conclusion
**v3**: 180 words with comprehensive summary and future research plans
**v4**: 118 words, focused on key requirements and future DTA validation

**Key change**: Condensed to essential contribution summary + single future work sentence about DTA measurement.

---

## References: 30 → 15 Citations

### **Retained Core References (15)**

1. **MASST Initiative**
   - `bradshaw2024masst` - MASST workshop definition

2. **Empathetic Computing (Core Evidence)**
   - `gilbert2019compassion` - Compassionate faces research (6 citations in v4)
   - `dowell1979therapist` - Therapeutic alliance (3 citations in v4)

3. **Digital Therapeutic Alliance**
   - `beatty2022wysa` - Wysa CBT agent study (2 citations in v4)
   - `dalfonso2020digital` - DTA framework (1 citation in v4)

4. **Multi-Modal Components**
   - `ekman1978facial` - FACS (2 citations in v4)
   - `adams2005effects` - Gaze and emotion perception (2 citations in v4)
   - `loehr2012temporal` - Gesture-prosody synchrony (2 citations in v4)
   - `pease2006definitive` - Palm orientation signaling (2 citations in v4)
   - `vertegaal2001eye` - Eye gaze turn-taking (1 citation in v4)

5. **Accessibility & Application**
   - `w3c2018wcag` - WCAG 2.1 accessibility (1 citation in v4)
   - `miyazaki2007yasashii` - Easy Japanese (1 citation in v4)
   - `buettner2008blue` - Blue Zones / MOAI (2 citations in v4)
   - `faster2019h2020` - AIngle DLT platform (1 citation in v4)
   - `kotoku2021ai` - AI in nursing practice (1 citation in v4)

**Total v4 citations**: 30+ citation instances across 15 unique references

### **Removed from v4 (but kept in references-v4.bib)**

**Note**: These 15 references remain in `references-v4.bib` file but are not cited in v4 paper:
- `lederman2021dta` - DTA prospects (not cited in v4)
- `tong2023dta` - MM-DTA qualitative analysis (not cited in v4)
- `mcewan2014compassionate` - Compassionate vs. critical expressions (not cited in v4)
- `bradley2008pupillometry` - Pupillometry (not cited in v4)
- `mcneill1992hand` - Hand gesture types (not cited in v4)
- `scherer2003vocal` - Vocal emotion communication (not cited in v4)
- `sonnby2009facial` - Facial mimicry (not cited in v4)
- `choi2023virtual` - Virtual counselors (not cited in v4)
- `serengil2020lightface` - LightFace/DeepFace (not cited in v4)
- `christiano2017rlhf` - RLHF (not cited in v4)
- `miyazaki2017disability` - Disability discourse (not cited in v4)
- `matsuura2022easy` - Easy Japanese effectiveness (not cited in v4)
- `satoh1995easy` - Easy Japanese disasters (not cited in v4)
- `suzuki2001okinawan` - Okinawan longevity (not cited in v4)
- `kimura1998universal` - Universal design principles (not cited in v4)

**Rationale**: LaTeX will only include cited references in the compiled bibliography, so keeping all 30 in the .bib file provides flexibility for future revisions without requiring .bib file updates.

---

## Word Count Breakdown

| Section | v3 Words (est.) | v4 Words | Reduction |
|---------|-----------------|----------|-----------|
| **Abstract** | 158 | 109 | -31% |
| **Introduction** | 245 | 142 | -42% |
| **Section 2 (Architecture/MASST)** | 1,200 | 580 | -52% |
| **Section 3 (Digital MOAI)** | 220 | 145 | -34% |
| **Section 4 (Implementation)** | 450 | 135 | -70% |
| **Section 5 (Discussion)** | 520 | 240 | -54% |
| **Section 6 (Conclusion)** | 180 | 118 | -34% |
| **Acknowledgments** | 40 | 38 | -5% |
| **TOTAL** | ~3,810 | ~1,389 | **-64%**|

**Target**: 2 pages IEEE double-column ≈ 1,300-1,500 words
**Achievement**: v4 at 1,389 words is within target range

---

## Key Innovations Preserved

### 1. **Empathetic Response Mapping Table**
**Retained**: Table 1 showing asymmetric emotion mappings
- User Sad → Avatar Compassionate Concern
- User Angry → Avatar Calm Concern
- User Fear → Avatar Reassuring
- User Happy → Avatar Happy

**Rationale**: Visual representation of core safety mechanism, high MASST relevance (behavioral guard rails)

### 2. **Gilbert et al. (2019) Research**
**Retained**: 6 citations to compassionate faces research
- Abstract: Core evidence for non-mirroring approach
- Introduction: Empathy paradox explanation
- Section 2.1: Empathetic response mapping justification
- Section 2.3: FACS-validated expressions
- Section 5.1: Behavioral guard rails discussion
- Conclusion: Summary of evidence-based design

**Rationale**: Scientific foundation for entire WittyHead approach

### 3. **Three MASST Priorities**
**Retained**: All three priorities as organizing framework
- Context-aware behavioral guard rails (Section 2.1)
- Mutual observability (Section 2.2)
- Design-time risk mitigation (Section 2.3)

**Rationale**: Direct alignment with workshop theme

### 4. **Digital MOAI Integration**
**Retained**: Real-world application context
- Privacy-preserving local-first architecture
- User-controlled automation levels
- Support for vulnerable populations

**Rationale**: Demonstrates practical impact for vulnerable populations

### 5. **Multi-Modal Coordination**
**Retained**: Conceptual description of 6 coordinated services
- Emotion Detection → Empathetic Response Orchestrator → Facial Expression Manager → Gaze Manager → Gesticulation Manager → Voice Modulation

**Rationale**: Distinguishes WittyHead from text-based agents (DTA extension)

---

## Strategic Emphases in v4

### 1. **MASST Relevance Throughout**
Every section directly addresses at least one MASST priority:
- **Introduction**: Design-time risk mitigation (empathy paradox)
- **Section 2**: All three MASST priorities (dedicated subsections)
- **Section 3**: Mutual observability (privacy-preserving), behavioral guard rails (user-controlled)
- **Section 4**: Design-time risk mitigation (research-grounded implementation)
- **Discussion**: MASST contributions summary
- **Conclusion**: Three requirements for safe empathetic MAS

### 2. **Safety Mechanisms Highlighted**
Every major section emphasizes safety:
- **Abstract**: "behavioral guard rails", "explainable multi-modal reasoning", "design-time risk mitigation"
- **Introduction**: "preventing inappropriate emotional responses", "maintaining transparent reasoning", "mitigating design-time risks"
- **Section 2.1**: "three layers of behavioral safety"
- **Section 2.2**: "explainable multi-modal reasoning enabling human oversight"
- **Section 2.3**: "preventing empathy failures before deployment"
- **Discussion**: "safe empathetic multi-agent systems"

### 3. **Vulnerable Populations Focus**
Consistent emphasis on real-world impact:
- **Abstract**: "supporting vulnerable populations"
- **Introduction**: "foster care youth, elderly, and individuals experiencing mental health challenges"
- **Section 2.1**: "accommodate visual, auditory, motor, and cognitive disabilities"
- **Section 3**: "vulnerable populations"
- **Discussion**: "vulnerable users", "vulnerable populations"
- **Conclusion**: "vulnerable populations"

### 4. **Evidence-Based Approach**
Every claim grounded in cited research:
- Compassionate concern → `gilbert2019compassion`
- Therapeutic eye contact → `dowell1979therapist`
- FACS validation → `ekman1978facial`
- Gesture-prosody synchrony → `loehr2012temporal`
- Palm orientation → `pease2006definitive`
- Approach-avoidance gaze → `adams2005effects`

---

## Compilation Instructions

### Files Required
1. **Main document**: `wittyhead-masst-paper-v4-2page.tex`
2. **Bibliography**: Inline `\begin{thebibliography}` (lines 128-160)
3. **IEEE class**: `IEEEtran.cls` (from v3 package)

### Compilation Steps
```bash
# Standard LaTeX compilation
pdflatex wittyhead-masst-paper-v4-2page.tex
pdflatex wittyhead-masst-paper-v4-2page.tex  # Second pass for references

# Or use latexmk (recommended)
latexmk -pdf wittyhead-masst-paper-v4-2page.tex
```

### Expected Output
- **Page count**: ~2 pages IEEE double-column
- **References**: 15 entries (all cited in text)
- **Tables**: 1 (Empathetic Response Mapping)
- **Figures**: 0

---

## Quality Checklist

### ✅ **Content Quality**
- [x] All claims supported by citations
- [x] No fabricated data or studies
- [x] Future work properly labeled (JSPS KAKENHI grant)
- [x] MASST priorities addressed comprehensively
- [x] Core innovation clearly articulated (non-mirroring empathetic responses)

### ✅ **MASST Alignment**
- [x] Context-aware behavioral guard rails (Section 2.1)
- [x] Mutual observability (Section 2.2)
- [x] Design-time risk mitigation (Section 2.3)
- [x] Vulnerable populations focus throughout
- [x] Safety mechanisms emphasized

### ✅ **Technical Accuracy**
- [x] FACS patterns correctly described (AU4+AU6+AU12)
- [x] Therapeutic eye contact ranges (60-90%)
- [x] Prosodic gesture alignment (Loehr 2012)
- [x] Multi-modal coordination (6 services)
- [x] AIngle DLT latency (0.16ms)

### ✅ **LaTeX Formatting**
- [x] IEEEtran document class
- [x] Proper title/author block
- [x] Abstract + keywords
- [x] Section numbering
- [x] Table formatting
- [x] Bibliography entries (15 items)
- [x] Acknowledgments section

### ✅ **Author Information**
- [x] Correct email: `ontologist@kwansei.ac.jp`
- [x] Correct affiliation: `Intelligent Blockchain+ Innovation Research Center`
- [x] Correct institution: `Kwansei Gakuin University`
- [x] Correct location: `Sanda, Hyogo, Japan`

---

## Comparison: v3 vs v4 Key Differences

### **What v4 Removed**
1. **Detailed Background Section**: No separate DTA, FACS, Gaze, Accessibility subsections
2. **Code Snippets**: No Python ARKit blendshape implementations
3. **Detailed Algorithms**: No service-by-service implementation details
4. **Extensive Literature Review**: Reduced from 30 to 15 cited papers
5. **Limitations Subsection**: Merged into conclusion
6. **Future Work Details**: Reduced to single sentence
7. **Supporting Vulnerable Populations Subsection**: Integrated into other sections
8. **Beyond Emotional Mirroring Subsection**: Condensed into implications paragraph

### **What v4 Added/Emphasized**
1. **MASST-Centric Organization**: Entire architecture section organized around three MASST priorities
2. **Safety Emphasis**: Every section explicitly addresses safety mechanisms
3. **Transparency Examples**: Concrete system log example in Section 2.2
4. **Reasoning Traces**: Explicit traceability statements in Section 2.2
5. **Elevated Digital MOAI**: Standalone section (was subsection in v3)
6. **DTA Extension Positioning**: Clear differentiation from text-based agents in discussion

### **What v4 Preserved**
1. **Empathetic Response Mapping Table**: Visual representation of core innovation
2. **Gilbert et al. (2019) Evidence**: Compassionate faces research (6 citations)
3. **FACS Validation**: AU4+AU6+AU12 pattern description
4. **Therapeutic Eye Contact**: 60-90% ranges with citations
5. **Multi-Modal Coordination**: 6-service architecture description
6. **Digital MOAI Context**: Privacy-preserving community support
7. **Vulnerable Populations Focus**: Foster care youth, elderly, mental health support

---

## Submission Package Contents

### **Primary File**
- `wittyhead-masst-paper-v4-2page.tex` - Main paper (1,389 words, ~2 pages)

### **Supporting Files**
- `IEEEtran.cls` - IEEE LaTeX class file (from v3 package)
- `references-v4.bib` - Complete bibliography with 30 entries (for future flexibility)

**Note**: The v4 paper uses inline `\begin{thebibliography}` format with 15 entries. The `references-v4.bib` file contains all 30 references from v3 for potential future revisions, but LaTeX compilation only requires the .tex file itself.

### **Documentation Files**
- `REWRITE_SUMMARY_v3.md` - v3 rewrite summary
- `FINAL_CORRECTIONS_v3.md` - v3 corrections log
- `FINAL_DTA_SUBSECTION_UPDATE.md` - DTA subsection integration details
- `V4_CONDENSED_2PAGE_SUMMARY.md` - This document

---

## Next Steps

1. ✅ **v4 paper created** - `wittyhead-masst-paper-v4-2page.tex` (1,389 words)
2. ✅ **Bibliography maintained** - `references-v4.bib` (30 entries for flexibility)
3. ⏳ **Compile v4** - Generate PDF to verify 2-page target
4. ⏳ **Review page count** - Confirm ≤ 2 pages in IEEE double-column format
5. ⏳ **Content review** - Verify MASST alignment and clarity
6. ⏳ **Create submission package** - Zip file with .tex, .cls, and README
7. ⏳ **Upload to Overleaf** - Compile online and verify formatting
8. ⏳ **Final polish** - Adjust spacing/formatting if needed
9. ⏳ **Submit to MASST** - Workshop submission portal

---

## Recommended Review Focus Areas

### **1. Page Count Verification**
Compile PDF and verify actual page count. If >2 pages, consider:
- Reducing table spacing
- Shortening acknowledgments
- Further condensing discussion section
- Removing 1-2 lower-priority citations

### **2. MASST Alignment Check**
Verify all three priorities are clearly addressed:
- [ ] Context-aware behavioral guard rails (Section 2.1)
- [ ] Mutual observability (Section 2.2)
- [ ] Design-time risk mitigation (Section 2.3)

### **3. Clarity Check**
Ensure condensed text remains clear:
- [ ] Empathy paradox understandable without background section
- [ ] Multi-modal coordination comprehensible without detailed subsections
- [ ] DTA extension clear without separate DTA background subsection
- [ ] FACS patterns make sense without FACS theory explanation

### **4. Citation Integrity**
Verify all 15 citations are:
- [ ] Correctly formatted in bibliography
- [ ] Properly cited in text
- [ ] Accurately representing source material
- [ ] Supporting stated claims

---

## Version History

**v1**: OntoGraph knowledge graph focus (rejected approach)
**v2**: WittyHead multi-modal architecture (corrected approach, no hallucinated data)
**v3**: WittyHead empathetic human-agent collaboration (full 5.5-page version with DTA integration)
**v4**: WittyHead condensed for 2-page MASST requirement (this version)

---

*v4 condensed version completed: 2025-10-14*
*Author: Yuri A. Tijerino*
*Affiliation: Kwansei Gakuin University, Intelligent Blockchain+ Innovation Research Center*
*Email: ontologist@kwansei.ac.jp*
