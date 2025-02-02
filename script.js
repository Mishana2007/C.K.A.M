document.addEventListener('DOMContentLoaded', () => {
    // Объект с переводами
    const translations = {
        en: {
            title: 'The Best AML Service',
            titleHighlight: 'for Your Business',
            subtitle: 'AML / KYC Automation for Compliance with Regulations',
            announcement: '🔥 New: Enhanced Blockchain Analysis Features Available!',
            // Feature badges
            business: 'For Business',
            personal: 'For Personal Use',
            automation: 'Automation',
            reporting: 'Reporting',
            savings: 'Cost Savings',
            products: 'Products',
            pricing: 'Pricing',
            analysis: 'Analysis',
            blog: 'Blog',
            about: 'About Us',
            support: 'Support',
            wallet: 'Check your wallet',
            testimonialsTitle: 'Preferred by the  best teams',
        testimonial1: '"Imagine you\'re like a house, you\'re a building. Then GlobalAML would be the reliable foundation for it, offering various \'infrastructure packages\' depending on your needs."',
        testimonial2: '"Using their infrastructure, our Chain Threat Intelligence System has significantly benefited from free access to real-time data."',
        testimonial3: '"GlobalAML provides us with a simple unified service that offers access to multiple networks."',
        author1Name: 'Sever Gansovsky',
        author1Position: 'Customer Success Specialist',
        author2Name: 'Domantas Pelaitis',
        author2Position: 'Chief Technology Officer',
        author3Name: 'Andrey Lazutkin',
        author3Position: 'Developer',
        products: "Products",
        productsSubtitle: "Trusted by major players in the crypto market!",
        kycTitle: "KYC Check",
        kycDescription: "Conduct secure and fast client verification using our automated KYC system, compliant with international standards.",
        kycFeature1Title: "Increase trust in your business",
        kycFeature1Text: "Reliable verification strengthens user trust.",
        kycFeature2Title: "24/7 customer support",
        kycFeature2Text: "Our specialists are always ready to assist your users.",
        amlTitle: "AML Check",
        amlDescription: "Minimize risks with our automated AML check, tracking the sources and routes of cryptocurrencies to prevent fraud.",
        amlFeature1Title: "Transaction source verification",
        amlFeature1Text: "Confirm the legitimacy of the fund senders.",
        amlFeature2Title: "Verification of end recipients",
        amlFeature2Text: "Verify fund recipients to mitigate risks.",
        nodeTitle: 'Dedicated Node',
        nodeSubtitle: 'Private server with custom settings',
        requestsLabel: 'Requests',
        requestsValue: 'Unlimited',
        rateLabel: 'Rate Limit',
        rateValue: 'Unlimited',
        dataLabel: 'Data',
        dataValue: 'Archive',
        pricePrefix: 'Starting at',
        priceSuffix: '$ per month',
        pricingTitle: "Service Prices",
        pricingSubtitle: "A wide range for any business",
        annualTitle: "AML 1 Year",
        annualDescription: "A long-term solution for large organizations, including bulk checks.",
        annualPeriod: "for 12 months",
        featureUnlimited: "Unlimited checks",
        featureUnlimitedDesc: "Check as many transactions as you need",
        selectPlan: "Connect a subscription",
        mostPopular: "Most Popular",
        trialTitle: "1 month subscription",
        trialDescription: "Check transactions individually as needed. Suitable for individuals.",
        trialPeriod: "1 free check",
        startTrial: "Start Free Trial",
        perTransactionTitle: "AML Per Transaction",
        perTransactionDescription: "Pay only for the transactions you check. Ideal for small businesses.",
        perTransactionPeriod: "per transaction",
        getStarted: "Get Started",

        activeUsers: "Active Users",
        apiRequests: "API requests processed monthly",
        companyLaunched: "Company launched",
        
        // Analysis
        analysisTitle: "Analysis",
        analysisSubtitle: "Analyze and improve processes to enhance the security and efficiency of your business.",
        kycVerification: "KYC Verification",
        kycVerificationDesc: "Verify the identity of clients to comply with regulations and minimize risks.",
        amlCompliance: "AML Compliance",
        amlComplianceDesc: "Automate anti-money laundering efforts through transaction monitoring.",
        cryptoAnalysis: "Crypto Transaction Analysis",
        cryptoAnalysisDesc: "Obtain reports on cryptocurrency transfers to prevent crimes.",
        riskReduction: "Risk Reduction",
        riskReductionDesc: "Assess the risks of working with new partners using our tools.",
        rapidIntegration: "Rapid Integration",
        rapidIntegrationDesc: "Implement solutions with minimal delays and maximum efficiency.",
        activeUsers: 'Active Users',
        apiRequests: 'API requests processed monthly',
         companyLaunched: 'Company launched',
         activeUsers: 'Active Users',
       apiRequests: 'API requests processed monthly',
       companyLaunched: 'Company launched',
         

        },
        ru: {

            title: 'Лучший AML Сервис',
            titleHighlight: 'для Вашего Бизнеса',
            subtitle: 'Автоматизация AML / KYC для соответствия нормам',
            announcement: '🔥 Новинка: Доступны улучшенные функции анализа блокчейна!',
            // Feature badges
            business: 'Для Бизнеса',
            personal: 'Для Частных Лиц',
            automation: 'Автоматизация',
            reporting: 'Отчетность',
            savings: 'Экономия',
            products: 'Продукты',
            pricing: 'Цены',
            analysis: 'Анализ',
            blog: 'Блог',
            about: 'О Нас',
            support: 'Поддержка',
            wallet: 'Подключить Кошелек',
            testimonialsTitle: 'Предпочитают лучшие  команды ',
        testimonial1: '"Представьте, что вы — здание. Тогда GlobalAML станет надёжным фундаментом, предлагая различные «инфраструктурные пакеты» в зависимости от ваших потребностей."',
        testimonial2: '"Используя их инфраструктуру, наша система анализа угроз в цепочке значительно выиграла от бесплатного доступа к данным в реальном времени."',
        testimonial3: '"GlobalAML предоставляет нам простой унифицированный сервис, который даёт доступ к множеству сетей."',
        author1Name: 'Север Гансовский',
        author1Position: 'Специалист по работе с клиентами',
        author2Name: 'Домантас Пялайтис',
        author2Position: 'Технический директор',
        author3Name: 'Андрей Лазуткин',
        author3Position: 'Разработчик',
        products: "Продукты",
        productsSubtitle: "Доверяют ведущие игроки крипторынка!",
        kycTitle: "KYC Проверка",
        kycDescription: "Проводите безопасную и быструю верификацию клиентов с помощью нашей автоматизированной системы KYC, соответствующей международным стандартам.",
        kycFeature1Title: "Повысьте доверие к вашему бизнесу",
        kycFeature1Text: "Надёжная проверка укрепляет доверие пользователей.",
        kycFeature2Title: "Круглосуточная поддержка",
        kycFeature2Text: "Наши специалисты всегда готовы помочь вашим пользователям.",
        amlTitle: "AML Проверка",
        amlDescription: "Снижайте риски с помощью автоматической AML проверки, отслеживающей источники и маршруты криптовалют для предотвращения мошенничества.",
        amlFeature1Title: "Проверка источника транзакций",
        amlFeature1Text: "Подтверждаем легитимность отправителей средств.",
        amlFeature2Title: "Верификация конечных получателей",
        amlFeature2Text: "Проверяйте получателей средств для снижения рисков.",
        nodeTitle: 'Выделенный Узел',
        nodeSubtitle: 'Приватный сервер с индивидуальными настройками',
        requestsLabel: 'Запросы',
        requestsValue: 'Безлимитные',
        rateLabel: 'Лимит скорости',
        rateValue: 'Неограниченный',
        dataLabel: 'Данные',
        dataValue: 'Архивные',
        pricePrefix: 'От',
        priceSuffix: '$ в месяц',
        pricingTitle: "Стоимость услуг",
        pricingSubtitle: "Широкий выбор для любого бизнеса",
        annualTitle: "AML на 1 год",
        annualDescription: "Долгосрочное решение для крупных организаций с пакетной проверкой",
        annualPeriod: "на 12 месяцев",
        featureUnlimited: "Неограниченные проверки",
        featureUnlimitedDesc: "Проверяйте столько транзакций, сколько нужно",
        selectPlan: "Подключить подписку",
        mostPopular: "Самый популярный",
        trialTitle: "Подписка на 1 месяц",
        trialDescription: "Проверяйте транзакции по мере необходимости. Подходит для частных лиц.",
        trialPeriod: "1 бесплатная проверка",
        startTrial: "Начать пробный период",
        perTransactionTitle: "AML за транзакцию",
        perTransactionDescription: "Платите только за проверенные транзакции. Идеально для малого бизнеса.",
        perTransactionPeriod: "за транзакцию",
        getStarted: "Начать",
        activeUsers: "Активные пользователи",
        apiRequests: "API запросов обрабатывается ежемесячно",
        companyLaunched: "Основание компании",
        
        // Analysis
        analysisTitle: "Аналитика",
        analysisSubtitle: "Анализируйте и улучшайте процессы для повышения безопасности и эффективности вашего бизнеса.",
        kycVerification: "KYC Верификация",
        kycVerificationDesc: "Проверка личности клиентов для соблюдения нормативных требований и снижения рисков.",
        amlCompliance: "AML Соответствие",
        amlComplianceDesc: "Автоматизация противодействия отмыванию денег через мониторинг транзакций.",
        cryptoAnalysis: "Анализ криптотранзакций",
        cryptoAnalysisDesc: "Получайте отчеты о переводах криптовалют для предотвращения преступлений.",
        riskReduction: "Снижение рисков",
        riskReductionDesc: "Оценивайте риски работы с новыми партнерами с помощью наших инструментов.",
        rapidIntegration: "Быстрая интеграция",
        rapidIntegrationDesc: "Внедряйте решения с минимальными задержками и максимальной эффективностью.",


        activeUsers: 'Активные Пользователи',
         apiRequests: 'Обработано API запросов в месяц',
        companyLaunched: 'Компания Основана',

        analysisTitle: "Аналитика",
        analysisSubtitle: "Анализируйте и улучшайте процессы для повышения безопасности и эффективности вашего бизнеса.",
        
        // Карточки первого ряда
        kycVerification: "KYC Верификация",
        kycVerificationDesc: "Проверка личности клиентов для соблюдения нормативных требований и минимизации рисков.",
        amlCompliance: "AML Соответствие",
        amlComplianceDesc: "Автоматизация противодействия отмыванию денег через мониторинг транзакций.",
        cryptoAnalysis: "Анализ криптотранзакций",
        cryptoAnalysisDesc: "Получение отчетов о переводах криптовалют для предотвращения преступлений.",
        
        // Широкие карточки
        riskReduction: "Снижение рисков",
        riskReductionDesc: "Оценка рисков работы с новыми партнерами с помощью наших инструментов.",
        rapidIntegration: "Быстрая интеграция",
        rapidIntegrationDesc: "Внедрение решений с минимальными задержками и максимальной эффективностью.",

        companyTitle: "AML Secure", // название бренда оставляем
        teamDesc: "Обеспечиваем безопасное будущее криптотранзакций",
        
        // Карточки решений
        monitorTitle: "Мониторинг в реальном времени",
        monitorDesc: "Продвинутая аналитика блокчейна с мгновенными оповещениями",
        reportsTitle: "Умная отчетность",
        reportsDesc: "Автоматизированная документация соответствия",
        verifyTitle: "Проверка личности",
        verifyDesc: "Безопасная верификация за минуты",
        riskTitle: "Прогнозирующий риск-менеджер",
        riskDesc: "Обнаружение и предотвращение угроз на ИИ",
        screeningTitle: "Глобальная проверка",
        screeningDesc: "Проверка санкций и PEP-лиц в реальном времени",

        

        
        
        }
    };

    // Функция установки языка
    function setLanguage(lang) {
        // Сохраняем выбранный язык
        localStorage.setItem('selectedLanguage', lang);
        
        // Обновляем отображение текущего языка
        const currentLang = document.querySelector('.current-lang');
        if (currentLang) {
            currentLang.textContent = lang.toUpperCase();
        }
        
        // Обновляем все переводимые элементы
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Управление языковым меню
    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');

    function toggleLanguageMenu(show) {
        if (!languageToggle || !languageMenu) return;
        
        languageToggle.setAttribute('aria-expanded', show);
        languageMenu.setAttribute('aria-hidden', !show);
        languageMenu.style.display = show ? 'block' : 'none';
        
        if (show && languageOptions.length > 0) {
            languageOptions[0].focus();
        }
    }

    // Обработчики событий для переключения языка
    if (languageToggle) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = languageToggle.getAttribute('aria-expanded') === 'true';
            toggleLanguageMenu(!isExpanded);
        });
    }

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            toggleLanguageMenu(false);
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (languageMenu && !languageMenu.contains(e.target) && 
            !languageToggle?.contains(e.target)) {
            toggleLanguageMenu(false);
        }
    });

    // Функциональность кнопки кошелька
    const walletBtns = document.querySelectorAll('.wallet-btn, .header-wallet-btn, .check-wallet-btn');
    
    walletBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            if (!btn.querySelector('span')) return;
            
            btn.classList.add('loading');
            const originalText = btn.querySelector('span').textContent;
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            btn.querySelector('span').textContent = translations[currentLang].wallet;

            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                btn.classList.remove('loading');
                btn.classList.add('success');
                btn.querySelector('span').textContent = currentLang === 'en' ? 'Connected' : 'Подключено';
                
                setTimeout(() => {
                    btn.classList.remove('success');
                    btn.querySelector('span').textContent = originalText;
                }, 2000);
            } catch (error) {
                btn.classList.remove('loading');
                btn.classList.add('error');
                btn.querySelector('span').textContent = currentLang === 'en' ? 'Failed' : 'Ошибка';
                
                setTimeout(() => {
                    btn.classList.remove('error');
                    btn.querySelector('span').textContent = originalText;
                }, 2000);
            }
        });
    });


    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            const targetId = this.getAttribute('href').substring(1); // Получаем id цели
            const targetElement = document.getElementById(targetId); // Находим элемент по id

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start' // Прокрутка к началу элемента
                });
            }
        });
    });

    // Эффект прокрутки для header
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        if (!header) return;
        
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

    // Эффекты при наведении на навигацию
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            let indicator = this.querySelector('.nav-indicator');
            if (!indicator) {
                indicator = document.createElement('span');
                indicator.className = 'nav-indicator';
                this.appendChild(indicator);
            }
            
            indicator.style.width = `${this.offsetWidth}px`;
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('active');
            const indicator = this.querySelector('.nav-indicator');
            if (indicator) {
                indicator.style.width = '0';
            }
        });
    });

    // Инициализация языка
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
});


const carouselInner = document.querySelector('.carousel-inner');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dots = document.querySelectorAll('.dot');

let currentPosition = 0;

nextButton.addEventListener('click', () => {
  currentPosition = (currentPosition + 1) % testimonialCards.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentPosition = (currentPosition - 1 + testimonialCards.length) % testimonialCards.length;
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentPosition * 100}%)`;

  // Обновляем активную точку
  dots.forEach((dot, index) => {
    if (index === currentPosition) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Добавляем возможность переключения свайпом
let touchStartX = 0;

carouselInner.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselInner.addEventListener('touchmove', (e) => {
  if (!touchStartX) return;

  const touchCurrentX = e.touches[0].clientX;
  const diffX = touchStartX - touchCurrentX;

  if (Math.abs(diffX) > 50) { // Adjust the threshold as needed
    if (diffX > 0) {
      nextButton.click();
    } else {
      prevButton.click();
    }
    touchStartX = 0;
  }
});

// Добавляем возможность переключения по точкам
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentPosition = index;
    updateCarousel();
  });
});
