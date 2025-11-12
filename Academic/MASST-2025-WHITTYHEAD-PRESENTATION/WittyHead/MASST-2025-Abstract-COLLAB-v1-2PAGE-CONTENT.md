# Digital MOAI: AI-Enhanced Traditional Mutual Aid Networks for Vulnerable Communities

**MASST 2025 Workshop, IEEE/WIC Int'l Conf. on Web Intelligence and Intelligent Agent Technology**
**November 14-15, 2025, London, UK**

## Authors

**Kazuko Kotoku**
Faculty of Medicine, Fukuoka University, Japan
Email: kotoku@fukuoka-u.ac.jp

**Yasushi Miyazaki**
Kwansei Gakuin University, Japan
Email: myzk@kwansei.ac.jp

**Yuri Tijerino**
Kwansei Gakuin University, Japan
Email: ontologist@kwansei.ac.jp

## Abstract

Multi-agent systems supporting vulnerable populations face critical challenges in safety, trust calibration, and privacy preservation. We present **Digital MOAI**, an AI-enhanced adaptation of traditional Okinawan mutual aid networks (模合, moai), demonstrating how proven centuries-old human social structures can be augmented by multi-agent artificial intelligence. Built on the privacy-preserving AIngle DLT platform, Digital MOAI addresses multi-agent safety through: (1) human-centric architectural design preserving traditional five-person support groups, (2) semantic context-awareness enabling cultural and accessibility considerations, (3) user-controlled trust calibration mechanisms, and (4) local-first data architecture ensuring privacy sovereignty.

**Keywords:** Multi-agent systems, human-agent teamwork, accessibility, privacy-preserving systems, community support, disability studies

## 1. Introduction

Current multi-agent architectures predominantly employ reinforcement learning from human feedback with limited consideration for cultural context, individual autonomy, or privacy preservation [1]. For vulnerable populations—individuals with disabilities, refugees, those experiencing housing instability—AI failures represent potential catastrophes. Existing systems prioritize efficiency over safety [2], employ centralized data models incompatible with privacy requirements, and lack mechanisms for accessibility accommodation. Centralized data storage creates existential risks for vulnerable populations: deportation, discrimination, or violence.

**MOAI** (模合) represents a centuries-old Okinawan social innovation: mutual aid collectives of exactly five individuals providing lifelong support [3]. The Okinawa Centenarian Study demonstrates MOAI's effectiveness through the world's highest concentration of centenarians with significantly lower rates of disease and cognitive decline [4, 5]. This work investigates how multi-agent AI systems can augment traditional mutual aid networks while preserving their essential human-centric properties, particularly when serving populations with diverse accessibility needs.

## 2. Technical Approach

### 2.1 Architecture and Design Principles

Digital MOAI adheres to four core principles: (1) **Human Primacy**—AI augments, never replaces, human relationships; (2) **Accessibility First**—universal design from initial conception; (3) **Privacy Sovereignty**—users maintain complete control over data; (4) **Cultural Context-Awareness**—system respects diverse norms.

The architecture preserves traditional five-person groups who collectively govern automation policies, preventing surveillance-scale data collection while maintaining manageable, accountable relationships. Four AI agent types support the group:

*Personal AI Assistants* (one per member): Learn individual preferences, accessibility needs, communication styles, and boundaries. Operate under user's complete control with configurable automation levels.

*Group Coordinator Agent*: Facilitates scheduling considering accessibility requirements (wheelchair-accessible venues, sign language interpretation), monitors for patterns indicating member distress with human verification, and supports—never replaces—collective decision-making.

*Accessibility Accommodation Agent*: Dynamically adapts interfaces based on user abilities (visual, auditory, motor, cognitive), provides alternative input/output modalities, ensures WCAG 2.1 AAA compliance [6], and integrates assistive technologies.

*Emergency Response Coordinator*: Provides immediate notification of group members during crises, privacy-preserving location sharing (strictly opt-in, time-limited), and automated connection to emergency services with human confirmation.

### 2.2 AIngle DLT Platform

The AIngle platform, developed for H2020 FASTER initiative [7], provides: privacy-first architecture with local data storage; real-time performance (0.16ms average latency, 7,142 TPS peak throughput); semantic knowledge layer [8] enabling cultural reasoning; accessibility support including "Easy Japanese" [9]; and offline operation.

### 2.3 Accessibility Design

Informed by Miyazaki's research on disability discourse [10, 11], Digital MOAI incorporates universal design across sensory modalities: **Visual** (screen reader optimization, high-contrast modes); **Auditory** (visual alerts, text alternatives); **Motor** (voice control, switch access); **Cognitive** (progressive disclosure, simplified language); **Cultural/Linguistic** ("Easy Japanese" for non-native speakers and persons with cognitive disabilities [9], originally designed for accessible information in natural disasters [12]). The system draws on research in AI applications for healthcare and nursing contexts [13].

### 2.4 Trust Calibration

Digital MOAI provides three user-configurable automation levels: **Level 1** (AI proposes actions with full transparency, waits for approval); **Level 2** (AI takes predefined actions, notifies user with configurable undo window); **Level 3** (AI acts independently for routine tasks, escalates anomalies). Groups collectively decide automation policies through consensus.

## 3. Validation and Research

Comprehensive benchmarking (2M+ operations) confirms real-time performance: 0.16ms average latency, minimal resource usage enabling deployment on low-cost devices.

**Planned Human Subjects Research:** Digital MOAI has the potential to help children in foster care avoid social isolation. Children in social welfare turn 18 and are forced to become independent and alone, unable to rely on their biological parents, after the program ends. We plan to test the hypothesis that Digital MOAI will alleviate their feelings of loneliness and isolation under JSPS KAKENHI Grant Number JP23K01882.

## 4. Scientific Contributions

Digital MOAI demonstrates an alternative safety paradigm: embedding AI within proven human social structures that provide natural guardrails, accountability, and context. Traditional MOAI's five-person limit prevents surveillance-scale data collection while AI augmentation enhances coordination and accessibility.

Integrating disability studies perspectives from inception reveals broader applicability. Features designed for accessibility benefit all users, particularly older adults, non-native speakers, and those in high-stress situations. Miyazaki's research demonstrates how linguistic accessibility serves multiple populations [11]; Digital MOAI extends this across all interaction modalities.

Local-first architecture addresses fundamental challenges: centralized data storage creates existential risks for vulnerable populations. By eliminating central data aggregation, Digital MOAI enables community support without systemic surveillance.

**Key contributions:** (1) Architectural pattern for AI supporting traditional social structures; (2) Accessibility framework integrating disability studies from inception; (3) Privacy-preserving platform with verified real-time performance; (4) Safety paradigm where human constraints provide natural guardrails; (5) Empirical framework for vulnerable populations.

## 5. Conclusion

Digital MOAI demonstrates a human-centric approach to multi-agent AI: augmenting centuries-proven social structures with privacy-preserving, accessibility-first technology. By prioritizing human relationships, cultural context, and user control, this work offers an architectural pattern for multi-agent systems serving vulnerable populations. Future work includes longitudinal studies with diverse MOAI groups and comprehensive accessibility evaluation.

## Acknowledgments

This research is supported by JSPS KAKENHI Grant Number JP23K01882 (PI: Kazuko Kotoku). AIngle DLT platform development was partially supported by European Union H2020 FASTER project (Grant Agreement No. 833507).

## References

[1] P. Christiano, J. Leike, T. Brown, M. Martic, S. Legg, and D. Amodei, "Deep reinforcement learning from human preferences," *Advances in Neural Information Processing Systems*, vol. 30, 2017.

[2] N. R. Jennings, P. Faratin, M. J. Johnson, T. J. Norman, P. O'Brien, and M. E. Wiegand, "Autonomous agents for business process management," *Applied Artificial Intelligence*, vol. 14, no. 2, pp. 145-189, 2000.

[3] D. Buettner, *The Blue Zones: Lessons for Living Longer from the People Who've Lived the Longest*. National Geographic Society, 2008.

[4] M. Suzuki, B. J. Willcox, and D. C. Willcox, "Implications from and for food cultures for cardiovascular disease: longevity," *Asia Pacific Journal of Clinical Nutrition*, vol. 10, no. 2, pp. 165-171, 2001.

[5] M. Poulain, G. M. Pes, C. Grasland, C. Carru, L. Ferrucci, G. Baggio, C. Franceschi, and L. Deiana, "Exceptional longevity in okinawa: Demographic trends since 1975," *Journal of Internal Medicine*, vol. 295, no. 1, pp. 145-154, 2024.

[6] World Wide Web Consortium (W3C), "Web content accessibility guidelines (WCAG) 2.1," W3C Recommendation, June 2018. [Online]. Available: https://www.w3.org/TR/WCAG21/

[7] "First responder advanced technologies for safe and efficient emergency response," EU H2020 FASTER Project, Grant Agreement No. 833507, 2019-2022. [Online]. Available: https://www.faster-project.eu

[8] Y. A. Tijerino, D. W. Embley, D. W. Lonsdale, Y. Ding, and G. Nagy, "Towards ontology generation from tables," *World Wide Web*, vol. 8, pp. 261-285, 2005.

[9] T. Matsuura, A. Yamashita, and N. Iwaoka, "Effectiveness of 'easy japanese' in disaster prevention radio broadcasts," *Journal of Language Education and Multilingualism*, vol. 29, no. 1, pp. 24-25, 2022, analysis of Great East Japan Earthquake disaster prevention broadcasts.

[10] Y. Miyazaki, "Constructing 'development': A historical discourse analysis of newspapers regarding the creation of terminology and public discourse on autism and hattatsu shogai in japan," Ph.D. dissertation, Kwansei Gakuin University, 2017. [Online]. Available: https://kwansei.repo.nii.ac.jp/records/26506

[11] Y. Miyazaki, "Yasashii nihongo (easy japanese) on community media: Focusing on radio broadcasting," *KGPS Review: Kwansei Gakuin Policy Studies Review*, vol. 8, pp. 1-14, March 2007, (in Japanese).

[12] K. Satoh and Sociolinguistics Research Lab, Hirosaki University, "Easy japanese (yasashii nihongo) for disaster information," Hirosaki University Faculty of Humanities, 1995, developed after 1995 Great Hanshin-Awaji Earthquake for foreign residents.

[13] K. Kotoku and Y. A. Tijerino, "Artificial intelligence (ai) in nursing practice: Current status and challenges," *Regional Caring (Chiiki Caring)*, vol. 23, no. 4, pp. 39-45, 2021, in Japanese.
