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
            savings: 'Cost Savings'
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
            savings: 'Экономия'
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
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
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
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // Special handling for title with highlight
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
        // Add loading state
        walletBtn.classList.add('loading');
        const originalText = walletBtn.querySelector('span').textContent;
        walletBtn.querySelector('span').textContent = 'Connecting...';

        try {
            // Simulate connection delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success state
            walletBtn.classList.remove('loading');
            walletBtn.classList.add('success');
            walletBtn.querySelector('span').textContent = 'Connected';
            
            // Reset after 2 seconds
            setTimeout(() => {
                walletBtn.classList.remove('success');
                walletBtn.querySelector('span').textContent = originalText;
            }, 2000);
        } catch (error) {
            // Error state
            walletBtn.classList.remove('loading');
            walletBtn.classList.add('error');
            walletBtn.querySelector('span').textContent = 'Failed to Connect';
            
            // Reset after 2 seconds
            setTimeout(() => {
                walletBtn.classList.remove('error');
                walletBtn.querySelector('span').textContent = originalText;
            }, 2000);
        }
    });

    // Feature badges animation on scroll
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

    // Initialize with English
    setLanguage('en');
});