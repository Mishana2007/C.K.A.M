document.addEventListener('DOMContentLoaded', () => {
    // Language translations
    const translations = {
        en: {
            // Core translations
            announcement: '🔥 New: Enhanced Blockchain Analysis Features Available!',
            products: 'Products',
            pricing: 'Pricing',
            analysis: 'Analysis',
            blog: 'Blog',
            about: 'About Us',
            support: 'Support',
            wallet: 'Connect Wallet',
            title: 'The Best AML Service',
            titleHighlight: 'for Your Business',
            subtitle: 'AML / KYC Automation for Compliance with Regulations',
            
            // Features
            business: 'For Business',
            personal: 'For Personal Use',
            automation: 'Automation',
            reporting: 'Reporting',
            savings: 'Cost Savings',
            
            // Partners section
            "partners-title": "The major players of the crypto market trust us!",
            "partner-spherule": "Spherule",
            "partner-lightbox": "Lightbox",
            "partner-featherdev": "FeatherDev",

            // Products section
            "products-subtitle": "Trusted by major players in the crypto market!",
            "kyc-title": "KYC Check",
            "kyc-description": "Conduct secure and fast client verification using our automated KYC system.",
            "kyc-feature1-title": "Increase trust in your business",
            "kyc-feature1-text": "Reliable verification strengthens user trust.",
            "kyc-feature2-title": "24/7 customer support",
            "kyc-feature2-text": "Our specialists are always ready to assist your users.",
            
            // AML Check section
            "aml-title": "AML Check",
            "aml-description": "Minimize risks with our automated AML check.",
            "aml-feature1-title": "Transaction source verification",
            "aml-feature1-text": "Confirm the legitimacy of fund senders.",
            "aml-feature2-title": "Verification of end recipients",
            "aml-feature2-text": "Verify fund recipients to mitigate risks.",
            
            // Pricing section
            "pricing-title": "Service Prices",
            "pricing-subtitle": "A wide range for any business",
            "most-popular": "Most Popular",
            "select-plan": "Select Plan",
            "start-trial": "Start Free Trial",
            "get-started": "Get Started",
            "annual-title": "AML 1 Year",
            "annual-description": "A long-term solution for large organizations",
            "annual-period": "for 12 months",
            "trial-title": "AML Trial Period",
            "trial-description": "Try our service for free",
            "trial-period": "1 free check",
            
            // Start checking section
            "start-checking-title": "Start checking payments today",
            "start-checking-desc": "Apply for connection and start verifying cryptocurrency now!",
            "check-wallet": "Check Wallet",
            "eth-transaction": "ETH Transaction",
            "btc-transaction": "Bitcoin Transaction",
            "trx-transaction": "TRX Transaction",

            // Company section
            "company-title": "AML Secure",
            "team-desc": "Powering the future of secure crypto transactions",
            "monitor-title": "Real-time Monitoring",
            "monitor-desc": "Advanced blockchain analytics with instant alerts",
            "reports-title": "Smart Reporting",
            "reports-desc": "Automated compliance documentation",
            "verify-title": "Identity Check",
            "verify-desc": "Secure verification in minutes",
            "risk-title": "Predictive Risk Engine",
            "risk-desc": "AI-powered threat detection and prevention",
            "screening-title": "Global Screening",
            "screening-desc": "Real-time sanctions and PEP screening"
        },
        ru: {
            // Core translations
            announcement: '🔥 Новинка: Доступны улучшенные функции анализа блокчейна!',
            products: 'Продукты',
            pricing: 'Цены',
            analysis: 'Анализ',
            blog: 'Блог',
            about: 'О Нас',
            support: 'Поддержка',
            wallet: 'Подключить Кошелек',
            title: 'Лучший AML Сервис',
            titleHighlight: 'для Вашего Бизнеса',
            subtitle: 'Автоматизация AML / KYC для соответствия нормам',
            
            // Features
            business: 'Для Бизнеса',
            personal: 'Для Частных Лиц',
            automation: 'Автоматизация',
            reporting: 'Отчетность',
            savings: 'Экономия',
            
            // Partners section
            "partners-title": "Нам доверяют крупные игроки крипторынка!",
            "partner-spherule": "Сферула",
            "partner-lightbox": "Лайтбокс",
            "partner-featherdev": "ФезерДев",

            // Products section
            "products-subtitle": "Нам доверяют крупные игроки крипторынка!",
            "kyc-title": "KYC Проверка",
            "kyc-description": "Проводите безопасную и быструю верификацию клиентов.",
            "kyc-feature1-title": "Повышайте доверие к бизнесу",
            "kyc-feature1-text": "Надежная верификация укрепляет доверие пользователей.",
            "kyc-feature2-title": "Поддержка 24/7",
            "kyc-feature2-text": "Наши специалисты всегда готовы помочь.",
            
            // Pricing section
            "pricing-title": "Тарифы",
            "pricing-subtitle": "Широкий выбор для любого бизнеса",
            "most-popular": "Популярный",
            "select-plan": "Выбрать план",
            "start-trial": "Начать бесплатно",
            "get-started": "Начать",
            "annual-title": "AML на 1 год",
            "annual-description": "Долгосрочное решение для крупных организаций",
            "annual-period": "на 12 месяцев",
            "trial-title": "Пробный период AML",
            "trial-description": "Попробуйте наш сервис бесплатно",
            "trial-period": "1 бесплатная проверка",
            
            // Start checking section
            "start-checking-title": "Начните проверять платежи сегодня",
            "start-checking-desc": "Подключайтесь и начните проверку криптовалюты прямо сейчас!",
            "check-wallet": "Проверить кошелек",
            "eth-transaction": "ETH Транзакция",
            "btc-transaction": "Bitcoin Транзакция",
            "trx-transaction": "TRX Транзакция",

            // Company section
            "company-title": "AML Secure",
            "team-desc": "Создаем будущее безопасных криптотранзакций",
            "monitor-title": "Мониторинг в реальном времени",
            "monitor-desc": "Продвинутая аналитика блокчейна с мгновенными уведомлениями",
            "reports-title": "Умная отчетность",
            "reports-desc": "Автоматизированная документация по комплаенсу",
            "verify-title": "Проверка личности",
            "verify-desc": "Безопасная верификация за считанные минуты",
            "risk-title": "Механизм прогнозирования рисков",
            "risk-desc": "ИИ для обнаружения и предотвращения угроз",
            "screening-title": "Глобальный скрининг",
            "screening-desc": "Проверка по санкционным спискам и PEP в реальном времени"
        }
    };

    // Language switching function
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'title' && element.querySelector('.highlight')) {
                    const highlight = element.querySelector('.highlight');
                    element.childNodes[0].textContent = translations[lang].title;
                    highlight.textContent = translations[lang].titleHighlight;
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Language selector functionality
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    const currentLang = document.querySelector('.current-lang');
    const languageOptions = document.querySelectorAll('.language-option');

    function toggleLanguageMenu(show) {
        languageToggle.setAttribute('aria-expanded', show);
        languageMenu.setAttribute('aria-hidden', !show);
        languageMenu.style.display = show ? 'block' : 'none';
        
        if (show) {
            languageOptions[0].focus();
        }
    }

    // Event listeners for language switching
    languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = languageToggle.getAttribute('aria-expanded') === 'true';
        toggleLanguageMenu(!isExpanded);
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            currentLang.textContent = lang.toUpperCase();
            toggleLanguageMenu(false);
        });
    });

    // Close language menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageMenu.contains(e.target) && !languageToggle.contains(e.target)) {
            toggleLanguageMenu(false);
        }
    });

    // Wallet button functionality
    const walletBtns = document.querySelectorAll('.wallet-btn, .header-wallet-btn, .check-wallet-btn');
    
    walletBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            btn.classList.add('loading');
            const originalText = btn.querySelector('span').textContent;
            btn.querySelector('span').textContent = translations[document.documentElement.lang].wallet;

            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                btn.classList.remove('loading');
                btn.classList.add('success');
                btn.querySelector('span').textContent = 'Connected';
                
                setTimeout(() => {
                    btn.classList.remove('success');
                    btn.querySelector('span').textContent = originalText;
                }, 2000);
            } catch (error) {
                btn.classList.remove('loading');
                btn.classList.add('error');
                btn.querySelector('span').textContent = 'Failed';
                
                setTimeout(() => {
                    btn.classList.remove('error');
                    btn.querySelector('span').textContent = originalText;
                }, 2000);
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Navigation hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to hovered link
            this.classList.add('active');
            
            // Create or update hover indicator
            let indicator = this.querySelector('.nav-indicator');
            if (!indicator) {
                indicator = document.createElement('span');
                indicator.className = 'nav-indicator';
                this.appendChild(indicator);
            }
            
            // Set indicator width to match text
            indicator.style.width = `${this.offsetWidth}px`;
        });

        link.addEventListener('mouseout', function() {
            // Remove active class on mouseout
            this.classList.remove('active');
            
            // Remove indicator
            const indicator = this.querySelector('.nav-indicator');
            if (indicator) {
                indicator.style.width = '0';
            }
        });
    });

    // Initialize with English
    setLanguage('en');
});
