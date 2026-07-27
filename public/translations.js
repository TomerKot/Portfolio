const translations = {
  en: {
    // Navigation
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-experience": "Experience",
    "nav-projects": "Projects",
    "nav-cv-hub": "Resume Hub",
    "nav-contact": "Contact",

    // Hero Section
    "hero-greeting": "Hi, I am",
    "hero-name": "Vadym Vatskovskyi",
    "hero-title": "Senior SOC Analyst | System Administrator | Cybersecurity Specialist",
    "hero-intro": "Cybersecurity & IT Specialist currently based in Kassel, Germany. Extensive experience in Security Operations Centers (SOC) - from analyst to senior specialist and acting team leader. Focused on network monitoring, threat detection, virtualization, and automation. Residence status: §24 AufenthG (unrestricted work permit).",
    "hero-cta-cv": "Go to Resume Hub",
    "hero-cta-contact": "Get in Touch",

    // About/Status
    "status-badge": "Available for new opportunities • §24 AufenthG",
    "status-location": "Kassel, Germany",

    // Skills Section
    "skills-heading": "Skills & Tech Stack",
    "skills-subheading": "Core technical areas and toolsets. Built on defense-in-depth principles.",
    "skill-cat-security": "Security Operations",
    "skill-cat-infrastructure": "Systems & Virtualization",
    "skill-cat-automation": "Automation & Programming",
    "skill-cat-analysis": "Network Analysis & Tools",

    // Experience Section
    "exp-heading": "Professional Experience",
    "exp-subheading": "NOC/SOC operations, system administration, and infrastructure monitoring.",
    
    "exp-role1-title": "System Administrator",
    "exp-role1-company": "IT Company (NDA) - Kyiv, Ukraine",
    "exp-role1-date": "11/2025 – 05/2026",
    "exp-role1-bullet1": "Administrated and maintained server infrastructure (Windows/Linux) and local networks.",
    "exp-role1-bullet2": "Managed virtualization and remote tools (Proxmox, VMware Horizon, vSphere, VMware).",
    "exp-role1-bullet3": "Configured VPNs, firewalls, VLANs, routing, switching, and group policies (GPOs). Managed backup, recovery, and hardware maintenance.",

    "exp-role2-title": "Acting Team Lead SOC / Senior SOC Analyst",
    "exp-role2-company": "JSC 'Ukrtelecom' - Kyiv, Ukraine",
    "exp-role2-date": "07/2023 – 11/2025",
    "exp-role2-bullet1": "Acting Monitoring Team Lead: Managed a shift of 6 SOC/NOC analysts. Maintained 96% SLA compliance for critical incidents (P1/P2) on national infrastructure.",
    "exp-role2-bullet2": "Senior SOC Analyst: Developed and implemented 12+ custom SIEM detection use cases (MS Sentinel, Arcsight), reducing false positives by 28%.",
    "exp-role2-bullet3": "SOC Analyst: Monitored 80+ daily alerts. Completely refactored 15 playbooks, reducing Mean Time to Respond (MTTR) by 56% (7 minutes).",

    // Education Section
    "edu-heading": "Education",
    "edu-degree": "Master's Degree in Cybersecurity",
    "edu-school": "State University of Trade and Economics",
    "edu-date": "09/2020 – 12/2025",
    "edu-thesis": "Thesis: 'Cyber Threat Detection System in Commercial Enterprise Infrastructure' (Focus on OSINT, network traffic analysis, and penetration testing).",

    // Certifications Section
    "cert-heading": "Certifications & Licenses",
    "cert-item1": "Cisco Cyber Threat Management (April 2026)",
    "cert-item2": "Cisco Certified Network Associate Security (CCNA Security)",
    "cert-item3": "ISMS Organization ISO/IEC 27001 (ESKA / JSC 'Ukrtelecom')",
    "cert-item4": "Cybersecurity Essentials",

    // Languages Block
    "lang-heading": "Languages",
    "lang-ua": "Ukrainian",
    "lang-ua-level": "Native",
    "lang-en": "English",
    "lang-de": "German",
    "lang-de-level": "A2 / B2 (In training)",

    // Projects Section
    "projects-heading": "Featured Projects",
    "projects-subheading": "Security automation scripts and academic work.",
    
    "proj-bot-title": "Python Telegram Bots",
    "proj-bot-desc": "Developed custom Telegram bots using aiogram and Telethon for network infrastructure alerts, system status logging, and channel management automation.",
    "proj-bot-tags": "Python • aiogram • Telethon • APIs",

    "proj-thesis-title": "Threat Detection Accuracy Assessment",
    "proj-thesis-desc": "Master's thesis focusing on assessing and optimizing the threat detection accuracy of enterprise SIEM and IDS systems, including metrics for reducing false positives.",
    "proj-thesis-tags": "Cybersecurity • Threat Analysis • SIEM • Enterprise Security",

    // Resume / CV Hub
    "cv-heading": "Resume / CV Hub",
    "cv-subheading": "Download my professional profile and curriculum vitae in your preferred language.",
    "cv-card-title": "Ready for Review",
    "cv-card-desc": "Get a detailed overview of my experience, technical stack, and education. Select a version to download the PDF document.",
    "cv-btn-en": "Download CV (English)",
    "cv-btn-uk": "Download CV (Ukrainian)",
    "cv-btn-de": "Download CV (German)",

    // Contact Section
    "contact-heading": "Contact Me",
    "contact-subheading": "Interested in working together or have any questions? Send me a message.",
    "contact-name-label": "Full Name",
    "contact-name-placeholder": "John Doe",
    "contact-email-label": "Email Address",
    "contact-email-placeholder": "john@example.com",
    "contact-msg-label": "Message",
    "contact-msg-placeholder": "Write your message here...",
    "contact-submit": "Send Message",
    "contact-success": "Thank you! Your message has been sent successfully.",
    "contact-error": "Something went wrong. Please check your inputs.",

    // Footer
    "footer-copyright": "© 2026 Vadym Vatskovskyi. All rights reserved.",
    "footer-disclaimer": "Designed with a modern, high-contrast dark theme."
  },
  uk: {
    // Navigation
    "nav-about": "Про мене",
    "nav-skills": "Навички",
    "nav-experience": "Досвід",
    "nav-projects": "Проєкти",
    "nav-cv-hub": "Центр резюме",
    "nav-contact": "Контакти",

    // Hero Section
    "hero-greeting": "Привіт, я",
    "hero-name": "Вадим Вацьковський",
    "hero-title": "Старший SOC-аналітик | Системний адміністратор | Спеціаліст із кібербезпеки",
    "hero-intro": "ІТ-спеціаліст та фахівець із кібербезпеки, наразі проживаю в Касселі, Німеччина. Великий досвід роботи в центрах моніторингу безпеки (SOC) - від аналітика до старшого спеціаліста та виконуючого обов'язки тімліда. Спеціалізуюся на моніторингу мереж, виявленні загроз, віртуалізації та автоматизації. Дозвіл на проживання: §24 AufenthG (дозвіл на роботу без обмежень).",
    "hero-cta-cv": "Перейти до резюме",
    "hero-cta-contact": "Зв'язатися зі мною",

    // About/Status
    "status-badge": "Відкритий до пропозицій • §24 AufenthG",
    "status-location": "Кассель, Німеччина",

    // Skills Section
    "skills-heading": "Навички та стек технологій",
    "skills-subheading": "Основні технічні напрямки та інструменти. Побудовано на принципах ешелонованої оборони.",
    "skill-cat-security": "Операції з безпеки",
    "skill-cat-infrastructure": "Системи та віртуалізація",
    "skill-cat-automation": "Автоматизація та розробка",
    "skill-cat-analysis": "Мережевий аналіз та інструменти",

    // Experience Section
    "exp-heading": "Професійний досвід",
    "exp-subheading": "NOC/SOC операції, системне адміністрування та моніторинг інфраструктури.",
    
    "exp-role1-title": "Системний адміністратор",
    "exp-role1-company": "ІТ-компанія (NDA) - Київ, Україна",
    "exp-role1-date": "11/2025 – 05/2026",
    "exp-role1-bullet1": "Адміністрування та технічне обслуговування серверної інфраструктури (Windows/Linux) та локальних мереж.",
    "exp-role1-bullet2": "Керування інструментами віртуалізації та віддаленого доступу (Proxmox, VMware Horizon, vSphere, VMware).",
    "exp-role1-bullet3": "Налаштування VPN, брандмауерів, VLAN, маршрутизації, комутації та групових політик (GPO). Резервне копіювання, відновлення та обслуговування обладнання.",

    "exp-role2-title": "Т.в.о. керівника команди SOC / Старший аналітик SOC",
    "exp-role2-company": "АТ 'Укртелеком' - Київ, Україна",
    "exp-role2-date": "07/2023 – 11/2025",
    "exp-role2-bullet1": "Т.в.о. керівника групи моніторингу: Керував зміною з 6 аналітиків SOC та NOC. Забезпечив дотримання SLA на рівні 96% при обробці критичних інцидентів (P1/P2) в інфраструктурі національного масштабу.",
    "exp-role2-bullet2": "Старший спеціаліст SOC: Розробив та впровадив понад 12 нових сценаріїв виявлення загроз (use cases) у SIEM. Завдяки оптимізації процесів тріажу зменшив кількість хибних спрацьовувань (false positives) на 28%.",
    "exp-role2-bullet3": "Спеціаліст SOC: Щоденно аналізував понад 80 сповіщень безпеки (alerts). Повністю переписав і стандартизував 15 інструкцій (playbooks), що дозволило скоротити середній час реакції на інциденти (MTTR) на 56% (до 7 хвилин).",

    // Education Section
    "edu-heading": "Освіта",
    "edu-degree": "Магістр з кібербезпеки",
    "edu-school": "Державний торговельно-економічний університет",
    "edu-date": "09/2020 – 12/2025",
    "edu-thesis": "Спеціалізація: 'Система виявлення кіберзагроз інформаційної інфраструктури торговельного підприємства' (Ключові напрямки: OSINT, аналіз мережевого трафіку, тестування на проникнення).",

    // Certifications Section
    "cert-heading": "Сертифікати та ліцензії",
    "cert-item1": "Cisco Cyber Threat Management (Квітень 2026)",
    "cert-item2": "Cisco Certified Network Associate Security (CCNA Security)",
    "cert-item3": "Організація СУІБ за стандартом ISO/IEC 27001 (ESKA / АТ 'Укртелеком')",
    "cert-item4": "Cybersecurity Essentials",

    // Languages Block
    "lang-heading": "Мови",
    "lang-ua": "Українська",
    "lang-ua-level": "Рідна",
    "lang-en": "Англійська",
    "lang-de": "Німецька",
    "lang-de-level": "A2 / B2 (Вивчається)",

    // Projects Section
    "projects-heading": "Обрані проєкти",
    "projects-subheading": "Скрипти автоматизації безпеки та академічна робота.",
    
    "proj-bot-title": "Python Telegram боти",
    "proj-bot-desc": "Розробка спеціалізованих Telegram-ботів на aiogram та Telethon для сповіщення про стан мережевої інфраструктури, логування статусів систем та автоматизації управління каналами.",
    "proj-bot-tags": "Python • aiogram • Telethon • APIs",

    "proj-thesis-title": "Оцінка точності систем виявлення загроз",
    "proj-thesis-desc": "Дипломна магістерська робота, присвячена оцінці та оптимізації точності виявлення загроз у корпоративних системах SIEM та IDS, включаючи метрики для мінімізації хибнопозитивних спрацьовувань.",
    "proj-thesis-tags": "Кібербезпека • Аналiз загроз • SIEM • Корпоративна безпека",

    // Resume / CV Hub
    "cv-heading": "Центр резюме",
    "cv-subheading": "Завантажте моє професійне портфоліо та резюме зручною для вас мовою.",
    "cv-card-title": "Готово до перегляду",
    "cv-card-desc": "Отримайте детальний огляд мого досвіду, технологічного стеку та освіти. Виберіть версію для завантаження PDF-документа.",
    "cv-btn-en": "Завантажити резюме (Англійська)",
    "cv-btn-uk": "Завантажити резюме (Українська)",
    "cv-btn-de": "Завантажити резюме (Німецька)",

    // Contact Section
    "contact-heading": "Написати мені",
    "contact-subheading": "Цікавить співпраця чи виникли запитання? Надішліть мені повідомлення.",
    "contact-name-label": "Повне ім'я",
    "contact-name-placeholder": "Іван Іванов",
    "contact-email-label": "Електронна адреса",
    "contact-email-placeholder": "ivan@example.com",
    "contact-msg-label": "Повідомлення",
    "contact-msg-placeholder": "Напишіть ваше повідомлення тут...",
    "contact-submit": "Надіслати",
    "contact-success": "Дякую! Ваше повідомлення успішно надіслано.",
    "contact-error": "Щось пішло не так. Перевірте введені дані.",

    // Footer
    "footer-copyright": "© 2026 Вадим Вацьковський. Усі права захищені.",
    "footer-disclaimer": "Розроблено із сучасним контрастним темним дизайном."
  },
  de: {
    // Navigation
    "nav-about": "Über mich",
    "nav-skills": "Fähigkeiten",
    "nav-experience": "Erfahrung",
    "nav-projects": "Projekte",
    "nav-cv-hub": "Lebenslauf-Hub",
    "nav-contact": "Kontakt",

    // Hero Section
    "hero-greeting": "Hallo, ich bin",
    "hero-name": "Vadym Vatskovskyi",
    "hero-title": "Senior SOC Analyst | Systemadministrator | Cybersicherheitsexperte",
    "hero-intro": "IT- und Cybersecurity-Spezialist ansässig in Kassel, Deutschland. Umfassende Erfahrung im Security Operations Center (SOC) – vom Analysten bis zum Senior-Spezialisten und kommissarischen Teamleiter. Schwerpunkte in Netzwerküberwachung, Vorfallsmanagement, Virtualisierung und Skripting. Aufenthaltsstatus: §24 AufenthG (uneingeschränkte Arbeitserlaubnis).",
    "hero-cta-cv": "Zum Lebenslauf-Hub",
    "hero-cta-contact": "Kontakt aufnehmen",

    // About/Status
    "status-badge": "Verfügbar für neue Möglichkeiten • §24 AufenthG",
    "status-location": "Kassel, Deutschland",

    // Skills Section
    "skills-heading": "Skills & Tech Stack",
    "skills-subheading": "Technische Kernbereiche und Tools. Aufgebaut auf Defense-in-Depth-Prinzipien.",
    "skill-cat-security": "Security Operations",
    "skill-cat-infrastructure": "Systeme & Virtualisierung",
    "skill-cat-automation": "Automatisierung & Programmierung",
    "skill-cat-analysis": "Netzwerkanalyse & Tools",

    // Experience Section
    "exp-heading": "Berufliche Erfahrung",
    "exp-subheading": "NOC/SOC-Operations, Systemadministration und Infrastrukturüberwachung.",
    
    "exp-role1-title": "Systemadministrator",
    "exp-role1-company": "IT-Unternehmen (NDA) - Kiew, Ukraine",
    "exp-role1-date": "11/2025 – 05/2026",
    "exp-role1-bullet1": "Administration und Wartung der Serverinfrastruktur (Windows/Linux) und lokaler Netzwerke.",
    "exp-role1-bullet2": "Verwaltung von Virtualisierungstools (Proxmox, VMware Horizon, vSphere, VMware).",
    "exp-role1-bullet3": "Sicherstellung des sicheren Fernzugriffs (VPN, Firewall-Konfiguration), VLAN, Routing & Switching sowie Gruppenrichtlinien (GPOs). Backup, Wiederherstellung und Hardware-Wartung.",

    "exp-role2-title": "Kommissarischer Teamleiter SOC / Senior SOC Analyst",
    "exp-role2-company": "JSC 'Ukrtelecom' - Kiew, Ukraine",
    "exp-role2-date": "07/2023 – 11/2025",
    "exp-role2-bullet1": "Kommissarischer Teamleiter: Leitung einer Schicht von 6 SOC- und NOC-Analysten. Sicherstellung einer SLA-Konformität von 96 % bei kritischen Vorfällen (P1/P2) in einer nationalen Infrastruktur.",
    "exp-role2-bullet2": "Senior SOC Analyst: Entwicklung und Implementierung von 12+ neuen Bedrohungserkennungsszenarien (Use Cases) im SIEM (MS Sentinel, Arcsight), Reduzierung von False Positives um 28 %.",
    "exp-role2-bullet3": "SOC Analyst: Analyse von über 80 Sicherheitswarnungen täglich. Komplette Überarbeitung von 15 Playbooks, was die Reaktionszeit (MTTR) um 56 % (auf 7 Minuten) verkürzte.",

    // Education Section
    "edu-heading": "Ausbildung",
    "edu-degree": "Masterstudium in Cybersicherheit",
    "edu-school": "Staatliche Universität für Handel und Wirtschaft",
    "edu-date": "09/2020 – 12/2025",
    "edu-thesis": "Thema der Masterarbeit: 'System zur Erkennung von Cyberbedrohungen in der Informationsinfrastruktur von Handelsunternehmen' (Schwerpunkte: OSINT, Netzwerkverkehrsanalyse, Penetrationstests).",

    // Certifications Section
    "cert-heading": "Zertifizierungen & Lizenzen",
    "cert-item1": "Cisco Cyber Threat Management (April 2026)",
    "cert-item2": "Cisco Certified Network Associate Security (CCNA Security)",
    "cert-item3": "ISMS-Organisation nach ISO/IEC 27001 (ESKA / JSC 'Ukrtelecom')",
    "cert-item4": "Cybersecurity Essentials",

    // Languages Block
    "lang-heading": "Sprachen",
    "lang-ua": "Ukrainisch",
    "lang-ua-level": "Muttersprache",
    "lang-en": "Englisch",
    "lang-de": "Deutsch",
    "lang-de-level": "A2 / B2 (In Ausbildung)",

    // Projects Section
    "projects-heading": "Ausgewählte Projekte",
    "projects-subheading": "Sicherheitsautomatisierung und akademische Arbeiten.",
    
    "proj-bot-title": "Python Telegram Bots",
    "proj-bot-desc": "Entwicklung maßgeschneiderter Telegram-Bots mit aiogram und Telethon für Alarme der Netzwerkinfrastruktur, Systemstatusprotokollierung und automatisierte Kanalverwaltung.",
    "proj-bot-tags": "Python • aiogram • Telethon • APIs",

    "proj-thesis-title": "Genauigkeitsbewertung von Bedrohungserkennungssystemen",
    "proj-thesis-desc": "Masterarbeit über die Bewertung und Optimierung der Erkennungsgenauigkeit von SIEM- und IDS-Systemen in Unternehmen, einschließlich Methoden zur Reduzierung von Fehlalarmen (False Positives).",
    "proj-thesis-tags": "Cybersecurity • Bedrohungsanalyse • SIEM • Unternehmenssicherheit",

    // Resume / CV Hub
    "cv-heading": "Lebenslauf-Hub",
    "cv-subheading": "Laden Sie mein Profil und meinen Lebenslauf in Ihrer bevorzugten Sprache herunter.",
    "cv-card-title": "Bereit zur Prüfung",
    "cv-card-desc": "Erhalten Sie einen detaillierten Überblick über meine Erfahrungen, meinen Tech Stack und meine Ausbildung. Wählen Sie eine Version zum Herunterladen des PDF-Dokuments aus.",
    "cv-btn-en": "Lebenslauf herunterladen (Englisch)",
    "cv-btn-uk": "Lebenslauf herunterladen (Ukrainisch)",
    "cv-btn-de": "Lebenslauf herunterladen (Deutsch)",

    // Contact Section
    "contact-heading": "Kontaktieren Sie mich",
    "contact-subheading": "Interesse an einer Zusammenarbeit oder Fragen? Senden Sie mir eine Nachricht.",
    "contact-name-label": "Vollständiger Name",
    "contact-name-placeholder": "Max Mustermann",
    "contact-email-label": "E-Mail-Adresse",
    "contact-email-placeholder": "max@example.com",
    "contact-msg-label": "Nachricht",
    "contact-msg-placeholder": "Schreiben Sie Ihre Nachricht hier...",
    "contact-submit": "Nachricht senden",
    "contact-success": "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    "contact-error": "Etwas ist schiefgelaufen. Bitte überprüfen Sie Ihre Eingaben.",

    // Footer
    "footer-copyright": "© 2026 Vadym Vatskovskyi. All rights reserved.",
    "footer-disclaimer": "Entworfen in einem modernen, kontrastreichen Dark-Theme."
  }
};
