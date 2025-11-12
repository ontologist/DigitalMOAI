# WittyHead MASST v4 - Submission Ready

**Date**: 2025-10-14
**Version**: v4 (2-page condensed)
**Status**: ✅ READY FOR OVERLEAF UPLOAD

---

## Submission Package

**File**: `wittyhead-masst-v4-2page.zip` (78 KB)

**Location**: `/home/ontologist3/Github/wittyhead/docs/academic/MASST/wittyhead-masst-v4-2page.zip`

---

## Package Contents (4 files)

1. **`wittyhead-masst-paper-v4-2page.tex`** (13.5 KB)
   - Main paper document
   - ~1,389 words
   - Target: 2 pages IEEE double-column
   - 15 citations (inline bibliography)

2. **`IEEEtran.cls`** (282 KB)
   - IEEE LaTeX class file v1.8b
   - Required for IEEE conference format

3. **`references-v4.bib`** (8.9 KB)
   - Complete bibliography with all 30 references
   - Provides flexibility for format changes
   - LaTeX will auto-select cited papers if switching to BibTeX

4. **`README-v4.txt`** (4.4 KB)
   - Compilation instructions
   - Paper overview
   - Citation list
   - Technical highlights

---

## Upload Instructions for Overleaf

### Step 1: Upload Package
1. Go to https://www.overleaf.com
2. Click "New Project" → "Upload Project"
3. Select `wittyhead-masst-v4-2page.zip`
4. Overleaf will automatically extract all 4 files

### Step 2: Set Main Document
1. Click on the file menu (top-left hamburger icon)
2. Find `wittyhead-masst-paper-v4-2page.tex`
3. Click the three dots next to it
4. Select "Set as Main File"

### Step 3: Compile
1. Click "Recompile" button
2. Compiler should be set to "pdfLaTeX" (default)
3. **No BibTeX run needed** - paper uses inline bibliography

### Step 4: Verify Output
Check compiled PDF for:
- [ ] Page count ≤ 2 pages
- [ ] Author information correct
- [ ] Table 1 (Empathetic Response Mapping) renders correctly
- [ ] All 15 references appear in bibliography
- [ ] No compilation errors or warnings

---

## Paper Statistics

| Metric | Value |
|--------|-------|
| **Word count** | ~1,389 words |
| **Target length** | 2 pages IEEE double-column |
| **References** | 15 citations |
| **Tables** | 1 (Empathetic Response Mapping) |
| **Figures** | 0 |
| **Sections** | 6 main sections |
| **Subsections** | 5 total |

---

## Key Features (2-Page Version)

### 1. MASST-Aligned Architecture (Section 2)
Three subsections directly addressing MASST priorities:
- **2.1 Context-Aware Behavioral Guard Rails**
  - Asymmetric emotion mappings (Table 1)
  - Ontology-driven validation
  - Accessibility guard rails (WCAG 2.1 AAA)

- **2.2 Mutual Observability**
  - Transparent system logs
  - 6 coordinated services
  - Evidence-traceable reasoning

- **2.3 Design-Time Risk Mitigation**
  - FACS-validated expressions (AU4+AU6+AU12)
  - Therapeutic eye contact (60-90%)
  - Prosodic gesture alignment

### 2. Core Innovation
**Non-mirroring empathetic response architecture**:
- User distress → Avatar compassionate concern (NOT mirrored)
- Based on Gilbert et al. (2019) research
- Coordinated facial expressions, gaze, gestures, voice

### 3. Real-World Application
**Digital MOAI**: AI-enhanced mutual aid networks
- Privacy-preserving (local-first processing)
- User-controlled (3 automation levels)
- Supports vulnerable populations (foster care youth, elderly, mental health)

### 4. Evidence-Based Design
All claims grounded in cited research:
- Compassionate concern → Gilbert 2019
- Therapeutic eye contact → Dowell 1994
- FACS validation → Ekman 1978
- Gesture-prosody → Loehr 2012
- DTA framework → Beatty 2022, D'Alfonso 2020

---

## Citation List (15 Papers)

### MASST Initiative (1)
1. Bradshaw & Mahmud (2025) - MASST workshop

### Empathetic Computing Core (2)
2. Gilbert et al. (2019) - Compassionate faces [6 citations in paper]
3. Dowell & Berman (1994) - Therapeutic alliance [3 citations]

### Digital Therapeutic Alliance (2)
4. Beatty et al. (2022) - Wysa CBT agent
5. D'Alfonso et al. (2020) - DTA framework

### Multi-Modal Components (5)
6. Ekman & Friesen (1978) - FACS
7. Adams & Kleck (2005) - Gaze and emotion
8. Loehr (2012) - Gesture-prosody synchrony
9. Pease & Pease (2006) - Palm orientation
10. Vertegaal et al. (2001) - Eye gaze turn-taking

### Application Context (5)
11. WCAG 2.1 (2018) - Accessibility guidelines
12. Miyazaki (2007) - Easy Japanese
13. Buettner (2008) - Blue Zones & MOAI
14. FASTER H2020 (2019-2022) - AIngle DLT
15. Kotoku & Tijerino (2021) - AI in nursing

---

## Condensation Strategy (v3 → v4)

### Word Reduction: 64%
- v3: 3,810 words (5.5 pages)
- v4: 1,389 words (2 pages)

### Sections Removed
- Detailed background subsections (DTA, FACS, Gaze, Accessibility)
- Code snippets (Python ARKit implementations)
- Extensive implementation details
- Separate limitations subsection
- Detailed future work section

### Content Preserved
- Empathetic Response Mapping table (visual + high impact)
- Gilbert et al. compassionate faces research (core evidence)
- Three MASST priorities (workshop alignment)
- Digital MOAI integration (real-world impact)
- Multi-modal coordination description (system architecture)

### Organizational Changes
- Reorganized around MASST priorities (not technical components)
- Elevated Digital MOAI to standalone section
- Consolidated discussion into MASST contributions + implications
- Merged future work into conclusion

---

## Bibliography Format Note

**Current format**: Inline `\begin{thebibliography}...\end{thebibliography}`
- No BibTeX compilation needed
- 15 entries manually formatted
- Ready to compile immediately

**Alternative format**: BibTeX using `references-v4.bib`
- If you prefer BibTeX format on Overleaf:
  1. Remove inline bibliography section (lines 128-160)
  2. Add before `\end{document}`:
     ```latex
     \bibliographystyle{IEEEtran}
     \bibliography{references-v4}
     ```
  3. Recompile (Overleaf handles BibTeX automatically)
  4. LaTeX will auto-select 15 cited papers from 30 total

**Included in package**: `references-v4.bib` contains all 30 references for flexibility

---

## Quality Assurance Checklist

### ✅ Content Quality
- [x] All claims supported by citations
- [x] No fabricated data or studies
- [x] Future work properly labeled (JSPS KAKENHI grant exists)
- [x] MASST priorities comprehensively addressed
- [x] Core innovation clearly articulated

### ✅ MASST Alignment
- [x] Context-aware behavioral guard rails (Section 2.1)
- [x] Mutual observability (Section 2.2)
- [x] Design-time risk mitigation (Section 2.3)
- [x] Vulnerable populations focus throughout
- [x] Safety mechanisms emphasized

### ✅ Technical Accuracy
- [x] FACS patterns correct (AU4+AU6+AU12)
- [x] Therapeutic eye contact ranges (60-90%)
- [x] Prosodic gesture alignment (Loehr 2012)
- [x] Multi-modal coordination (6 services)
- [x] AIngle DLT latency (0.16ms)

### ✅ LaTeX Formatting
- [x] IEEEtran document class
- [x] Title/author block correct
- [x] Abstract + keywords
- [x] Section numbering
- [x] Table formatting
- [x] Bibliography (15 entries)
- [x] Acknowledgments section

### ✅ Author Information
- [x] Email: ontologist@kwansei.ac.jp ✓
- [x] Affiliation: Intelligent Blockchain+ Innovation Research Center ✓
- [x] Institution: Kwansei Gakuin University ✓
- [x] Location: Sanda, Hyogo, Japan ✓

---

## Next Steps

### 1. ✅ Package Created
- `wittyhead-masst-v4-2page.zip` (78 KB)
- 4 files: .tex, .cls, .bib, README

### 2. ⏳ Upload to Overleaf
- Upload zip file
- Set main document
- Compile with pdfLaTeX

### 3. ⏳ Verify Page Count
- Check compiled PDF
- Should be ≤ 2 pages
- Adjust if needed

### 4. ⏳ Final Review
- Proofread compiled output
- Check table rendering
- Verify all citations appear

### 5. ⏳ Submit to MASST
- Download final PDF from Overleaf
- Submit to workshop portal

---

## Troubleshooting

### If page count > 2 pages:
1. **Reduce acknowledgments**: Shorten to 1 line
2. **Condense table**: Remove "Safety Rationale" column
3. **Shorten discussion**: Reduce Section 5.2 by 1 paragraph
4. **Remove 1-2 citations**: Keep only highest-impact papers

### If compilation errors:
1. **Missing IEEEtran.cls**: Verify file uploaded
2. **Citation errors**: Check citation keys match bibliography
3. **Table errors**: Verify table formatting (no missing &, \\)
4. **Math mode errors**: Check all $ symbols paired

### If references don't appear:
1. **Current format**: Uses inline bibliography (no BibTeX needed)
2. **Check lines 128-160**: Should have `\begin{thebibliography}{00}...`
3. **Verify citations**: All `\cite{...}` keys must match `\bibitem{...}` keys

---

## File Locations

**Submission package**:
```
/home/ontologist3/Github/wittyhead/docs/academic/MASST/wittyhead-masst-v4-2page.zip
```

**Source files** (not in zip):
```
/home/ontologist3/Github/wittyhead/docs/academic/MASST/
├── wittyhead-masst-paper-v4-2page.tex
├── IEEEtran.cls
├── references-v4.bib
├── README-v4.txt
├── V4_CONDENSED_2PAGE_SUMMARY.md
└── V4_SUBMISSION_READY.md (this file)
```

**Previous versions** (for reference):
```
├── wittyhead-masst-paper-v3-empathetic.tex (5.5 pages, 30 refs)
├── references-v3.bib
├── REWRITE_SUMMARY_v3.md
├── FINAL_CORRECTIONS_v3.md
└── FINAL_DTA_SUBSECTION_UPDATE.md
```

---

## Version History

| Version | Pages | Words | Refs | Status | Notes |
|---------|-------|-------|------|--------|-------|
| **v1** | 4 | ~3,200 | 14 | Rejected | OntoGraph focus (wrong approach) |
| **v2** | 4 | ~3,400 | 15 | Corrected | WittyHead architecture (no fabricated data) |
| **v3** | 5.5 | ~3,810 | 30 | Complete | Full empathetic collaboration paper + DTA |
| **v4** | ~2 | ~1,389 | 15 | **READY** | **Condensed for MASST 2-page requirement** |

---

## Contact

**Author**: Yuri A. Tijerino
**Email**: ontologist@kwansei.ac.jp
**Affiliation**: Kwansei Gakuin University, Intelligent Blockchain+ Innovation Research Center
**Location**: Sanda, Hyogo, Japan

**Support**:
- JSPS KAKENHI Grant JP23K01882 (PI: K. Kotoku)
- EU H2020 FASTER Project (Grant 833507)

---

*Submission package ready: 2025-10-14*
*File: wittyhead-masst-v4-2page.zip (78 KB)*
*Contents: 4 files (.tex, .cls, .bib, README)*
*Status: Ready for Overleaf upload and MASST submission*
