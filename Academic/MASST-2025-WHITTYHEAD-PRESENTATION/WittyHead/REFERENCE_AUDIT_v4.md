# WittyHead MASST v4 - Reference Audit Report

**Date**: 2025-10-14
**Auditor**: Claude Code
**Purpose**: Verify authenticity and relevancy of all 15 citations in v4 paper

---

## Executive Summary

**Total citations in v4**: 15 unique references
**Total citation instances**: 37 times across paper
**Status**: AUDIT IN PROGRESS

---

## Citation Frequency Analysis

| Rank | Citation Key | Count | Primary Topic |
|------|-------------|-------|---------------|
| 1 | `gilbert2019compassion` | 12 | Compassionate facial expressions |
| 2 | `dowell1979therapist` | 5 | Therapeutic alliance & eye contact |
| 3 | `loehr2012temporal` | 4 | Gesture-prosody synchrony |
| 4 | `pease2006definitive` | 2 | Body language (palm orientation) |
| 4 | `ekman1978facial` | 2 | FACS (Facial Action Coding System) |
| 4 | `buettner2008blue` | 2 | Blue Zones & MOAI longevity |
| 4 | `beatty2022wysa` | 2 | Digital Therapeutic Alliance (Wysa) |
| 4 | `adams2005effects` | 2 | Gaze & emotion perception |
| 9 | `w3c2018wcag` | 1 | Accessibility guidelines |
| 9 | `vertegaal2001eye` | 1 | Eye gaze turn-taking |
| 9 | `miyazaki2007yasashii` | 1 | Easy Japanese |
| 9 | `kotoku2021ai` | 1 | AI in nursing practice |
| 9 | `faster2019h2020` | 1 | AIngle DLT (EU H2020 project) |
| 9 | `dalfonso2020digital` | 1 | Digital Therapeutic Alliance framework |
| 9 | `bradshaw2024masst` | 1 | MASST Initiative |

---

## Detailed Reference Verification

### 1. `bradshaw2024masst` (1 citation)

**BibTeX Entry**:
```bibtex
@inproceedings{bradshaw2024masst,
  author = {Bradshaw, J. M. and Mahmud, M.},
  title = {First International {MASST} Initiative Workshop: Multi-Agent System Safety and Teamwork},
  booktitle = {IEEE/WIC International Conference on Web Intelligence and Intelligent Agent Technology},
  year = {2025}
}
```

**Citation Context** (line 33):
> "Multi-agent systems (MAS) serving vulnerable populations face critical safety requirements: preventing inappropriate emotional responses, maintaining transparent reasoning, and mitigating design-time risks \\cite{bradshaw2024masst}."

**Verification Status**: ⚠️ **NEEDS VERIFICATION**
- **Issue**: Workshop is listed for 2025 but citation year shows 2024
- **Check needed**: Confirm actual workshop date and proceedings publication date
- **Relevancy**: ✅ HIGHLY RELEVANT - Defines MASST priorities that frame entire paper

**Action Required**: Verify workshop year (2024 vs 2025) and ensure citation matches actual CFP/workshop details

---

### 2. `gilbert2019compassion` (12 citations - MOST CITED)

**BibTeX Entry**:
```bibtex
@article{gilbert2019compassion,
  author = {Gilbert, P. and McEwan, C. and Matos, R. and Rivis, A.},
  title = {Compassionate faces: Evidence for distinctive facial expressions associated with specific prosocial motivations},
  journal = {PLOS ONE},
  volume = {14},
  number = {1},
  pages = {e0210283},
  year = {2019},
  doi = {10.1371/journal.pone.0210283}
}
```

**Citation Contexts** (12 instances):
1. Abstract (line 24): Empathetic responses require compassionate concern vs. mirroring
2. Introduction (line 33): Emotional mirroring flaw
3. Introduction (line 33): "invalidating and aversive" quote
4. Section 2.1 (line 43): Empathetic response mapping justification
5. Section 2.2 (line 73): Reasoning traces - compassionate concern
6. Section 2.3 (line 79): FACS-validated expressions
7. Section 4 (line 99): Compassionate concern expression
8. Section 5.1 (line 109): Behavioral guard rails
9. Section 5.1 (line 111): Mutual observability
10. Section 5.1 (line 113): Design-time mitigation
11. Section 5.2 (line 117): Beyond emotional mirroring
12. Conclusion (line 123): Core evidence summary

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.1371/journal.pone.0210283
- **Journal**: PLOS ONE (open access, verifiable)
- **Authors**: Paul Gilbert (Compassion-Focused Therapy pioneer), Kirsten McEwan, Marcela Matos, Antonio Rivis
- **Content**: Empirical study on compassionate vs. critical facial expressions
- **Key Finding**: Compassionate expressions (soft concern) rated higher for empathy than mirrored distress
- **Relevancy**: ✅ HIGHLY RELEVANT - Core scientific basis for non-mirroring empathetic response architecture

**Assessment**: This is the paper's theoretical foundation. 12 citations appropriate given it justifies the entire approach.

---

### 3. `dowell1979therapist` (5 citations)

**BibTeX Entry**:
```bibtex
@article{dowell1979therapist,
  author = {Dowell, K. A. and Berman, J. S.},
  title = {Therapist nonverbal behavior and perceptions of empathy, alliance, and treatment credibility},
  journal = {Journal of Psychotherapy Practice and Research},
  volume = {3},
  pages = {214--224},
  year = {1994}
}
```

**Citation Contexts** (5 instances):
1. Section 2.2 (line 71): 60-90% eye contact for therapeutic alliance
2. Section 2.2 (line 73): Reasoning traces - 70-80% eye contact
3. Section 2.3 (line 81): Therapeutic eye contact research
4. Section 5.1 (line 111): Mutual observability - therapeutic alliance research
5. Section 5.1 (line 113): Design-time mitigation

**Verification Status**: ⚠️ **INCONSISTENCY DETECTED**
- **Issue**: Citation key says "dowell1979" but BibTeX year is 1994
- **Check needed**: Verify actual publication year (1979 vs 1994)
- **Journal**: Journal of Psychotherapy Practice and Research (needs verification)
- **Content claim**: Therapist nonverbal behavior and eye contact percentages
- **Relevancy**: ✅ RELEVANT - If authentic, supports therapeutic eye contact claims

**Action Required**:
1. Verify actual publication year
2. Confirm journal name and volume/pages
3. Verify if eye contact percentages (60-90%, 70-80%) actually appear in this paper
4. Update citation key to match year if needed

---

### 4. `ekman1978facial` (2 citations)

**BibTeX Entry**:
```bibtex
@book{ekman1978facial,
  author = {Ekman, P. and Friesen, W. V.},
  title = {Facial Action Coding System: A Technique for the Measurement of Facial Movement},
  publisher = {Consulting Psychologists Press},
  address = {Palo Alto},
  year = {1978}
}
```

**Citation Contexts**:
1. Section 2.3 (line 79): FACS provides scientific basis for expressions
2. Section 5.1 (line 113): Design-time mitigation - FACS validation

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **Authors**: Paul Ekman & Wallace Friesen (pioneers of facial expression research)
- **Publication**: Well-known foundational work in emotion research
- **Content**: Defines Action Units (AUs) for facial movements
- **Year**: 1978 original publication (multiple editions since)
- **Relevancy**: ✅ HIGHLY RELEVANT - Scientific basis for AU4, AU6, AU12 patterns in paper

**Assessment**: Foundational citation, correctly used. FACS is standard in emotion research.

---

### 5. `adams2005effects` (2 citations)

**BibTeX Entry**:
```bibtex
@article{adams2005effects,
  author = {Adams, R. B. and Kleck, R. E.},
  title = {Effects of Direct and Averted Gaze on the Perception of Facially Communicated Emotion},
  journal = {Emotion},
  volume = {5},
  number = {1},
  pages = {3--11},
  year = {2005},
  doi = {10.1037/1528-3542.5.1.3}
}
```

**Citation Contexts**:
1. Section 2.3 (line 81): Approach-avoidance theory informs gaze direction
2. Section 4 (line 101): Facial-Gaze coordination

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.1037/1528-3542.5.1.3 (APA PsycArticles)
- **Journal**: Emotion (peer-reviewed APA journal)
- **Content**: Direct gaze enhances approach emotions, averted gaze enhances avoidance emotions
- **Relevancy**: ✅ RELEVANT - Supports gaze direction strategy

**Assessment**: Legitimate research, appropriately cited.

---

### 6. `loehr2012temporal` (4 citations)

**BibTeX Entry**:
```bibtex
@article{loehr2012temporal,
  author = {Loehr, D. P.},
  title = {Temporal, structural, and pragmatic synchrony between intonation and gesture},
  journal = {Laboratory Phonology},
  volume = {3},
  number = {1},
  pages = {71--89},
  year = {2012},
  doi = {10.1515/lp-2012-0006}
}
```

**Citation Contexts**:
1. Section 2.2 (line 71): Prosodic-aligned gestures
2. Section 2.3 (line 83): Gestures synchronize with prosodic peaks
3. Section 4 (line 101): Gesture-Prosody coordination
4. Section 5.1 (line 113): Design-time mitigation - gesture-prosody coordination

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.1515/lp-2012-0006
- **Journal**: Laboratory Phonology (peer-reviewed linguistics journal)
- **Author**: Daniel P. Loehr (Georgetown University)
- **Content**: Gestures align with prosodic peaks (pitch accents), not keywords
- **Relevancy**: ✅ HIGHLY RELEVANT - Core evidence for gesture timing strategy

**Assessment**: Solid citation, directly supports prosodic-aligned gesture claims.

---

### 7. `pease2006definitive` (2 citations)

**BibTeX Entry**:
```bibtex
@book{pease2006definitive,
  author = {Pease, A. and Pease, B.},
  title = {The Definitive Book of Body Language},
  publisher = {Bantam},
  year = {2006}
}
```

**Citation Contexts**:
1. Section 2.2 (line 73): Palm-up gestures (openness) in reasoning traces
2. Section 2.3 (line 83): Palm orientation signaling (trust vs. dominance)

**Verification Status**: ⚠️ **QUESTIONABLE - POPULAR SCIENCE**
- **Type**: Popular science book, NOT peer-reviewed research
- **Authors**: Allan & Barbara Pease (body language experts/motivational speakers)
- **Content**: Compilation of body language interpretations
- **Scientific rigor**: Limited - not primary research
- **Relevancy**: ⚠️ WEAK - Popular interpretation vs. empirical research

**Concerns**:
- Palm orientation claims (palm-up = trust, palm-down = dominance) are folk psychology, not rigorously tested
- For academic paper, should cite peer-reviewed gesture research instead
- McNeill (1992) or Kendon (2004) would be more appropriate for gesture semantics

**Action Required**: Consider replacing with peer-reviewed gesture research or acknowledge limitation

---

### 8. `vertegaal2001eye` (1 citation)

**BibTeX Entry**:
```bibtex
@inproceedings{vertegaal2001eye,
  author = {Vertegaal, R. and Slagter, R. and van der Veer, G. and Nijholt, A.},
  title = {Eye gaze patterns in conversations: There is more to conversational agents than meets the eyes},
  booktitle = {Proceedings of ACM CHI},
  pages = {301--308},
  year = {2001},
  doi = {10.1145/365024.365119}
}
```

**Citation Context** (line 101):
> "Gaze-Turn-Taking: Eye contact marks turn-yielding \\cite{vertegaal2001eye}."

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.1145/365024.365119
- **Conference**: ACM CHI (top-tier HCI conference)
- **Content**: Eye gaze role in conversational turn-taking
- **Relevancy**: ✅ RELEVANT - Supports gaze turn-taking claims

**Assessment**: Legitimate HCI research, appropriately cited.

---

### 9. `w3c2018wcag` (1 citation)

**BibTeX Entry**:
```bibtex
@misc{w3c2018wcag,
  author = {{World Wide Web Consortium (W3C)}},
  title = {Web content accessibility guidelines (WCAG) 2.1},
  year = {2018},
  note = {W3C Recommendation, June 2018},
  url = {https://www.w3.org/TR/WCAG21/}
}
```

**Citation Context** (line 63):
> "WCAG 2.1 AAA compliance \\cite{w3c2018wcag} ensures expressions accommodate visual, auditory, motor, and cognitive disabilities."

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **Organization**: W3C (World Wide Web Consortium)
- **Document**: WCAG 2.1 (published June 2018)
- **URL**: https://www.w3.org/TR/WCAG21/ (verifiable)
- **Relevancy**: ✅ RELEVANT - Standard accessibility guidelines

**Assessment**: Official W3C recommendation, correctly cited.

---

### 10. `miyazaki2007yasashii` (1 citation)

**BibTeX Entry**:
```bibtex
@article{miyazaki2007yasashii,
  author = {Miyazaki, Y.},
  title = {Yasashii nihongo (easy japanese) on community media: Focusing on radio broadcasting},
  journal = {KGPS Review: Kwansei Gakuin Policy Studies Review},
  volume = {8},
  pages = {1--14},
  month = {March},
  year = {2007},
  note = {in Japanese}
}
```

**Citation Context** (line 63):
> "Easy Japanese principles \\cite{miyazaki2007yasashii} enable accessible communication for diverse populations."

**Verification Status**: ⚠️ **NEEDS VERIFICATION**
- **Author**: Y. Miyazaki (Kwansei Gakuin University - same institution as author)
- **Journal**: KGPS Review (institutional journal)
- **Language**: Published in Japanese
- **Relevancy**: ✅ RELEVANT IF AUTHENTIC - Supports Easy Japanese accessibility claims

**Action Required**: Verify this publication exists and is correctly cited (author should have access)

---

### 11. `buettner2008blue` (2 citations)

**BibTeX Entry**:
```bibtex
@book{buettner2008blue,
  author = {Buettner, D.},
  title = {The Blue Zones: Lessons for Living Longer from the People Who've Lived the Longest},
  publisher = {National Geographic Society},
  year = {2008}
}
```

**Citation Contexts**:
1. Introduction (line 35): Digital MOAI / Okinawan mutual aid networks
2. Section 3 (line 87): MOAI effectiveness & Okinawa centenarians

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **Author**: Dan Buettner (National Geographic Fellow)
- **Publisher**: National Geographic Society
- **Content**: Documents longevity in "Blue Zones" including Okinawa
- **MOAI**: Describes traditional Okinawan mutual support groups
- **Relevancy**: ✅ RELEVANT - Establishes MOAI concept

**Assessment**: Well-known book, appropriate reference for MOAI background.

---

### 12. `faster2019h2020` (1 citation)

**BibTeX Entry**:
```bibtex
@misc{faster2019h2020,
  title = {First responder advanced technologies for safe and efficient emergency response},
  organization = {EU H2020 FASTER Project},
  note = {Grant Agreement No. 833507, 2019-2022},
  url = {https://www.faster-project.eu}
}
```

**Citation Context** (line 89):
> "Local-first emotion processing on AIngle DLT platform (EU H2020 FASTER project \\cite{faster2019h2020})"

**Verification Status**: ⚠️ **NEEDS VERIFICATION**
- **Grant**: EU H2020 Grant 833507 (should be verifiable on CORDIS)
- **Project**: FASTER (First responder Advanced technologies)
- **Connection to AIngle DLT**: NEEDS VERIFICATION
- **Relevancy**: ❓ UNCLEAR - How does FASTER relate to AIngle DLT?

**Concerns**:
- Paper claims AIngle DLT was developed under FASTER project
- Needs verification that FASTER project actually produced AIngle DLT
- If incorrect, this is a misattribution

**Action Required**:
1. Verify FASTER project grant 833507 on EU CORDIS database
2. Confirm AIngle DLT was a FASTER deliverable
3. If not, remove or correct the connection

---

### 13. `kotoku2021ai` (1 citation)

**BibTeX Entry**:
```bibtex
@article{kotoku2021ai,
  author = {Kotoku, K. and Tijerino, Y. A.},
  title = {Artificial intelligence (ai) in nursing practice: Current status and challenges},
  journal = {Regional Caring (Chiiki Caring)},
  volume = {23},
  number = {4},
  pages = {39--45},
  year = {2021},
  note = {in Japanese}
}
```

**Citation Context** (line 93):
> "Empathetic responses validated for vulnerable populations \\cite{kotoku2021ai}."

**Verification Status**: ✅ **AUTHENTIC** (per author confirmation)
- **Authors**: Kotoku, K. & Tijerino, Y. A. (paper author is co-author)
- **Journal**: Regional Caring (Japanese nursing journal)
- **Language**: Published in Japanese
- **Relevancy**: ⚠️ **RELEVANCY QUESTION**

**Concern**:
- Citation context claims "Empathetic responses validated for vulnerable populations"
- Does this 2021 paper actually validate WittyHead's empathetic responses?
- Or does it discuss AI in nursing more generally?
- If the latter, citation is misleading

**Action Required**: Clarify what this paper actually validates vs. what the citation claims

---

### 14. `beatty2022wysa` (2 citations)

**BibTeX Entry**:
```bibtex
@article{beatty2022wysa,
  author = {Beatty, C. and Malik, T. and Meheli, V. and Sinha, S.},
  title = {Evaluating the Therapeutic Alliance With a Free-Text {CBT} Conversational Agent (Wysa): A Mixed-Methods Study},
  journal = {Frontiers in Digital Health},
  volume = {4},
  pages = {847991},
  year = {2022},
  doi = {10.3389/fdgth.2022.847991}
}
```

**Citation Contexts**:
1. Section 5.2 (line 119): DTA research focuses on text-based chatbots
2. Conclusion (line 123): DTA measurement instruments

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.3389/fdgth.2022.847991
- **Journal**: Frontiers in Digital Health (open access, peer-reviewed)
- **Content**: Wysa chatbot DTA study using WAI-SR (Working Alliance Inventory)
- **Relevancy**: ✅ HIGHLY RELEVANT - Key DTA research for comparison

**Assessment**: Excellent citation for establishing DTA baseline and future measurement.

---

### 15. `dalfonso2020digital` (1 citation)

**BibTeX Entry**:
```bibtex
@article{dalfonso2020digital,
  author = {D'Alfonso, S. and Santesteban-Echarri, O. and Rice, S. and others},
  title = {The Digital Therapeutic Alliance and Human-Computer Interaction},
  journal = {JMIR Mental Health},
  volume = {7},
  number = {11},
  pages = {e21895},
  year = {2020},
  doi = {10.2196/21895}
}
```

**Citation Context** (line 119):
> "While DTA research focuses on text-based chatbots \\cite{beatty2022wysa,dalfonso2020digital}"

**Verification Status**: ✅ **VERIFIED - AUTHENTIC**
- **DOI**: 10.2196/21895
- **Journal**: JMIR Mental Health (high-impact digital health journal)
- **Content**: DTA framework and HCI considerations
- **Relevancy**: ✅ HIGHLY RELEVANT - DTA theoretical foundation

**Assessment**: Foundational DTA paper, appropriately cited.

---

## Summary of Findings

### ✅ Verified Authentic (9 references)
1. `gilbert2019compassion` - PLOS ONE (DOI verified)
2. `ekman1978facial` - Classic FACS book
3. `adams2005effects` - Emotion journal (DOI verified)
4. `loehr2012temporal` - Laboratory Phonology (DOI verified)
5. `vertegaal2001eye` - ACM CHI (DOI verified)
6. `w3c2018wcag` - W3C official standard
7. `buettner2008blue` - National Geographic book
8. `beatty2022wysa` - Frontiers in Digital Health (DOI verified)
9. `dalfonso2020digital` - JMIR Mental Health (DOI verified)

### ⚠️ Needs Verification (5 references)
1. `bradshaw2024masst` - Workshop year inconsistency (2024 vs 2025)
2. `dowell1979therapist` - Year inconsistency (1979 vs 1994), eye contact percentages
3. `miyazaki2007yasashii` - Institutional journal (in Japanese)
4. `faster2019h2020` - Connection to AIngle DLT unclear
5. `kotoku2021ai` - Citation claim vs. actual paper content

### ⚠️ Questionable Quality (1 reference)
1. `pease2006definitive` - Popular science book (not peer-reviewed research)

---

## Relevancy Assessment

### Highly Relevant (11 references)
- ✅ `gilbert2019compassion` (core theoretical foundation)
- ✅ `ekman1978facial` (FACS scientific basis)
- ✅ `loehr2012temporal` (gesture-prosody synchrony)
- ✅ `beatty2022wysa` (DTA measurement)
- ✅ `dalfonso2020digital` (DTA framework)
- ✅ `adams2005effects` (gaze-emotion)
- ✅ `vertegaal2001eye` (gaze turn-taking)
- ✅ `buettner2008blue` (MOAI context)
- ✅ `w3c2018wcag` (accessibility)
- ✅ `bradshaw2024masst` (MASST framework) - IF VERIFIED
- ✅ `dowell1979therapist` (therapeutic eye contact) - IF VERIFIED

### Moderately Relevant (2 references)
- ⚠️ `miyazaki2007yasashii` (Easy Japanese) - peripheral to core contribution
- ⚠️ `faster2019h2020` (AIngle DLT) - IF connection verified

### Weak Relevancy (2 references)
- ⚠️ `pease2006definitive` (popular science on palm orientation)
- ⚠️ `kotoku2021ai` (general AI in nursing vs. specific validation claim)

---

## Critical Issues Requiring Action

### HIGH PRIORITY

1. **`dowell1979therapist` Citation Key Mismatch**
   - Citation key says 1979, BibTeX says 1994
   - Verify actual publication year
   - Verify eye contact percentages (60-90%, 70-80%) are in this paper
   - **Impact**: 5 citations rely on this reference for therapeutic eye contact claims

2. **`faster2019h2020` AIngle DLT Connection**
   - Verify FASTER project actually produced/funded AIngle DLT
   - If not, this is factual misattribution
   - **Impact**: Undermines credibility of privacy-preserving claims

3. **`kotoku2021ai` Citation Context**
   - Citation claims "Empathetic responses validated for vulnerable populations"
   - Verify paper actually validates WittyHead's approach vs. general AI nursing discussion
   - **Impact**: Potentially misleading citation

### MEDIUM PRIORITY

4. **`bradshaw2024masst` Year Inconsistency**
   - Workshop listed as 2025 but citation year 2024
   - Verify actual workshop year and proceedings publication
   - **Impact**: Minor citation formatting issue

5. **`pease2006definitive` Popular Science Source**
   - Replace with peer-reviewed gesture semantics research
   - Suggestions: McNeill (1992), Kendon (2004)
   - **Impact**: Weakens academic rigor of gesture claims

6. **`miyazaki2007yasashii` Institutional Publication**
   - Verify article exists in KGPS Review vol. 8 (2007)
   - Author should have access to verify
   - **Impact**: Minor - peripheral citation

---

## Recommended Actions

### Immediate (Before Submission)

1. **Verify `dowell1979therapist`**:
   - Search academic databases for Dowell & Berman publication
   - Confirm actual year (1979 or 1994)
   - Verify eye contact percentages appear in source
   - Update citation key if needed

2. **Verify `faster2019h2020` → AIngle DLT connection**:
   - Check EU CORDIS database for Grant 833507
   - Confirm AIngle DLT is a FASTER deliverable
   - If not, remove or correct the connection

3. **Clarify `kotoku2021ai` citation context**:
   - Ensure citation claim matches paper content
   - If paper is general AI nursing (not WittyHead validation), rephrase citation context

### Recommended (Improve Quality)

4. **Replace `pease2006definitive`**:
   - Find peer-reviewed research on gesture semantics
   - Options: McNeill (1992), Kendon (2004), or recent gesture research

5. **Verify `bradshaw2024masst`**:
   - Confirm workshop year (2024 vs 2025)
   - Update citation year if needed

6. **Verify `miyazaki2007yasashii`**:
   - Author should confirm article exists in KGPS Review vol. 8

---

## Overall Assessment

**Authenticity Score**: 9/15 verified (60%), 5/15 need verification (33%), 1/15 questionable quality (7%)

**Relevancy Score**: 11/15 highly relevant (73%), 2/15 moderate (13%), 2/15 weak (13%)

**Critical Issues**: 3 high-priority items requiring immediate verification before submission

**Recommendation**:
- **DO NOT SUBMIT** until high-priority items (#1-3) are verified
- Consider replacing popular science source (#5) to strengthen academic rigor
- All DOI-verified papers (9/15) are authentic and appropriate

---

*Audit completed: 2025-10-14*
*Status: INCOMPLETE - Awaiting verifications*
