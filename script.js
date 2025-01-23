document.addEventListener('DOMContentLoaded', () => {
    // Language translations
    const translations = {
        en: {
            announcement: '🔥 New: Enhanced Blockchain Analysis Features Available!',
            products: 'Products',
            pricing: 'Pricing',
            analysis: 'Analysis',
            blog: 'Blog',
            about: 'About Us',
            wallet: 'Connect Wallet',
            title: 'The Best AML Service',
            titleHighlight: 'for Your Business',
            subtitle: 'AML / KYC Automation for Compliance with Regulations',
            business: 'For Business',
            personal: 'For Personal Use',
            automation: 'Automation',
            reporting: 'Reporting',
            savings: 'Cost Savings',
            "products-subtitle": "Trusted by major players in the crypto market!",
        "kyc-title": "KYC Check",
        "kyc-description": "Conduct secure and fast client verification using our automated KYC system, compliant with international standards.",
        "kyc-feature1-title": "Increase trust in your business",
        "kyc-feature1-text": "Reliable verification strengthens user trust.",
        "kyc-feature2-title": "24/7 customer support",
        "kyc-feature2-text": "Our specialists are always ready to assist your users.",
        "aml-title": "AML Check",
        "aml-description": "Minimize risks with our automated AML check, tracking the sources and routes of cryptocurrencies to prevent fraud.",
        "aml-feature1-title": "Transaction source verification",
        "aml-feature1-text": "Confirm the legitimacy of the fund senders.",
        "aml-feature2-title": "Verification of end recipients",
        "aml-feature2-text": "Verify fund recipients to mitigate risks.",
        "pricing-title": "Service Prices",
        "pricing-subtitle": "A wide range for any business",
        "most-popular": "Most Popular",
        "select-plan": "Select Plan",
        "start-trial": "Start Free Trial",
        "get-started": "Get Started",
        "analysis-title": "Analysis",
        "analysis-subtitle": "Analyze and improve processes to enhance the security and efficiency of your business.",
        "kyc-verification": "KYC Verification",
        "kyc-verification-desc": "Verify the identity of clients to comply with regulations and minimize risks.",
        "aml-compliance": "AML Compliance",
        "aml-compliance-desc": "Automate anti-money laundering efforts through transaction monitoring.",
        "crypto-analysis": "Crypto Transaction Analysis",
        "crypto-analysis-desc": "Obtain reports on cryptocurrency transfers to prevent crimes.",
        "risk-reduction": "Risk Reduction",
        "risk-reduction-desc": "Assess the risks of working with new partners using our tools.",
        "rapid-integration": "Rapid Integration",
        "rapid-integration-desc": "Implement solutions with minimal delays and maximum efficiency.",
        "team-title": "Our team of 15 professionals in cryptocurrency analysis.",
        "monitoring-title": "Transaction Monitoring",
        "monitoring-desc": "Accurate analysis of crypto transactions to detect suspicious activities.",
        "aml-reports-title": "AML Reports",
        "aml-reports-desc": "Reports on anti-money laundering to comply with regulatory requirements.",
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
            announcement: '🔥 Новинка: Доступны улучшенные функции анализа блокчейна!',
            products: 'Продукты',
            pricing: 'Цены',
            analysis: 'Анализ',
            blog: 'Блог',
            about: 'О Нас',
            wallet: 'Подключить Кошелек',
            title: 'Лучший AML Сервис',
            titleHighlight: 'для Вашего Бизнеса',
            subtitle: 'Автоматизация AML / KYC для соответствия нормам',
            business: 'Для Бизнеса',
            personal: 'Для Частных Лиц',
            automation: 'Автоматизация',
            reporting: 'Отчетность',
            savings: 'Экономия',
            "products-subtitle": "Нам доверяют крупные игроки крипторынка!",
        "kyc-title": "KYC Проверка",
        "kyc-description": "Проводите безопасную и быструю верификацию клиентов с помощью нашей автоматизированной KYC системы, соответствующей международным стандартам.",
        "kyc-feature1-title": "Повышайте доверие к бизнесу",
        "kyc-feature1-text": "Надежная верификация укрепляет доверие пользователей.",
        "kyc-feature2-title": "Поддержка 24/7",
        "kyc-feature2-text": "Наши специалисты всегда готовы помочь вашим пользователям.",
        "aml-title": "AML Проверка",
        "aml-description": "Минимизируйте риски с помощью автоматизированной AML проверки, отслеживающей источники и маршруты криптовалют для предотвращения мошенничества.",
        "aml-feature1-title": "Проверка источников транзакций",
        "aml-feature1-text": "Подтверждайте легитимность отправителей средств.",
        "aml-feature2-title": "Верификация получателей",
        "aml-feature2-text": "Проверяйте получателей средств для снижения рисков.",
        "pricing-title": "Тарифы",
        "pricing-subtitle": "Широкий выбор для любого бизнеса",
        "most-popular": "Популярный",
        "select-plan": "Выбрать план",
        "start-trial": "Начать бесплатно",
        "get-started": "Начать",
        "analysis-title": "Анализ",
        "analysis-subtitle": "Анализируйте и улучшайте процессы для повышения безопасности и эффективности вашего бизнеса.",
        "kyc-verification": "KYC Верификация",
        "kyc-verification-desc": "Проверяйте личность клиентов для соответствия нормам и минимизации рисков.",
        "aml-compliance": "AML Соответствие",
        "aml-compliance-desc": "Автоматизируйте борьбу с отмыванием денег через мониторинг транзакций.",
        "crypto-analysis": "Анализ Криптотранзакций",
        "crypto-analysis-desc": "Получайте отчеты о переводах криптовалюты для предотвращения преступлений.",
        "risk-reduction": "Снижение Рисков",
        "risk-reduction-desc": "Оценивайте риски работы с новыми партнерами с помощью наших инструментов.",
        "rapid-integration": "Быстрая Интеграция",
        "rapid-integration-desc": "Внедряйте решения с минимальными задержками и максимальной эффективностью.",
        "team-title": "Наша команда из 15 профессионалов в области анализа криптовалют.",
        "monitoring-title": "Мониторинг транзакций",
        "monitoring-desc": "Точный анализ криптотранзакций для выявления подозрительной активности.",
        "aml-reports-title": "AML отчеты",
        "aml-reports-desc": "Отчеты по борьбе с отмыванием денег для соответствия нормативным требованиям.",
        }
    };

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

    // Language switcher functionality
    const languageBtn = document.querySelector('.language-btn');
    const currentLang = document.querySelector('.current-lang');
    const languageOptions = document.querySelectorAll('.language-option');

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            currentLang.textContent = lang.toUpperCase();
        });
    });

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

    // Wallet button animation
    const walletBtn = document.querySelector('.wallet-btn');
    
    walletBtn.addEventListener('mouseover', () => {
        walletBtn.style.transform = 'translateY(-2px)';
    });

    walletBtn.addEventListener('mouseout', () => {
        walletBtn.style.transform = 'translateY(0)';
    });

    walletBtn.addEventListener('click', async () => {
        walletBtn.classList.add('loading');
        const originalText = walletBtn.querySelector('span').textContent;
        walletBtn.querySelector('span').textContent = 'Connecting...';

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            walletBtn.classList.remove('loading');
            walletBtn.classList.add('success');
            walletBtn.querySelector('span').textContent = 'Connected';
            
            setTimeout(() => {
                walletBtn.classList.remove('success');
                walletBtn.querySelector('span').textContent = originalText;
            }, 2000);
        } catch (error) {
            walletBtn.classList.remove('loading');
            walletBtn.classList.add('error');
            walletBtn.querySelector('span').textContent = 'Failed to Connect';
            
            setTimeout(() => {
                walletBtn.classList.remove('error');
                walletBtn.querySelector('span').textContent = originalText;
            }, 2000);
        }
    });

    // Feature badges animation
    const featureBadges = document.querySelectorAll('.feature-badge');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    featureBadges.forEach(badge => {
        observer.observe(badge);
    });

    // Clone partner logos for infinite scroll
    const track = document.querySelector('.partners-track');
    const logos = document.querySelectorAll('.partner-logo');
    
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    // Initialize with English
    setLanguage('en');
});
