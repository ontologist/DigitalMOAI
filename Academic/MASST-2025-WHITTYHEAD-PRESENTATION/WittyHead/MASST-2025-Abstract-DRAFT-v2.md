## Digital MOAI: AI-Enhanced Traditional Mutual Aid Networks for Vulnerable Communities

**2-Page Presentation Abstract for MASST 2025 Workshop**

**IEEE/WIC International Conference on Web Intelligence and Intelligent Agent Technology**  
**November 14-15, 2025, London, United Kingdom**

## Authors

**Kazuko Kotoku** (神徳和子)  
Department of Fundamental Nursing, School of Nursing  
Faculty of Medicine, Fukuoka University, Japan  
Email: \[📝 COLLABORATOR: Please provide\]  
Principal Investigator, JSPS KAKENHI Grant Number JP\[📝 COLLABORATOR: Please provide 8-digit number\]

**Yasushi Miyazaki**  
Intelligent Blockchain+ Innovation Research Center  
Kwansei Gakuin University, Nishinomiya, Japan  
Email: \[📝 COLLABORATOR: Please provide\]  
Research Focus: Disability Studies, Accessibility, Language Policy

**Yuri Tijerino** (Corresponding Author)  
Department of Applied Informatics  
Intelligent Blockchain+ Innovation Research Center  
Kwansei Gakuin University, Nishinomiya, Japan  
Email: ontologist@kwansei.ac.jp

\> **📝 NOTE TO COLLABORATORS:** Is this author order OK and compliant? I am fine with it, but what do you think? Dr. Kotoku as PI of the KAKENHI grant is listed first, Dr. Miyazaki (accessibility expertise) second, and myself (system architect/corresponding author) last. Please let me know if you prefer a different order or if this follows appropriate conventions and ethical standards for your fields.

**Presentation Mode:** Online (live or video-based demonstration available upon request)

## Abstract

Multi-agent systems supporting vulnerable populations face critical challenges in safety, trust calibration, and privacy preservation. We present **Digital MOAI**, an AI-enhanced adaptation of traditional Okinawan mutual aid networks (模合, moai), demonstrating how proven centuries-old human social structures can be augmented—not replaced—by multi-agent artificial intelligence. Built on the privacy-preserving AIngle DLT platform (developed for H2020 FASTER emergency response initiative), Digital MOAI addresses multi-agent safety through: (1) human-centric architectural design preserving traditional five-person support groups, (2) semantic context-awareness enabling cultural and accessibility considerations, (3) user-controlled trust calibration mechanisms, and (4) local-first data architecture ensuring privacy sovereignty. This work contributes both an architectural pattern for human-AI hybrid collectives and empirical insights from application to vulnerable populations including individuals with disabilities, housing insecurity, and healthcare needs.

**Keywords:** Multi-agent systems, human-agent teamwork, accessibility, privacy-preserving systems, community support, disability studies, traditional knowledge

## I. INTRODUCTION

### A. Research Context and Motivation

The rapid deployment of multi-agent AI systems in social support domains presents unprecedented opportunities and risks. While these systems promise enhanced coordination and decision support, their application to vulnerable populations—individuals with disabilities, refugees, orphaned youth, those experiencing housing instability—demands rigorous attention to safety, trust, and cultural appropriateness \[_(Note: aligns with MASST focus on hybrid human-agent collectives and safety)_\].

Current multi-agent architectures predominantly employ reinforcement learning from human feedback (RLHF) with limited consideration for cultural context, individual autonomy, or privacy preservation \[1\]. For vulnerable populations, the consequences of AI failures are not mere inconveniences but potential catastrophes: eviction, medical crises, or violation of sensitive personal data.

### B. Traditional MOAI: A Proven Social Technology

**MOAI** (模合) represents a centuries-old Okinawan social innovation: mutual aid collectives of exactly five individuals providing lifelong financial, emotional, and practical support \[2\]. Extensive epidemiological research demonstrates MOAI's effectiveness: Okinawa historically exhibited the world's highest concentration of centenarians, with significantly lower rates of cardiovascular disease, cancer, and cognitive decline compared to other populations \[3, 4\].

The Okinawa Centenarian Study, initiated in 1975 and representing the world's longest continuously running longevity research, attributes exceptional health outcomes partially to robust social support networks, with MOAI serving as the foundational structure \[5\]. Recent research by Willcox et al. confirms that social connectedness—regardless of relationship type—correlates strongly with longevity and well-being \[6\].

### C. Research Question and Contributions

This work investigates: **How can multi-agent AI systems augment traditional mutual aid networks while preserving their essential human-centric properties, particularly when serving populations with diverse accessibility needs?**

We contribute:

1.  **Architectural Pattern:** Design principles for AI supporting (not replacing) traditional social structures
2.  **Accessibility Framework:** Integration of disability studies perspectives into multi-agent design \[_(Note: aligns with MASST call for safety and teamwork in diverse contexts)_\]
3.  **Privacy-Preserving Platform:** Local-first architecture enabling data sovereignty
4.  **Empirical Insights:** Application to vulnerable populations with diverse needs

## II. BACKGROUND AND RELATED WORK

### A. Multi-Agent Systems for Social Support

Multi-agent architectures have been proposed for healthcare coordination \[7\], crisis response \[8\], and community services \[9\]. However, most implementations prioritize efficiency over safety, employ centralized data models incompatible with privacy requirements, and lack mechanisms for cultural context-awareness or accessibility accommodation.

Recent human-agent teamwork (HART) research emphasizes mutual observability, predictability, and trust calibration \[10\]. Digital MOAI extends this framework by grounding it in proven traditional structures and explicitly addressing accessibility requirements \[_(Note: directly addresses MASST themes)_\].

### B. Accessibility and Barrier-Free Design in AI Systems

Japan's transition from "barrier-free" (バリアフリー) to "universal design" (ユニバーサルデザイン) reflects evolving understanding of accessibility \[11\]. Miyazaki's research on disability discourse demonstrates how language, technology, and policy intersect to create or remove barriers for persons with disabilities \[12, 13\].

Traditional AI systems often embed ableist assumptions—requiring visual interfaces, fine motor control, or rapid response times \[14\]. Multi-agent systems compound these issues through opacity, unpredictability, and lack of user control.

### C. Privacy-Preserving Distributed Systems

Local-first software architectures prioritize user data sovereignty, enabling offline operation and eliminating central points of failure \[15\]. The AIngle DLT platform, developed for H2020 FASTER emergency response requirements, demonstrated real-time performance (sub-millisecond latency) with privacy-preserving distributed architecture \[16\].

## III. SYSTEM DESIGN AND METHODOLOGY

### A. Design Principles

Digital MOAI adheres to four core principles:

1.  **Human Primacy:** AI augments, never replaces, human relationships and decision-making
2.  **Accessibility First:** Universal design from initial conception, not retrofitted accommodation
3.  **Privacy Sovereignty:** Users maintain complete control over personal data
4.  **Cultural Context-Awareness:** System respects diverse norms, values, and communication styles

### B. Architecture Overview

**1) Traditional MOAI Structure (Preserved):**

*   Groups consist of exactly five human members
*   Members meet regularly (in-person or virtually)
*   Relationships develop gradually through shared experiences
*   Group collectively governs automation policies

**2) AI Agent Roles:**

_Personal AI Assistants_ (one per member): Learn individual preferences, accessibility needs, communication styles, and boundaries. Operate under user's complete control with configurable automation levels (suggestion-only, automatic with notification, automatic with escalation).

_Group Coordinator Agent_: Facilitates scheduling considering accessibility requirements (e.g., wheelchair-accessible venues, sign language interpretation needs), tracks shared resources, monitors for patterns indicating member distress (with human verification), and supports—but never replaces—collective decision-making.

_Accessibility Accommodation Agent_: Dynamically adapts interfaces based on user abilities (visual, auditory, motor, cognitive), provides alternative input/output modalities (voice, gesture, simplified language), ensures WCAG 2.1 AAA compliance \[17\], and integrates assistive technologies.

_Emergency Response Coordinator_: Immediate notification of group members during crises, privacy-preserving location sharing (strictly opt-in, time-limited), automated connection to emergency services **with human confirmation**, and specialized protocols for medical emergencies, domestic crises, or housing insecurity.

**3) Technical Platform (AIngle DLT):**

The AIngle platform, originally developed for H2020 FASTER initiative addressing first responder emergency communication \[16\], provides:

*   **Privacy-First Architecture:** Local data storage, peer-to-peer synchronization, zero-knowledge design preventing service provider data access
*   **Real-Time Performance:** Verified 0.16ms average latency, 7,142 TPS peak throughput \[18\]
*   **Semantic Knowledge Layer:** RDF/OWL ontologies enabling cultural and contextual reasoning
*   **Accessibility Support:** Multiple input/output modalities, "Easy Japanese" (やさしい日本語) support \[19\]
*   **Offline Operation:** Full functionality without internet connectivity (critical for underserved areas)

### C. Accessibility Design Integration

Informed by Miyazaki's research on disability discourse and barrier-free design \[12, 13\], Digital MOAI incorporates:

**Universal Design Elements:**

*   Multiple sensory modalities (visual, auditory, tactile)
*   Adjustable timing and pacing
*   Simple, clear language with furigana support for Japanese kanji
*   Compatibility with screen readers, switch controls, and other assistive technologies

**Disability-Specific Accommodations:**

*   Visual: Screen reader optimization, high-contrast modes, voice-first interaction
*   Auditory: Visual alerts, text-based communication alternatives, vibration notifications
*   Motor: Voice control, switch access, simplified gesture interfaces
*   Cognitive: Progressive disclosure, simplified language modes, visual supports

**Cultural and Linguistic Accessibility:**

*   "Easy Japanese" (やさしい日本語) for non-native speakers and persons with cognitive disabilities \[19\]
*   Multiple language support for refugee and immigrant communities
*   Cultural adaptation of interaction patterns and social norms

### D. Trust Calibration and User Control

Digital MOAI provides three user-configurable automation levels:

**Level 1 - Suggestion Only** (default): AI proposes actions with full reasoning transparency, waits for explicit human approval. Suitable for new users, high-stakes decisions, or users preferring maximum control.

**Level 2 - Automatic with Notification**: AI takes predefined actions, immediately notifies user. Human can undo within configurable time window (default: 24 hours). Suitable for routine tasks (scheduling, reminders).

**Level 3 - Automatic with Escalation**: AI acts independently for well-defined routine tasks. Immediately escalates anomalies, high-risk situations, or requests beyond defined scope. Suitable for experienced users with calibrated trust.

Groups collectively decide automation policies through consensus, ensuring alignment with shared values and individual comfort levels \[_(Note: addresses MASST theme of appropriately calibrated trust)_\].

## IV. IMPLEMENTATION STATUS

### A. Current Development State (October 2025)

**Platform (AIngle DLT) - Production Ready (85% complete):**

*   ✅ Privacy-preserving distributed architecture
*   ✅ Semantic knowledge layer (RDF/OWL)
*   ✅ Real-time performance verified \[18\]
*   ✅ Security and encryption infrastructure
*   ✅ API gateway and monitoring systems

**Application (Digital MOAI) - In Progress (40% complete):**

*   🔄 User interface with accessibility features
*   🔄 Personal AI assistant integration
*   🔄 Group coordination functionality
*   📋 Offline operation capabilities (planned)
*   📋 Advanced accessibility features (planned)
*   📋 Field studies with actual MOAI groups (planned)

### B. Preliminary Evaluation

**Technical Validation:** Comprehensive benchmarking (2M+ operations) confirms real-time performance suitable for emergency response and accessibility requirements: 0.16ms latency, 100% reliability, minimal resource usage enabling deployment on low-cost devices \[18\].

**Accessibility Review:** Initial expert evaluation (following WCAG 2.1 guidelines \[17\]) identified accessibility strengths and areas requiring enhancement. Full accessibility audit planned.

**Human Subjects Research:** \[📝 COLLABORATOR NOTE - Dr. Kotoku: Please describe planned studies under KAKENHI grant—ethics approval status, participant recruitment, outcome measures, timeline\]

## V. DISCUSSION

### A. Implications for Multi-Agent Safety

Digital MOAI demonstrates an alternative paradigm for multi-agent safety: rather than attempting to make AI "safe" through training alone, embed AI within proven human social structures that provide natural guardrails, accountability, and context \[_(Note: addresses MASST theme of designing for safety from the ground up)_\].

Traditional MOAI's five-person limit prevents surveillance-scale data collection while maintaining manageable, accountable relationships. AI augmentation preserves this scale while enhancing coordination and accessibility.

### B. Accessibility as a Design Principle

Integrating disability studies perspectives from project inception—not as afterthought—reveals broader applicability. Features designed for accessibility (voice control, simplified language, flexible timing) benefit all users, particularly older adults, non-native speakers, and those in high-stress situations \[_(Note: relevant to MASST focus on diverse applications)_\].

Miyazaki's research on "Easy Japanese" (やさしい日本語) demonstrates how linguistic accessibility serves multiple populations: persons with cognitive disabilities, non-native speakers, and children \[13, 19\]. Digital MOAI extends this principle across all interaction modalities.

### C. Privacy and Data Sovereignty

Local-first architecture addresses a fundamental challenge for vulnerable populations: centralized data storage creates existential risks (deportation for undocumented immigrants, discrimination for LGBTQ+ individuals, violence for domestic abuse survivors). By eliminating central data aggregation, Digital MOAI enables community support without systemic surveillance \[_(Note: aligns with MASST theme of privacy constraints)_\].

### D. Limitations and Future Work

**Current Limitations:**

*   Implementation incomplete (40% application, 85% platform)
*   No field studies with actual users yet
*   Limited evaluation of long-term trust calibration
*   Accessibility features partially implemented

**Planned Research:**

*   Longitudinal studies with diverse MOAI groups (pending KAKENHI ethics approval)
*   Formal accessibility evaluation following established protocols
*   Cross-cultural adaptation (beyond Japanese context)
*   Integration with existing social services and healthcare systems

## VI. CONCLUSION

Digital MOAI demonstrates a human-centric approach to multi-agent AI: augmenting centuries-proven social structures (traditional Okinawan MOAI mutual aid networks) with privacy-preserving, accessibility-first technology. By prioritizing human relationships, cultural context, and user control over AI autonomy, this work offers an architectural pattern for multi-agent systems serving vulnerable populations.

Key contributions include: (1) design principles for AI supporting traditional social structures, (2) integration of disability studies perspectives into multi-agent architecture, (3) privacy-preserving platform enabling data sovereignty, and (4) preliminary framework for trust calibration in hybrid human-agent collectives. Future work includes field studies with actual MOAI groups and comprehensive accessibility evaluation.

**Workshop Demonstration:** Live or video-based demonstration of Digital MOAI interface and accessibility features available upon request during presentation.

## ACKNOWLEDGMENTS

This research is supported by JSPS KAKENHI Grant Number JP\[📝 Dr. Kotoku: Please provide\]. AIngle DLT platform development was partially supported by European Union H2020 FASTER project (Grant Agreement No. 833507). We thank the Okinawan community for inspiration from traditional MOAI practices.

## REFERENCES

\[1\] P. Christiano et al., "Deep reinforcement learning from human feedback," _Advances in Neural Information Processing Systems_, vol. 30, 2017.

\[2\] D. Buettner, _The Blue Zones: Lessons for Living Longer from the People Who've Lived the Longest_, National Geographic Society, 2008.

\[3\] M. Suzuki, B. J. Willcox, and D. C. Willcox, "Implications from and for food cultures for cardiovascular disease: longevity," _Asia Pacific Journal of Clinical Nutrition_, vol. 10, no. 2, pp. 165-171, 2001.

\[4\] B. J. Willcox et al., "Demographic, phenotypic, and genetic characteristics of centenarians in Okinawa and Japan: Part 1—centenarians in Okinawa," _Mechanisms of Ageing and Development_, vol. 165, Part B, pp. 75-79, 2017. DOI: 10.1016/j.mad.2016.11.001

\[5\] M. Poulain et al., "Exceptional longevity in Okinawa: Demographic trends since 1975," _Journal of Internal Medicine_, vol. 295, no. 1, pp. 145-154, 2024. DOI: 10.1111/joim.13764

\[6\] B. J. Willcox and D. C. Willcox, "Okinawan Centenarian Study: Investigating Healthy Aging among the World's Longest-Lived People," in _Routledge Handbook of Global Public Health_, 2020.

\[7\] N. R. Jennings et al., "Autonomous agents for business process management," _Applied Artificial Intelligence_, vol. 14, no. 2, pp. 145-189, 2000.

\[8\] EU H2020 FASTER Project, "First Responder Advanced Technologies for Safe and Efficient Emergency Response," Grant Agreement No. 833507, 2019-2022. \[Online\]. Available: https://www.faster-project.eu

\[9\] Y. Shoham and K. Leyton-Brown, _Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations_, Cambridge University Press, 2009.

\[10\] J. M. Bradshaw et al., "Human-Agent-Robot Teamwork," _IEEE Intelligent Systems_, vol. 27, no. 2, pp. 8-13, 2012.

\[11\] S. Watanabe, "From barrier-free to universal/inclusive design: How far have we progressed during these 60 years in Japan?" in _Universal Design 2016: Learning from the Past, Designing for the Future_, IOS Press, 2016, pp. 341-347.

\[12\] Y. Miyazaki, "Review of 'More Than Medals: A History of the Paralympics and Disability Sports in Postwar Japan' by Dennis J. Frost," _H-Disability_, H-Net Reviews, March 2022. \[Online\]. Available: https://networks.h-net.org/node/4189/reviews/9854904/

\[13\] Y. Miyazaki, "Yasashii Nihongo (Easy Japanese) on community media: Focusing on radio broadcasting," _Kwansei Gakuin Policy Studies Review_, vol. 24, pp. 71-88, 2017. (in Japanese)

\[14\] S. Bennett and M. Rosner, "The promise of empathy: Design, disability, and knowing the 'other'," in _Proc. CHI Conference on Human Factors in Computing Systems_, 2019, pp. 1-13.

\[15\] M. Kleppmann et al., "Local-first software: You own your data, in spite of the cloud," in _Proc. ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software_, 2019, pp. 154-178.

\[16\] \[📝 REFERENCE NOTE: Need to determine if FASTER project reports are publicly available for citation. If not, cite project website and grant agreement number as in \[8\]\]

\[17\] World Wide Web Consortium (W3C), "Web Content Accessibility Guidelines (WCAG) 2.1," W3C Recommendation, June 2018. \[Online\]. Available: https://www.w3.org/TR/WCAG21/

\[18\] Y. Tijerino, "AIngle DLT Comprehensive Performance Benchmark Report," Technical Report, Kwansei Gakuin University, July 2025. \[Online\]. Available: https://github.com/blockinnovation/aingle-dlt

\[19\] A. Iori, "The role of 'easy Japanese' in disaster information and social inclusion," _International Journal of Disaster Risk Reduction_, vol. 51, 101812, 2020.

## CITATION PLACEMENT NOTES

**\[Citations in Introduction\]**

*   \[1\] - Line discussing RLHF limitations
*   \[2\] - First mention of traditional MOAI concept
*   \[3\], \[4\], \[5\] - Okinawa longevity research discussion
*   \[6\] - Willcox social connectedness research

**\[Citations in Background\]**

*   \[7\], \[8\], \[9\] - Multi-agent systems for social support paragraph
*   \[10\] - HART research mention
*   \[11\] - Barrier-free to universal design transition
*   \[12\], \[13\] - Miyazaki's disability discourse research
*   \[14\] - Ableist assumptions in AI paragraph
*   \[15\] - Local-first software architecture
*   \[16\] - AIngle/FASTER project mention

**\[Citations in Methodology\]**

*   \[17\] - WCAG compliance mention
*   \[18\] - Performance metrics
*   \[19\] - Easy Japanese support

**Document Type:** Scientific Presentation Abstract (IEEE Format)  
**Word Count:** ~2,000 words (2 pages IEEE 2-column format)  
**Status:** Draft v2 - Ready for Collaborator Review  
**Submission Deadline:** October 15, 2025 to jbradshaw@ihmc.org

## COLLABORATOR ACTION ITEMS

**Dr. Kotoku (神徳和子-sensei):**

*   Provide email and academic profile link
*   Provide 8-digit KAKENHI grant number (JP\_\_\_\_\_\_\_\_)
*   Describe planned human subjects research under KAKENHI grant (Section IV.B)
*   Review Section III.D (trust calibration) for healthcare perspective
*   Review Section V.C (vulnerable populations) for nursing/care perspective
*   **Confirm author order is acceptable and meets ethical standards**
*   Final approval of paper

**Dr. Miyazaki-sensei:**

*   Provide email address
*   Review Section III.C (accessibility design) for accuracy
*   Verify citations \[12\], \[13\], \[19\] correctly represent your work
*   Suggest additional accessibility considerations if needed
*   Review Section V.B (accessibility discussion)
*   **Confirm author order is acceptable and meets ethical standards**
*   Final approval of paper

**Tijerino-sensei (Corresponding Author):**

*   Provide email address (ontologist@kwansei.ac.jp)
*   Verify all technical descriptions accurate
*   Confirm no patent-sensitive details disclosed
*   Check all references for accuracy and availability
*   Complete reference \[16\] once FASTER publication status confirmed
*   Create figures for final submission
*   Final formatting and submission

**NEXT STEPS:**

1.  Collaborators review and provide requested information
2.  Add 2-3 figures (MOAI structure diagram, system architecture, accessibility features)
3.  Format in IEEE 2-column template
4.  Final proofread and submit