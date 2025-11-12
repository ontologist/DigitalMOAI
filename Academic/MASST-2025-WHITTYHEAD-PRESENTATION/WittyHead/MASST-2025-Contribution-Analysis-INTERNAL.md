# Digital MOAI: Contribution Analysis (Internal Use)

**Document Type:** Internal Analysis
**Date:** October 9, 2025
**Author:** Yuri Tijerino
**Purpose:** Strategic assessment of paper contributions for MASST 2025 Workshop submission

---

## Executive Summary

This document analyzes the unique, novel, and scientific contributions of the Digital MOAI paper for strategic positioning at the MASST 2025 Workshop. The analysis identifies our strongest differentiators and areas where we advance the multi-agent systems safety field.

**Key Finding:** Our strongest contribution is demonstrating an alternative safety paradigm—"safety by social structure"—where proven human social constraints (traditional MOAI's five-person accountability groups) provide natural guardrails that complement rather than replace RLHF.

---

## I. UNIQUE CONTRIBUTIONS
### What makes Digital MOAI different from all existing work

### 1.1 Bio-Social Hybrid Design Pattern

**Unique Aspect:** First system to augment centuries-old social structures (traditional MOAI) with multi-agent AI, rather than designing AI-first and retrofitting human considerations.

**Differentiators:**
- Uses validated traditional social technology (Okinawa Centenarian Study: 50+ years of longevity research)
- Preserves human primacy while adding AI capabilities (augmentation paradigm, not replacement)
- Five-person limit as architectural constraint (prevents surveillance-scale, maintains accountability)
- Social structure provides natural behavioral guardrails

**Why It Matters:**
- Addresses MASST theme: "Designing for safety from the ground up"
- Offers alternative to pure RLHF approaches
- Demonstrates how traditional knowledge can inform modern AI architecture
- Provides empirical validation through longevity research (not just theoretical)

**Competitive Advantage:**
- No other MAS work uses validated traditional social structures as foundational architecture
- Bridges traditional knowledge (Okinawan MOAI) with cutting-edge AI (multi-agent systems)
- Interdisciplinary validation (nursing, longevity research, disability studies, computer science)

---

### 1.2 Accessibility-First Multi-Agent Architecture

**Unique Aspect:** Disability studies perspective integrated from project inception (not retrofitted accommodation).

**Differentiators:**
- Miyazaki's "Easy Japanese" (やさしい日本語) research extended across all interaction modalities
- Universal design benefits vulnerable populations AND general users
- Multiple accommodation types (visual, auditory, motor, cognitive) built into agent roles
- Accessibility as architectural principle, not UI feature

**Why It Matters:**
- Most MAS research treats accessibility as afterthought or optional feature
- Demonstrates how designing for disability reveals broader applicability
- Addresses diverse MASST application contexts (accessibility requirements in safety-critical systems)

**Competitive Advantage:**
- Only MAS paper at MASST 2025 likely to have disability studies scholar as co-author
- Concrete implementation (not just design guidelines)
- Cross-cultural accessibility (Easy Japanese) demonstrates global applicability

---

### 1.3 Privacy-Preserving Platform for Vulnerable Populations

**Unique Aspect:** Local-first architecture eliminates centralized surveillance risk while maintaining real-time performance.

**Differentiators:**
- Addresses existential data risks for vulnerable populations (deportation, discrimination, violence)
- Verified performance metrics: 0.16ms latency, 7,142 TPS, 100% reliability
- Offline-capable for resource-constrained environments
- Zero-knowledge design (service provider cannot access user data)

**Why It Matters:**
- MASST CFP explicitly mentions "respecting security, privacy, and resource constraints"
- Demonstrates privacy and performance are not mutually exclusive
- Critical for vulnerable populations typically excluded from AI research

**Competitive Advantage:**
- Real benchmarks (not theoretical claims)
- Production-ready implementation (85% complete platform)
- H2020 FASTER emergency response origins provide credibility

---

## II. NOVEL CONTRIBUTIONS
### What hasn't been done before in MAS research

### 2.1 Dedicated Accessibility Accommodation Agent

**Novel Element:** Separate agent specifically for dynamic accessibility adaptation.

**What's New:**
- Integrates assistive technologies at agent-level (not just interface-level)
- Context-aware accommodation selection based on user abilities AND situation
- Proactive adaptation (doesn't wait for user to request accommodations)
- WCAG 2.1 AAA compliance built into agent responsibilities

**Prior Work Gap:**
- Most MAS accessibility focuses on interface design
- Few systems have agents whose primary role is accessibility
- Assistive technology integration typically user-managed, not agent-managed

**Research Implications:**
- Establishes accessibility as first-class agent role
- Demonstrates how to operationalize universal design in multi-agent systems
- Provides template for accessibility agents in other MAS applications

---

### 2.2 Three-Level Trust Calibration Framework

**Novel Element:** User-configurable automation levels with transparent reasoning and community governance.

**What's New:**
- Explicit automation levels: Suggestion Only → Automatic with Notification → Automatic with Escalation
- Configurable undo windows (default: 24 hours)
- Community consensus on automation policies (not individual-only or system-imposed)
- Transparent reasoning at all levels

**Prior Work Gap:**
- Most MAS systems have binary automation (on/off)
- Trust calibration typically individual-focused (ignoring community norms)
- Limited transparency about when/why agents act autonomously

**Research Implications:**
- Addresses MASST theme: "appropriately calibrated trust relationships"
- Provides concrete implementation of mutual observability and predictability
- Demonstrates how to balance individual autonomy with community values

---

### 2.3 Traditional Knowledge + Modern AI Synthesis

**Novel Element:** Operationalizes traditional social technology (MOAI) with semantic ontologies.

**What's New:**
- Five-person MOAI structure encoded in RDF/OWL ontologies
- Traditional social norms (reciprocity, accountability) as computational constraints
- AI respects and enhances cultural practices (not replacing them)
- Cross-cultural bridge between Okinawan traditional knowledge and Western MAS research

**Prior Work Gap:**
- MAS research rarely incorporates traditional knowledge systems
- Most AI applications treat traditional practices as "legacy" to modernize
- Limited work on how semantic technologies can encode cultural norms

**Research Implications:**
- Demonstrates how AI can support cultural preservation while adding functionality
- Provides framework for incorporating traditional knowledge into MAS
- Opens research direction: "ethno-informatics" for multi-agent systems

---

## III. SCIENTIFIC CONTRIBUTIONS
### Advances to the MAS safety and teamwork field

### 3.1 Alternative Safety Paradigm for Multi-Agent Systems

**Thesis:** Embed AI within proven human social structures that provide natural guardrails, accountability, and context.

**Scientific Advance:**
- Challenges pure RLHF approach by proposing "safety by social structure"
- Five-person MOAI limit as architectural constraint preventing scale-based harms
- Human relationships as primary accountability mechanism (AI as secondary)
- Demonstrates how social constraints can complement technical safety measures

**Empirical Evidence:**
- Okinawa Centenarian Study (1975-present): 50+ years validating MOAI effectiveness
- Lower rates of cardiovascular disease, cancer, cognitive decline in MOAI participants
- Strong correlation between social connectedness (via MOAI) and longevity

**Theoretical Implications:**
- Safety emerges from system architecture, not just agent training
- Social structure provides context that pure RLHF cannot capture
- Scale limitations (five-person groups) can be safety feature, not limitation

**MASST Alignment:**
- "Designing for safety from the ground up rather than principally through RLHF"
- "Sophisticated, context-aware behavioral guard rails"
- "Learning approaches that foster appropriate balance...to externally defined constraints"

---

### 3.2 Empirical Framework for MAS in Vulnerable Populations

**Scientific Advance:** Case study addressing populations typically excluded from AI research, with concrete accessibility and privacy requirements.

**Methodological Contribution:**
- Privacy, accessibility, and cultural context as primary (not secondary) design constraints
- Framework for evaluating MAS safety in high-stakes social support contexts
- Explicit consideration of existential data risks (deportation, discrimination, violence)

**Research Gap Addressed:**
- Most MAS research uses healthy, tech-literate participants
- Vulnerable populations face different safety/privacy requirements than general users
- Limited empirical work on MAS for housing insecurity, disability, healthcare needs

**Implications for Field:**
- Establishes evaluation criteria for MAS serving vulnerable populations
- Demonstrates how to conduct ethical AI research with at-risk communities
- Provides baseline for future comparative studies

**MASST Alignment:**
- "Case studies of safety and teamwork...in public safety settings"
- "Respecting security, privacy, and resource constraints"
- Real-world application beyond laboratory settings

---

### 3.3 Semantic Context-Awareness for Behavioral Guardrails

**Scientific Advance:** RDF/OWL ontologies enable cultural and contextual reasoning for situation-dependent behavioral guardrails.

**Technical Contribution:**
- Semantic knowledge layer captures cultural norms, individual preferences, accessibility needs
- Context-aware escalation (automation level changes based on situation risk)
- Reasoning transparency through ontology queries
- Cultural adaptation without re-training models

**Prior Work Gap:**
- Most MAS guardrails are static rules or learned behaviors
- Limited work on context-dependent automation policies
- Neuro-symbolic approaches rarely applied to MAS behavioral guardrails

**Research Implications:**
- Demonstrates practical application of neuro-symbolic AI to MASST themes
- Shows how semantic reasoning complements neural approaches
- Provides template for context-aware guardrails in other MAS domains

**MASST Alignment:**
- "Sophisticated, context-aware behavioral guard rails"
- "Representation and reasoning about ethical theories and principles"
- "Heterogeneous collections of computational methods—including neuro-symbolic reasoning"

---

### 3.4 Privacy-Performance Trade-off Resolution

**Scientific Advance:** Demonstrates that privacy-preserving distributed architecture CAN achieve real-time performance.

**Technical Achievement:**
- Verified benchmarks: 0.16ms latency, 7,142 TPS, 100% reliability
- Local-first architecture (no centralized server required)
- Peer-to-peer synchronization with eventual consistency
- Offline operation capability

**Prior Assumption Challenged:**
- Common belief: centralization necessary for responsiveness
- Trade-off assumption: privacy OR performance, not both
- Distributed systems stereotyped as slow/unreliable

**Research Implications:**
- Provides empirical counter-example to centralization-performance assumption
- Demonstrates feasibility of privacy-preserving MAS for real-time applications
- Opens research direction: high-performance distributed MAS architectures

**MASST Alignment:**
- "Respecting security, privacy, and resource constraints"
- "Safe agent mobility" (offline operation, no central dependency)
- Real-world applicability (emergency response, accessibility needs)

---

## IV. INTERDISCIPLINARY CONTRIBUTIONS

### 4.1 Nursing/Healthcare Domain (Kotoku's Expertise)

**Contribution to Field:**
- Framework for AI supporting healthcare for vulnerable populations
- Privacy-preserving health monitoring without centralized surveillance
- Emergency response protocols with human oversight
- Application to housing insecurity, healthcare access barriers

**Why This Matters:**
- Nurses work directly with vulnerable populations
- Healthcare AI often prioritizes efficiency over patient autonomy
- Digital MOAI demonstrates how AI can support (not replace) care relationships

**Credibility Factor:**
- Kotoku as KAKENHI PI demonstrates research funding validation
- Nursing perspective ensures patient-centered design
- Fundamental Nursing Department focus on essential care principles

---

### 4.2 Disability Studies (Miyazaki's Expertise)

**Contribution to Field:**
- Operationalizes barrier-free design principles in multi-agent systems
- Demonstrates how linguistic accessibility (Easy Japanese) extends to AI interaction
- Integration of disability discourse into MAS architecture from inception
- Universal design benefits extending beyond disability community

**Why This Matters:**
- Most AI research lacks disability studies perspective
- Accessibility typically treated as compliance requirement, not design principle
- Miyazaki's work on "Easy Japanese" has broader implications for AI interaction design

**Credibility Factor:**
- Published research on disability discourse and language policy
- Kwansei Gakuin's Intelligent Blockchain+ Innovation Research Center affiliation
- H-Net review demonstrates international recognition in disability studies

---

### 4.3 Computer Science/Engineering (Tijerino's Domain)

**Contribution to Field:**
- Production-quality implementation (85% complete platform, 96 Rust files, ~54K lines)
- Verified performance metrics demonstrating feasibility
- Open architecture compatible with existing MAS frameworks
- Real-world deployment experience (H2020 FASTER emergency response)

**Why This Matters:**
- Moves beyond theoretical proposals to working system
- Benchmarks provide empirical validation
- Production readiness demonstrates practical applicability

**Credibility Factor:**
- H2020 FASTER project participation (EU emergency response initiative)
- Comprehensive benchmarking (2M+ operations)
- Open source availability for reproducibility

---

## V. STRATEGIC POSITIONING FOR MASST 2025

### 5.1 Strongest Differentiators

**Primary Unique Selling Points:**

1. **"Safety by Social Structure"** - Alternative paradigm to pure RLHF
   - Most likely to generate workshop discussion
   - Challenges current dominant approach
   - Backed by 50+ years empirical research (Okinawa Centenarian Study)

2. **Accessibility-First Multi-Agent Design** - Disability studies integrated from inception
   - Likely only paper with this perspective
   - Demonstrates broader applicability (benefits all users)
   - Concrete implementation (not just guidelines)

3. **Privacy + Performance** - Real benchmarks proving no trade-off required
   - Challenges common assumption
   - Critical for vulnerable populations
   - Production-ready implementation

### 5.2 Alignment with MASST Themes

**Direct Theme Matches:**

| MASST Theme | Digital MOAI Contribution |
|-------------|---------------------------|
| "Designing for safety from the ground up rather than principally through RLHF" | **PRIMARY CONTRIBUTION**: Safety by social structure |
| "Sophisticated, context-aware behavioral guard rails" | Semantic ontologies enable cultural/contextual reasoning |
| "Mutual observability, predictability, and directability" | Three-level trust calibration with transparent reasoning |
| "Effective Human-Agent Robot Teamwork (HART)" | Five-person MOAI + AI agents with defined roles |
| "Respecting security, privacy, and resource constraints" | Privacy-preserving local-first architecture with verified performance |
| "Safe agent mobility" | Offline operation, no central server dependency |
| "Case studies...in public safety settings" | H2020 FASTER emergency response origins |
| "Learning approaches that foster appropriate balance" | Community governance over automation policies |
| "Heterogeneous collections of computational methods—including neuro-symbolic reasoning" | Semantic knowledge layer (RDF/OWL) + LLM integration |

**Coverage:** 9 out of 9 major MASST themes directly addressed

### 5.3 Competitive Advantages

**Unique Combinations (unlikely to be duplicated by other submissions):**

1. **Traditional Knowledge + Cutting-Edge AI**
   - No other paper likely to combine centuries-old social technology with multi-agent systems
   - Cross-cultural bridge (Okinawan MOAI + Western MAS research)
   - Empirical validation through longevity research

2. **Interdisciplinary Team**
   - Nursing (healthcare for vulnerable populations) + Disability Studies (accessibility) + Computer Science (MAS implementation)
   - Geographic diversity: Fukuoka University + Kwansei Gakuin University + H2020 EU project
   - Each author brings unique credibility to their domain

3. **Production Implementation with Real Benchmarks**
   - Many MASST papers will be theoretical or early-stage prototypes
   - Our 85% complete platform with verified benchmarks demonstrates feasibility
   - H2020 FASTER participation shows real-world deployment experience

4. **Vulnerable Populations Focus**
   - Most MAS research avoids high-risk populations (ethics, complexity)
   - We explicitly target individuals with disabilities, housing insecurity, healthcare needs
   - Addresses populations typically excluded from AI research

### 5.4 Potential Weaknesses (and Mitigations)

**Weakness 1: Incomplete Implementation (40% application complete)**

*Mitigation:*
- Emphasize 85% complete platform (production-ready backend)
- Focus on architecture and design principles (still valuable even if application incomplete)
- Honest transparency about status (aligns with scientific integrity)
- Planned KAKENHI research demonstrates commitment to completion

**Weakness 2: No User Studies Yet**

*Mitigation:*
- Emphasize this is design research + architectural contribution
- Reference planned KAKENHI human subjects research
- Okinawa Centenarian Study provides validation for traditional MOAI effectiveness
- Technical validation complete (benchmarks demonstrate feasibility)

**Weakness 3: Limited Evaluation of Trust Calibration**

*Mitigation:*
- Present trust framework as novel contribution (not yet empirically validated)
- Acknowledge as future work (longitudinal studies planned)
- Framework itself is contribution (provides template for others)

**Weakness 4: Patent-Pending Consensus Algorithm Not Disclosed**

*Mitigation:*
- Focus on outcomes (privacy, performance) not internal mechanisms
- Sufficient detail provided for architectural understanding
- References to H2020 FASTER origins provide credibility
- Common practice to withhold patent-pending details

---

## VI. PUBLICATION STRATEGY

### 6.1 Workshop Presentation Strategy

**Goal:** Generate discussion and establish Digital MOAI as alternative safety paradigm.

**Key Messages:**
1. "Safety by social structure" as complement to RLHF
2. Accessibility-first design benefits everyone, not just disabled users
3. Privacy and performance are not mutually exclusive
4. Traditional knowledge can inform modern AI architecture

**Engagement Questions for Audience:**
- How can we formally verify safety properties of bio-social hybrid systems?
- What standards are needed for context-aware behavioral guardrails in community AI?
- What metrics should we use for calibrated trust in hybrid human-agent collectives?
- How can ethical frameworks address AI decision-making for vulnerable populations?

### 6.2 Post-Workshop Publication Strategy

**Book Chapter (MASST Volume Series):**
- Expand to full paper including detailed architecture, implementation, evaluation
- Include field study results (if KAKENHI research progresses)
- Formal safety analysis of social structure constraints
- Comprehensive accessibility evaluation results

**Journal Article (Selected Contributions):**
- Target: IEEE Intelligent Systems or similar HCI/AI journal
- Focus on accessibility-first design framework
- Empirical validation with user studies
- Broader implications for MAS design

**Conference Papers (Follow-up):**
- AAMAS 2026: Technical architecture and semantic reasoning details
- CHI 2026: Accessibility and universal design contributions
- Healthcare Informatics: Nursing/healthcare applications

### 6.3 Open Source Strategy

**GitHub Repository:**
- AIngle DLT platform (already open source)
- Digital MOAI application (when ready)
- Documentation emphasizing reproducibility
- Example configurations for different vulnerable population contexts

**Benefits:**
- Demonstrates transparency and scientific rigor
- Enables others to build on our work
- Increases citation potential
- Aligns with open standards emphasis in MASST CFP

---

## VII. RISK ANALYSIS

### 7.1 Risks to Acceptance

**Risk 1: "Too Applied" for Research Workshop**

*Likelihood:* Low
*Mitigation:* Emphasize scientific contributions (safety paradigm, trust framework, accessibility framework), not just application
*Evidence:* MASST CFP explicitly welcomes "case studies" and "specific application domains"

**Risk 2: "Incomplete Implementation" Reduces Credibility**

*Likelihood:* Medium
*Mitigation:* Emphasize architectural contributions + 85% platform complete + H2020 FASTER validation
*Evidence:* Many workshop abstracts are work-in-progress; honest transparency is valued

**Risk 3: "Traditional MOAI" Seems Unscientific or Folklorish**

*Likelihood:* Low
*Mitigation:* Emphasize 50+ years Okinawa Centenarian Study validation + longevity research evidence
*Evidence:* Blue Zones research widely recognized; MOAI has scientific validation

**Risk 4: Patent-Pending Consensus Algorithm Reduces Reproducibility**

*Likelihood:* Low
*Mitigation:* Focus on outcomes and architectural patterns (reproducible), not internal algorithm
*Evidence:* Sufficient detail provided for understanding contributions; common practice in industry-academia collaboration

### 7.2 Risks to Impact

**Risk 1: Workshop Attendance (Online vs. In-Person)**

*Likelihood:* Medium
*Impact:* Online presentation may reduce networking opportunities
*Mitigation:* Offer live demonstration; prepare engaging visuals; follow up with interested researchers

**Risk 2: Limited Field Validation Reduces Influence**

*Likelihood:* Medium
*Impact:* Other researchers may wait for empirical validation before building on our work
*Mitigation:* Clearly position as design research + architectural contribution; emphasize planned KAKENHI studies

**Risk 3: Interdisciplinary Nature Reduces Depth in Each Field**

*Likelihood:* Low
*Impact:* Specialists in nursing/disability studies/MAS may find their domain coverage shallow
*Mitigation:* Emphasize synthesis as contribution (not depth in single field); plan domain-specific follow-up papers

---

## VIII. SUCCESS METRICS

### 8.1 Workshop Presentation Success

**Immediate Metrics (November 2025):**
- Abstract accepted for presentation ✓ (target)
- Generates substantive discussion during Q&A ✓ (target)
- Identified as "alternative paradigm" by attendees ✓ (aspirational)
- Connections with 5+ researchers interested in collaboration ✓ (target)

**Short-Term Metrics (December 2025 - March 2026):**
- Invited to contribute to MASST book volume ✓ (likely if accepted)
- Invited to contribute to special journal issue ✓ (aspirational)
- Follow-up discussions with workshop participants ✓ (target)

### 8.2 Publication Impact

**Medium-Term Metrics (2026):**
- Book chapter published in MASST volume series ✓ (target)
- Journal article accepted to IEEE Intelligent Systems or equivalent ✓ (aspirational)
- Follow-up conference papers accepted (AAMAS, CHI, or healthcare informatics) ✓ (target)
- Citations begin accumulating (5-10 citations within first year) ✓ (target)

**Long-Term Metrics (2027+):**
- "Safety by social structure" paradigm referenced by other MAS researchers ✓ (aspirational)
- Accessibility-first framework adopted in other MAS projects ✓ (aspirational)
- Digital MOAI deployed with real MOAI groups (KAKENHI research) ✓ (target)
- 20+ citations demonstrating field influence ✓ (aspirational)

### 8.3 Real-World Impact

**Community Impact:**
- Partnership with Okinawan MOAI groups for pilot studies ✓ (target)
- Collaboration with disability advocacy organizations ✓ (target)
- Adoption by social services organizations ✓ (aspirational)

**Policy Impact:**
- Referenced in AI safety guidelines for vulnerable populations ✓ (aspirational)
- Informs accessibility standards for multi-agent systems ✓ (aspirational)

---

## IX. KEY TAKEAWAYS FOR SUBMISSION

### 9.1 What to Emphasize

**In Abstract (Sections I & II per CFP):**

1. **Risks and Forecasts (Section I):**
   - Current MAS approaches fail vulnerable populations (privacy, accessibility, cultural context)
   - Pure RLHF insufficient for safety in high-stakes social support contexts
   - Centralized architectures create existential data risks

2. **Technical Approach and Contributions (Section II):**
   - "Safety by social structure" paradigm (embed AI in proven human social structures)
   - Accessibility-first design (disability studies perspective from inception)
   - Privacy-preserving architecture with real-time performance (verified benchmarks)
   - Three-level trust calibration framework
   - Semantic context-awareness for behavioral guardrails

**In Presentation:**
- Live/video demonstration of accessibility features
- Visual comparison: traditional MOAI vs. Digital MOAI architecture
- Benchmark results showing privacy + performance feasibility
- Open questions for community discussion

### 9.2 What to De-emphasize

**Don't Overstate:**
- Implementation completeness (honest about 40% application, 85% platform)
- Empirical validation (no user studies yet; planned under KAKENHI)
- Generalizability (case study approach; broader applicability to be determined)

**Don't Overexplain:**
- Patent-pending consensus algorithm internals
- Technical implementation details (save for book chapter)
- Governance/policy implications (CFP explicitly out of scope)

### 9.3 Core Message

**One-Sentence Summary:**
"Digital MOAI demonstrates how multi-agent AI can augment centuries-proven human social structures (traditional Okinawan MOAI mutual aid networks) to provide privacy-preserving, accessibility-first community support for vulnerable populations—offering an alternative 'safety by social structure' paradigm to pure RLHF approaches."

**Why This Matters to MASST Community:**
Multi-agent systems safety cannot rely solely on technical measures (RLHF, guardrails); embedding AI within validated human social structures provides natural accountability, context-awareness, and cultural appropriateness—especially critical for vulnerable populations where AI failures have catastrophic consequences.

---

## X. NEXT STEPS

### 10.1 Before Submission (by October 15, 2025)

- [ ] Collaborator review and input (Kotoku, Miyazaki)
- [ ] Email addresses and KAKENHI grant number
- [ ] Final proofread of condensed abstract
- [ ] Decision: submit v2 (detailed) or v3 (condensed)?
- [ ] Submit to jbradshaw@ihmc.org

### 10.2 After Acceptance (by November 7, 2025)

- [ ] Prepare PowerPoint/Keynote presentation
- [ ] Create figures: MOAI structure, system architecture, accessibility features
- [ ] Prepare demo video (if presenting online)
- [ ] Prepare discussion questions for Q&A

### 10.3 Post-Workshop (December 2025+)

- [ ] Full book chapter draft with field study results
- [ ] Journal article focusing on accessibility framework
- [ ] Follow-up with interested collaborators
- [ ] Plan KAKENHI human subjects research

---

## XI. APPENDICES

### A. Competitive Landscape Analysis

**Likely MASST 2025 Submission Topics (Based on CFP):**
- RLHF alternatives and improvements
- Formal verification of MAS safety properties
- Human-agent teamwork in specific domains (medicine, autonomous vehicles, military)
- Agent mobility and security
- Learning approaches for context-aware behavior
- Case studies in robotics and IoT

**Our Differentiation:**
- Only bio-social hybrid approach (human social structure + AI)
- Only accessibility-first design with disability studies perspective
- Only focus on vulnerable populations (most will use general/healthy users)
- Only validated traditional knowledge integration

### B. Author Contribution Matrix

| Contribution Area | Kotoku | Miyazaki | Tijerino |
|-------------------|---------|----------|----------|
| **Conceptualization** | Healthcare for vulnerable populations | Accessibility & universal design | Multi-agent architecture |
| **Methodology** | KAKENHI research design | Easy Japanese framework | System design & implementation |
| **Software** | - | - | AIngle DLT platform, Digital MOAI app |
| **Validation** | Healthcare expertise | Accessibility review | Performance benchmarking |
| **Writing - Original Draft** | Sections on nursing/healthcare | Sections on accessibility/disability | Technical sections, overall integration |
| **Writing - Review & Editing** | Healthcare perspective | Accessibility perspective | Technical accuracy |
| **Funding Acquisition** | JSPS KAKENHI (PI) | - | H2020 FASTER (participant) |
| **Resources** | Fukuoka University facilities | Kwansei Gakuin research center | Development infrastructure |

### C. Reference Strength Analysis

**Tier 1 (Essential, High-Impact):**
- [4-7] Okinawa longevity research (Blue Zones, Centenarian Study)
- [3] Bradshaw HART research (MASST organizer, directly relevant)
- [11, 13] Miyazaki's Easy Japanese research (unique to our team)

**Tier 2 (Important, Well-Cited):**
- [1] Christiano RLHF (establishes context we're challenging)
- [8] WCAG 2.1 standards (authoritative accessibility reference)
- [9] H2020 FASTER (credibility for platform origins)

**Tier 3 (Supporting Context):**
- [2] Jennings MAS foundations
- [10] Tijerino benchmarks (our own work)
- [12] Miyazaki disability discourse (our own work)

---

**Document Status:** Complete - Internal Use Only
**Last Updated:** October 9, 2025
**Next Review:** After workshop acceptance notification (October 31, 2025)

---

**Confidential:** This document contains strategic analysis and competitive assessment. Do not distribute outside core research team.

**Copyright © 2025 Yuri Tijerino. All rights reserved.**
