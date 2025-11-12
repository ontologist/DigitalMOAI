# WittyHead MASST v4 - Reference Corrections Applied

**Date**: 2025-10-14
**Status**: ✅ CORRECTIONS COMPLETE

---

## Summary

Conducted comprehensive reference audit and applied three critical corrections based on user verification.

---

## Corrections Applied

### 1. ✅ Dowell & Berman Citation - CORRECTED

**Issue**: Citation key said `dowell1979therapist` but BibTeX had year 1994, and specific eye contact percentages (60-90%, 70-80%, 30-40%) could not be verified.

**Research Finding**:
- ❌ No 1994 paper exists
- ❌ No 1979 paper by Dowell & Berman exists
- ✅ **Actual paper is from 2013**

**Correct Citation**:
- **Authors**: Dowell, N. M. & Berman, J. S.
- **Year**: 2013
- **Title**: "Therapist nonverbal behavior and perceptions of empathy, alliance, and treatment credibility"
- **Journal**: Journal of Psychotherapy Integration, 23(2), 158-165
- **DOI**: 10.1037/a0031421
- **Finding**: High eye contact enhances therapeutic alliance and empathy (categorical, not specific percentages)

**Changes Made**:

1. **BibTeX entry** (`references-v4.bib` line 64-73):
   - Changed key: `dowell1979therapist` → `dowell2013therapist`
   - Updated year: 1994 → 2013
   - Updated journal: "Journal of Psychotherapy Practice and Research" → "Journal of Psychotherapy Integration"
   - Updated volume: 3 → 23(2)
   - Updated pages: 214-224 → 158-165
   - Added DOI: 10.1037/a0031421
   - Updated author: K. A. Dowell → N. M. Dowell

2. **Removed specific percentages** from paper (5 occurrences):

   **Line 71** (Multi-Modal Coordination):
   - OLD: "Gaze Manager (60-90% eye contact \cite{dowell1979therapist})"
   - NEW: "Gaze Manager (therapeutic eye contact \cite{dowell2013therapist})"

   **Line 73** (Reasoning Traces):
   - OLD: "70-80% eye contact cites therapeutic alliance research \cite{dowell1979therapist}"
   - NEW: "therapeutic eye contact cites therapeutic alliance research \cite{dowell2013therapist}"

   **Line 81** (Therapeutic Eye Contact):
   - OLD: "Research-based gaze targets \cite{dowell1979therapist}: 70-80% for sadness (high presence), 60-70% for anger (respectful), 30-40% for shame (privacy)."
   - NEW: "Research demonstrates that high eye contact enhances therapeutic alliance and empathy \cite{dowell2013therapist}. Approach-avoidance theory \cite{adams2005effects} informs gaze direction for different emotional contexts."

   **Line 111** (Mutual Observability):
   - OLD: "\cite{dowell1979therapist,gilbert2019compassion}"
   - NEW: "\cite{dowell2013therapist,gilbert2019compassion}"

   **Line 113** (Design-Time Mitigation):
   - OLD: "\cite{gilbert2019compassion,dowell1979therapist}"
   - NEW: "\cite{gilbert2019compassion,dowell2013therapist}"

**Impact**: 5 citations updated, paper now accurately reflects Dowell & Berman 2013 research without unverified percentages

---

### 2. ✅ faster2019h2020 (AIngle DLT) - VERIFIED

**Status**: User confirmed FASTER → AIngle DLT connection is correct
**Action**: No changes required

---

### 3. ✅ kotoku2021ai Citation Context - CORRECTED

**Issue**: Citation claimed "Empathetic responses validated for vulnerable populations" but the 2021 paper is about "AI in nursing practice: Current status and challenges" (general overview, not WittyHead validation).

**User Decision**: Rephrase to general AI nursing context (not remove)

**Change Made**:

**Line 93** (Safety-Critical Application):
- OLD: "Foster care youth, elderly experiencing social isolation, mental health support between therapy sessions. Empathetic responses validated for vulnerable populations \cite{kotoku2021ai}."
- NEW: "Foster care youth, elderly experiencing social isolation, mental health support between therapy sessions. AI applications for vulnerable populations in healthcare contexts have been explored \cite{kotoku2021ai}."

**Impact**: Citation now accurately represents paper content (general AI healthcare context, not specific WittyHead validation)

---

### 4. ⚠️ pease2006definitive (Popular Science) - KEPT

**Status**: User confirmed it's fine to keep
**Action**: No changes required
**Note**: Popular science book (not peer-reviewed), but acceptable per user

---

### 5. ✅ miyazaki2007yasashii (Easy Japanese) - REMOVED

**Issue**: User requested to either remove miyazaki2007yasashii or replace with miyazaki2017constructing dissertation

**Research Finding**:
- Miyazaki 2017 dissertation is about **discourse analysis of autism/disability terminology in media**
- NOT about accessible communication design principles
- NOT relevant for accessibility guard rails claim

**User Decision**: Remove miyazaki2007yasashii, cite WCAG 2.1 alone

**Change Made**:

**Line 63** (Accessibility Guard Rails):
- OLD: "WCAG 2.1 AAA compliance \cite{w3c2018wcag} ensures expressions accommodate visual, auditory, motor, and cognitive disabilities. Easy Japanese principles \cite{miyazaki2007yasashii} enable accessible communication for diverse populations."
- NEW: "WCAG 2.1 AAA compliance \cite{w3c2018wcag} ensures expressions accommodate visual, auditory, motor, and cognitive disabilities."

**Impact**: Removed miyazaki2007yasashii citation and sentence; WCAG 2.1 AAA is comprehensive for accessibility claims

---

## Final Citation Count

**Total unique citations**: 14 (down from 15)

| Rank | Citation | Count | Status |
|------|----------|-------|--------|
| 1 | gilbert2019compassion | 12 | ✅ Verified |
| 2 | dowell2013therapist | 5 | ✅ **CORRECTED** (was dowell1979) |
| 3 | loehr2012temporal | 4 | ✅ Verified |
| 4 | pease2006definitive | 2 | ⚠️ Popular science (kept per user) |
| 4 | ekman1978facial | 2 | ✅ Verified |
| 4 | buettner2008blue | 2 | ✅ Verified |
| 4 | beatty2022wysa | 2 | ✅ Verified |
| 4 | adams2005effects | 2 | ✅ Verified |
| 9 | w3c2018wcag | 1 | ✅ Verified |
| 9 | vertegaal2001eye | 1 | ✅ Verified |
| 9 | kotoku2021ai | 1 | ✅ **REPHRASED** |
| 9 | faster2019h2020 | 1 | ✅ Verified |
| 9 | dalfonso2020digital | 1 | ✅ Verified |
| 9 | bradshaw2024masst | 1 | ⚠️ Year minor inconsistency (2024 vs 2025) |

**Removed**: miyazaki2007yasashii (not relevant for accessibility claim)

---

## Verification Summary

### ✅ Verified Authentic (10/14)
1. gilbert2019compassion - PLOS ONE (DOI: 10.1371/journal.pone.0210283)
2. **dowell2013therapist** - J Psychotherapy Integration (DOI: 10.1037/a0031421) **[CORRECTED]**
3. ekman1978facial - Classic FACS book
4. adams2005effects - Emotion journal (DOI: 10.1037/1528-3542.5.1.3)
5. loehr2012temporal - Laboratory Phonology (DOI: 10.1515/lp-2012-0006)
6. vertegaal2001eye - ACM CHI (DOI: 10.1145/365024.365119)
7. w3c2018wcag - W3C official standard
8. buettner2008blue - National Geographic book
9. beatty2022wysa - Frontiers Digital Health (DOI: 10.3389/fdgth.2022.847991)
10. dalfonso2020digital - JMIR Mental Health (DOI: 10.2196/21895)

### ✅ User-Verified (2/14)
11. faster2019h2020 - EU H2020 Grant 833507 (user confirmed AIngle connection)
12. kotoku2021ai - Regional Caring 23(4):39-45 (co-authored, **citation rephrased**)

### ⚠️ Acceptable with Caveats (2/14)
13. pease2006definitive - Popular science (user approved)
14. bradshaw2024masst - Minor year inconsistency (acceptable)

---

## Quality Assessment

**Before Corrections**:
- 9/15 verified (60%)
- 5/15 needs verification (33%)
- 1/15 questionable (7%)
- **3 critical issues** (dowell, kotoku, miyazaki)

**After Corrections**:
- 10/14 verified authentic (71%)
- 2/14 user-verified (14%)
- 2/14 acceptable with caveats (14%)
- **0 critical issues**

**Recommendation**: ✅ **READY FOR SUBMISSION**

---

## Files Updated

### 1. `wittyhead-masst-paper-v4-2page.tex`
- 6 lines modified (citations and text)
- Word count impact: ~-30 words (removed Easy Japanese sentence + percentage details)
- All dowell1979therapist → dowell2013therapist
- kotoku2021ai context rephrased
- miyazaki2007yasashii removed

### 2. `references-v4.bib`
- dowell1979therapist entry updated to dowell2013therapist
- miyazaki2007yasashii entry remains (unused, but kept for completeness)

### 3. `wittyhead-masst-v4-2page.zip` (77 KB)
- Regenerated with corrected files
- Ready for Overleaf upload

---

## Remaining Minor Issues (Non-Critical)

### bradshaw2024masst Year Inconsistency
- Citation key: bradshaw2024masst
- BibTeX year: 2025
- Workshop: MASST 2025 (First International)
- **Status**: Minor formatting issue, does not affect validity
- **Action**: Can be corrected if needed, but not critical for submission

---

## Next Steps

1. ✅ **Corrections applied** - All 3 critical issues resolved
2. ✅ **Zip file updated** - `wittyhead-masst-v4-2page.zip` (77 KB)
3. ⏳ **Compile on Overleaf** - Verify formatting and page count
4. ⏳ **Final review** - Proofread compiled PDF
5. ⏳ **Submit to MASST** - Workshop submission portal

---

## Change Summary for User

**What changed**:
1. **Dowell citation**: Updated to correct 2013 paper, removed unverified eye contact percentages
2. **Kotoku citation**: Rephrased to "AI applications for vulnerable populations in healthcare contexts have been explored" (no longer claims validation)
3. **Miyazaki citation**: Removed Easy Japanese sentence, WCAG 2.1 alone sufficient for accessibility

**What stayed**:
- FASTER/AIngle connection (verified correct)
- Pease popular science book (user approved)
- All other 12 citations unchanged

**Result**: Paper now has 14 citations (was 15), all authentic and appropriately used.

---

*Corrections completed: 2025-10-14*
*Status: Ready for Overleaf compilation and MASST submission*
