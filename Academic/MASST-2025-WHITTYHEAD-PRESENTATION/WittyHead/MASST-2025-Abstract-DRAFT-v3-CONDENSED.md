# Digital MOAI: AI-Enhanced Traditional Mutual Aid Networks for Vulnerable Communities

**Presentation Abstract for MASST 2025 Workshop**

**IEEE/WIC International Conference on Web Intelligence and Intelligent Agent Technology**
**November 14-15, 2025, London, United Kingdom**

---

## Authors

**Kazuko Kotoku** (神徳和子)
Department of Fundamental Nursing, School of Nursing
Faculty of Medicine, Fukuoka University, Japan
Email: [📝 COLLABORATOR: Please provide]
Principal Investigator, JSPS KAKENHI Grant Number JP[📝 COLLABORATOR: Please provide 8-digit number]

**Yasushi Miyazaki**
Intelligent Blockchain+ Innovation Research Center
Kwansei Gakuin University, Nishinomiya, Japan
Email: [📝 COLLABORATOR: Please provide]
Research Focus: Disability Studies, Accessibility, Language Policy

**Yuri Tijerino** (Corresponding Author)
Department of Applied Informatics
Intelligent Blockchain+ Innovation Research Center
Kwansei Gakuin University, Nishinomiya, Japan
Email: ontologist@kwansei.ac.jp

> **📝 NOTE TO COLLABORATORS:** Is this author order OK and compliant? I am fine with it, but what do you think? Dr. Kotoku as PI of the KAKENHI grant is listed first, Dr. Miyazaki (accessibility expertise) second, and myself (system architect/corresponding author) last. Please let me know if you prefer a different order or if this follows appropriate conventions and ethical standards for your fields.

**Presentation Mode:** Online (live or video-based demonstration available upon request)

---

## Abstract

Multi-agent systems supporting vulnerable populations face critical challenges in safety, trust calibration, and privacy preservation. We present **Digital MOAI**, an AI-enhanced adaptation of traditional Okinawan mutual aid networks (模合, moai), demonstrating how proven centuries-old human social structures can be augmented—not replaced—by multi-agent artificial intelligence. Built on the privacy-preserving AIngle DLT platform (developed for H2020 FASTER emergency response initiative), Digital MOAI addresses multi-agent safety through: (1) human-centric architectural design preserving traditional five-person support groups, (2) semantic context-awareness enabling cultural and accessibility considerations, (3) user-controlled trust calibration mechanisms, and (4) local-first data architecture ensuring privacy sovereignty. This work contributes an architectural pattern for human-AI hybrid collectives with empirical application to vulnerable populations including individuals with disabilities, housing insecurity, and healthcare needs.

**Keywords:** Multi-agent systems, human-agent teamwork, accessibility, privacy-preserving systems, community support, disability studies, traditional knowledge

---

## I. SIGNIFICANT RISKS AND FORECASTS

### A. Safety Risks in Current Multi-Agent Approaches

Current multi-agent architectures predominantly employ reinforcement learning from human feedback (RLHF) with limited consideration for cultural context, individual autonomy, or privacy preservation [1]. For vulnerable populations—individuals with disabilities, refugees, those experiencing housing instability—AI failures are not mere inconveniences but potential catastrophes: eviction, medical crises, or violation of sensitive personal data.

Existing multi-agent systems for social support prioritize efficiency over safety [2], employ centralized data models incompatible with privacy requirements, and lack mechanisms for cultural context-awareness or accessibility accommodation. Without addressing these challenges through ground-up safety design, multi-agent community support systems risk causing more harm than benefit.

### B. Trust Calibration and Observability Challenges

Multi-agent systems compound trust challenges through opacity, unpredictability, and lack of user control. Vulnerable populations require mutual observability and predictability to develop appropriately calibrated trust relationships [3], yet most implementations provide insufficient transparency about agent decision-making processes and limited mechanisms for human oversight.

### C. Privacy and Data Sovereignty Risks

Centralized data storage creates existential risks for vulnerable populations: deportation for undocumented immigrants, discrimination for LGBTQ+ individuals, violence for domestic abuse survivors. Traditional multi-agent architectures fail to address these fundamental privacy requirements.

---

## II. TECHNICAL APPROACH AND CONTRIBUTIONS

### A. Traditional MOAI as Foundational Architecture

**MOAI** (模合) represents a centuries-old Okinawan social innovation: mutual aid collectives of exactly five individuals providing lifelong financial, emotional, and practical support [4]. The Okinawa Centenarian Study (1975-present), the world's longest continuously running longevity research, demonstrates MOAI's effectiveness: Okinawa historically exhibited the world's highest concentration of centenarians, with significantly lower rates of cardiovascular disease, cancer, and cognitive decline [5, 6]. Research confirms that social connectedness—with MOAI as foundational structure—correlates strongly with longevity and well-being [7].

**Research Question:** How can multi-agent AI systems augment traditional mutual aid networks while preserving their essential human-centric properties, particularly when serving populations with diverse accessibility needs?

### B. Design Principles

Digital MOAI adheres to four core principles:

1. **Human Primacy:** AI augments, never replaces, human relationships and decision-making
2. **Accessibility First:** Universal design from initial conception, not retrofitted accommodation
3. **Privacy Sovereignty:** Users maintain complete control over personal data
4. **Cultural Context-Awareness:** System respects diverse norms, values, and communication styles

### C. Multi-Agent Architecture

**Traditional MOAI Structure (Preserved):** Groups consist of exactly five human members who meet regularly and collectively govern automation policies. The five-person limit prevents surveillance-scale data collection while maintaining manageable, accountable relationships.

**AI Agent Roles:**

*Personal AI Assistants* (one per member): Learn individual preferences, accessibility needs, communication styles, and boundaries. Operate under user's complete control with configurable automation levels (suggestion-only, automatic with notification, automatic with escalation).

*Group Coordinator Agent*: Facilitates scheduling considering accessibility requirements (wheelchair-accessible venues, sign language interpretation), monitors for patterns indicating member distress with human verification, and supports—never replaces—collective decision-making.

*Accessibility Accommodation Agent*: Dynamically adapts interfaces based on user abilities (visual, auditory, motor, cognitive), provides alternative input/output modalities, ensures WCAG 2.1 AAA compliance [8], and integrates assistive technologies.

*Emergency Response Coordinator*: Provides immediate notification of group members during crises, privacy-preserving location sharing (strictly opt-in, time-limited), and automated connection to emergency services with human confirmation.

### D. AIngle DLT Platform

The AIngle platform, originally developed for H2020 FASTER initiative addressing first responder emergency communication [9], provides:

- **Privacy-First Architecture:** Local data storage, peer-to-peer synchronization, zero-knowledge design
- **Real-Time Performance:** Verified 0.16ms average latency, 7,142 TPS peak throughput [10]
- **Semantic Knowledge Layer:** RDF/OWL ontologies enabling cultural and contextual reasoning
- **Accessibility Support:** Multiple input/output modalities, "Easy Japanese" (やさしい日本語) support [11]
- **Offline Operation:** Full functionality without internet connectivity (critical for underserved areas)

### E. Accessibility Design Integration

Informed by Miyazaki's research on disability discourse and barrier-free design [12, 13], Digital MOAI incorporates universal design elements across multiple sensory modalities with disability-specific accommodations:

- **Visual:** Screen reader optimization, high-contrast modes, voice-first interaction
- **Auditory:** Visual alerts, text-based communication alternatives, vibration notifications
- **Motor:** Voice control, switch access, simplified gesture interfaces
- **Cognitive:** Progressive disclosure, simplified language modes, visual supports
- **Cultural/Linguistic:** "Easy Japanese" for non-native speakers and persons with cognitive disabilities [11]

### F. Trust Calibration Framework

Digital MOAI provides three user-configurable automation levels:

**Level 1 - Suggestion Only** (default): AI proposes actions with full reasoning transparency, waits for explicit human approval. Suitable for new users and high-stakes decisions.

**Level 2 - Automatic with Notification**: AI takes predefined actions, immediately notifies user with configurable undo window (default: 24 hours). Suitable for routine tasks.

**Level 3 - Automatic with Escalation**: AI acts independently for well-defined routine tasks but immediately escalates anomalies, high-risk situations, or requests beyond defined scope. Suitable for experienced users with calibrated trust.

Groups collectively decide automation policies through consensus, ensuring alignment with shared values and individual comfort levels.

---

## III. IMPLEMENTATION STATUS AND VALIDATION

### A. Current Development State (October 2025)

**Platform (AIngle DLT) - Production Ready (85% complete):**
- Privacy-preserving distributed architecture, semantic knowledge layer (RDF/OWL), real-time performance verified [10], security and encryption infrastructure, API gateway and monitoring systems

**Application (Digital MOAI) - In Progress (40% complete):**
- User interface with accessibility features, personal AI assistant integration, group coordination functionality (in progress); offline operation capabilities, advanced accessibility features, field studies with actual MOAI groups (planned)

### B. Technical Validation

Comprehensive benchmarking (2M+ operations) confirms real-time performance suitable for emergency response and accessibility requirements: 0.16ms latency, 100% reliability, minimal resource usage enabling deployment on low-cost devices [10].

**Human Subjects Research:** [📝 COLLABORATOR NOTE - Dr. Kotoku: Please describe planned studies under KAKENHI grant]

---

## IV. DISCUSSION AND SCIENTIFIC CONTRIBUTIONS

### A. Alternative Safety Paradigm

Digital MOAI demonstrates an alternative paradigm for multi-agent safety: rather than attempting to make AI "safe" through training alone, embed AI within proven human social structures that provide natural guardrails, accountability, and context. Traditional MOAI's five-person limit prevents surveillance-scale data collection while AI augmentation preserves this scale while enhancing coordination and accessibility.

### B. Accessibility as Design Principle

Integrating disability studies perspectives from project inception reveals broader applicability. Features designed for accessibility (voice control, simplified language, flexible timing) benefit all users, particularly older adults, non-native speakers, and those in high-stress situations. Miyazaki's research on "Easy Japanese" demonstrates how linguistic accessibility serves multiple populations [13]; Digital MOAI extends this principle across all interaction modalities.

### C. Privacy and Data Sovereignty

Local-first architecture addresses a fundamental challenge for vulnerable populations: centralized data storage creates existential risks. By eliminating central data aggregation, Digital MOAI enables community support without systemic surveillance.

### D. Key Scientific Contributions

1. **Architectural Pattern:** Design principles for AI supporting traditional social structures
2. **Accessibility Framework:** Integration of disability studies perspectives into multi-agent design from inception
3. **Privacy-Preserving Platform:** Local-first architecture enabling data sovereignty with verified real-time performance
4. **Safety Paradigm:** "Safety by social structure" where proven human constraints provide natural guardrails
5. **Empirical Framework:** Application to vulnerable populations with concrete accessibility and privacy requirements

---

## V. CONCLUSION

Digital MOAI demonstrates a human-centric approach to multi-agent AI: augmenting centuries-proven social structures (traditional Okinawan MOAI mutual aid networks) with privacy-preserving, accessibility-first technology. By prioritizing human relationships, cultural context, and user control over AI autonomy, this work offers an architectural pattern for multi-agent systems serving vulnerable populations. Future work includes longitudinal studies with diverse MOAI groups and comprehensive accessibility evaluation.

**Workshop Demonstration:** Live or video-based demonstration of Digital MOAI interface and accessibility features available upon request during presentation.

---

## ACKNOWLEDGMENTS

This research is supported by JSPS KAKENHI Grant Number JP[📝 Dr. Kotoku: Please provide]. AIngle DLT platform development was partially supported by European Union H2020 FASTER project (Grant Agreement No. 833507). We thank the Okinawan community for inspiration from traditional MOAI practices.

---

## REFERENCES

[1] P. Christiano et al., "Deep reinforcement learning from human feedback," *Advances in Neural Information Processing Systems*, vol. 30, 2017.

[2] N. R. Jennings et al., "Autonomous agents for business process management," *Applied Artificial Intelligence*, vol. 14, no. 2, pp. 145-189, 2000.

[3] J. M. Bradshaw et al., "Human-Agent-Robot Teamwork," *IEEE Intelligent Systems*, vol. 27, no. 2, pp. 8-13, 2012.

[4] D. Buettner, *The Blue Zones: Lessons for Living Longer from the People Who've Lived the Longest*, National Geographic Society, 2008.

[5] M. Suzuki, B. J. Willcox, and D. C. Willcox, "Implications from and for food cultures for cardiovascular disease: longevity," *Asia Pacific Journal of Clinical Nutrition*, vol. 10, no. 2, pp. 165-171, 2001.

[6] M. Poulain et al., "Exceptional longevity in Okinawa: Demographic trends since 1975," *Journal of Internal Medicine*, vol. 295, no. 1, pp. 145-154, 2024. DOI: 10.1111/joim.13764

[7] B. J. Willcox and D. C. Willcox, "Okinawan Centenarian Study: Investigating Healthy Aging among the World's Longest-Lived People," in *Routledge Handbook of Global Public Health*, 2020.

[8] World Wide Web Consortium (W3C), "Web Content Accessibility Guidelines (WCAG) 2.1," W3C Recommendation, June 2018. [Online]. Available: https://www.w3.org/TR/WCAG21/

[9] EU H2020 FASTER Project, "First Responder Advanced Technologies for Safe and Efficient Emergency Response," Grant Agreement No. 833507, 2019-2022. [Online]. Available: https://www.faster-project.eu

[10] Y. Tijerino, "AIngle DLT Comprehensive Performance Benchmark Report," Technical Report, Kwansei Gakuin University, July 2025. [Online]. Available: https://github.com/blockinnovation/aingle-dlt

[11] A. Iori, "The role of 'easy Japanese' in disaster information and social inclusion," *International Journal of Disaster Risk Reduction*, vol. 51, 101812, 2020.

[12] Y. Miyazaki, "Review of 'More Than Medals: A History of the Paralympics and Disability Sports in Postwar Japan' by Dennis J. Frost," *H-Disability*, H-Net Reviews, March 2022. [Online]. Available: https://networks.h-net.org/node/4189/reviews/9854904/

[13] Y. Miyazaki, "Yasashii Nihongo (Easy Japanese) on community media: Focusing on radio broadcasting," *Kwansei Gakuin Policy Studies Review*, vol. 24, pp. 71-88, 2017. (in Japanese)

---

**Document Type:** Scientific Presentation Abstract (Condensed Version)
**Word Count:** ~1,600 words (target for 2-page format)
**Status:** Draft v3 - Condensed for 2-page limit
**Submission Deadline:** October 15, 2025 to jbradshaw@ihmc.org
