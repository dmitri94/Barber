// ===== УЛУЧШЕННЫЙ JAVASCRIPT ДЛЯ ЛЕНДИНГА ePRIME =====

document.addEventListener('DOMContentLoaded', () => {
    
    // ===== ДИНАМИЧЕСКАЯ ЗАМЕНА КОНТЕНТА =====
    const dynamicContent = {
        // RU версии
        ru: {
            // Стандартный контент
            default: {
                hero_title: "Солнце работает, <span class=\"highlight\">вы отдыхаете</span>",
                hero_subtitle: "Рассчитайте вашу экономию и окупаемость солнечной станции за 45 секунд и получите 3D-проект вашей крыши в подарок!",
                hero_button: "Рассчитать экономию"
            },
            // Для объявлений про установку
            instalare_rapida: {
                hero_title: "Установка солнечной станции <span class=\"highlight\">за 3 дня!</span>",
                hero_subtitle: "Профессиональный монтаж под ключ с гарантией 5 лет. Получите расчет стоимости и 3D-проект бесплатно!",
                hero_button: "Рассчитать стоимость установки"
            },
            // Для объявлений про цену
            pret_optim: {
                hero_title: "Лучшая цена на солнечные <span class=\"highlight\">панели в Молдове</span>",
                hero_subtitle: "Прямые поставки от производителя. Рассчитайте точную стоимость и срок окупаемости для вашего дома!",
                hero_button: "Узнать лучшую цену"
            },
            // Для объявлений про качество
            panouri_calitate: {
                hero_title: "Премиальные солнечные панели <span class=\"highlight\">с гарантией 25 лет</span>",
                hero_subtitle: "Только Tier-1 производители. Рассчитайте производительность вашей будущей станции и получите 3D-проект!",
                hero_button: "Рассчитать производительность"
            },
            // Для бизнеса
            business_solutions: {
                hero_title: "Солнечные решения для <span class=\"highlight\">вашего бизнеса</span>",
                hero_subtitle: "Снизьте расходы на электроэнергию до 90%. Специальные условия для компаний и рассрочка 0%!",
                hero_button: "Рассчитать для бизнеса"
            }
        },
        // RO версии
        ro: {
            default: {
                hero_title: "Soarele lucrează, <span class=\"highlight\">dumneavoastră vă odihniți</span>",
                hero_subtitle: "Calculați economiile și perioada de recuperare a investiției pentru stația solară în 45 de secunde și primiți un proiect 3D al acoperișului cadou!",
                hero_button: "Calculează economiile"
            },
            instalare_rapida: {
                hero_title: "Instalare stație solară <span class=\"highlight\">în 3 zile!</span>",
                hero_subtitle: "Montaj profesional la cheie cu garanție 5 ani. Primiți calculul costului și proiectul 3D gratuit!",
                hero_button: "Calculează costul instalării"
            },
            pret_optim: {
                hero_title: "Cel mai bun preț pentru <span class=\"highlight\">panourile solare din Moldova</span>",
                hero_subtitle: "Furnizare directă de la producător. Calculați costul exact și perioada de recuperare pentru casa dvs.!",
                hero_button: "Află cel mai bun preț"
            },
            panouri_calitate: {
                hero_title: "Panouri solare premium <span class=\"highlight\">cu garanție 25 de ani</span>",
                hero_subtitle: "Doar producători Tier-1. Calculați performanța stației dvs. viitoare și primiți proiectul 3D!",
                hero_button: "Calculează performanța"
            },
            business_solutions: {
                hero_title: "Soluții solare pentru <span class=\"highlight\">afacerea dvs.</span>",
                hero_subtitle: "Reduceți costurile la energie electrică cu până la 90%. Condiții speciale pentru companii și rate 0%!",
                hero_button: "Calculează pentru afacere"
            }
        }
    };

    // ===== ПЕРЕВОДЫ =====
    const translations = {
        ru: {
            meta_title: "ePrime Solar: Расчет экономии на солнечных панелях в Молдове",
            meta_description: "Узнайте, сколько вы можете сэкономить с солнечной станцией от ePrime.md. Пройдите быстрый калькулятор и получите расчет и 3D-проект на WhatsApp.",
            hero_title: "Солнце работает, <span class=\"highlight\">вы отдыхаете</span>",
            hero_subtitle: "Рассчитайте вашу экономию и окупаемость солнечной станции за 45 секунд и получите 3D-проект вашей крыши в подарок!",
            hero_button: "Рассчитать экономию",
            step1_title: "Ваш ежемесячный счет за электроэнергию? (MDL)",
            bill_1: "до 1000",
            bill_2: "1001 - 2000",
            bill_3: "2001 - 3000",
            bill_4: "3000+",
            step2_title: "Какой у вас тип крыши?",
            'Односкатная': 'Односкатная',
            'Двускатная': 'Двускатная',
            'Плоская': 'Плоская',
            'Другой': 'Другой / Не знаю',
            results_title: "Ваш предварительный расчет готов!",
            results_savings: "Экономия в год с ePrime",
            results_payback: "Срок окупаемости",
            form_intro: "Получите точный расчет, 3D-проект и специальное предложение на WhatsApp!",
            form_button: "Получить расчет",
            form_bonus: "Оставив номер, вы получите бонус при монтаже",
            thanks_title: "Спасибо! Ваша заявка принята!",
            thanks_subtitle: "Наш специалист скоро свяжется с вами. А пока, узнайте о нас больше:",
            link_projects_title: "Наши проекты",
            link_projects_desc: "Посмотрите реальные примеры наших работ.",
            link_home_title: "Решения для дома",
            link_home_desc: "Узнайте все о станциях для частных домов.",
            link_biz_title: "Решения для бизнеса",
            link_biz_desc: "Оптимизируйте расходы вашей компании.",
            link_main_title: "Основной сайт",
            link_main_desc: "Перейдите на главный сайт ePrime.",
            video_title: "Посмотрите, как мы работаем",
            cookie_text: "Мы используем файлы cookie для улучшения вашего опыта на сайте, анализа трафика и показа релевантной рекламы. Продолжая использовать сайт, вы соглашаетесь с этим.",
            cookie_accept: "Принять",
            phone_error_invalid: "Неверный номер телефона",
            phone_error_starts_zero: "Номер не должен начинаться с 0",
            geolocation_denied: "Клиент не предоставил доступ к геолокации."
        },
        ro: {
            meta_title: "ePrime Solar: Calculați economiile la panourile solare în Moldova",
            meta_description: "Aflați cât puteți economisi cu o stație solară de la ePrime.md. Utilizați calculatorul rapid și primiți un calcul și un proiect 3D pe WhatsApp.",
            hero_title: "Soarele lucrează, <span class=\"highlight\">dumneavoastră vă odihniți</span>",
            hero_subtitle: "Calculați economiile și perioada de recuperare a investiției pentru stația solară în 45 de secunde și primiți un proiect 3D al acoperișului cadou!",
            hero_button: "Calculează economiile",
            step1_title: "Factura lunară la energia electrică? (MDL)",
            bill_1: "până la 1000",
            bill_2: "1001 - 2000",
            bill_3: "2001 - 3000",
            bill_4: "3000+",
            step2_title: "Ce tip de acoperiș aveți?",
            'Односкатная': 'Cu o singură pantă',
            'Двускатная': 'În două pante',
            'Плоская': 'Plan',
            'Другой': 'Altul / Nu știu',
            results_title: "Calculul preliminar este gata!",
            results_savings: "Economii anuale cu ePrime",
            results_payback: "Perioada de recuperare",
            form_intro: "Primiți un calcul exact, un proiect 3D și o ofertă specială pe WhatsApp!",
            form_button: "Obține calculul",
            form_bonus: "Lăsând numărul, veți primi un bonus la instalare",
            thanks_title: "Mulțumim! Solicitarea a fost acceptată!",
            thanks_subtitle: "Specialistul nostru vă va contacta în curând. Între timp, aflați mai multe despre noi:",
            link_projects_title: "Proiectele noastre",
            link_projects_desc: "Vedeți exemple reale ale lucrărilor noastre.",
            link_home_title: "Soluții pentru acasă",
            link_home_desc: "Aflați totul despre stațiile pentru case private.",
            link_biz_title: "Soluții pentru afaceri",
            link_biz_desc: "Optimizați cheltuielile companiei dvs.",
            link_main_title: "Site-ul principal",
            link_main_desc: "Accesați site-ul principal ePrime.",
            video_title: "Vedeți cum lucrăm",
            cookie_text: "Folosim cookie-uri pentru a vă îmbunătăți experiența pe site, pentru a analiza traficul și pentru a afișa reclame relevante. Continuând să utilizați site-ul, sunteți de acord cu aceasta.",
            cookie_accept: "Accept",
            phone_error_invalid: "Număr de telefon invalid",
            phone_error_starts_zero: "Numărul nu trebuie să înceapă cu 0",
            geolocation_denied: "Clientul nu a oferit acces la geolocație."
        }
    };

    // ===== ПЕРЕМЕННЫЕ =====
    let currentLang = 'ru';
    let currentContent = 'default';
    let canTrack = false;
    let sessionTimers = {};
    let userChoices = {};

    // ===== ЭЛЕМЕНТЫ DOM =====
    const langRuBtn = document.getElementById('lang-ru');
    const langRoBtn = document.getElementById('lang-ro');
    const modal = document.getElementById('modal');
    const startBtn = document.getElementById('start-calc-btn');
    const closeBtn = document.getElementById('modal-close-btn');
    const steps = document.querySelectorAll('.calc-step');
    const optionButtons = document.querySelectorAll('.option-btn');
    const phoneInput = document.querySelector("#phone");
    const errorMsg = document.querySelector("#error-msg");
    const form = document.getElementById('phone-form');
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookieBtn = document.getElementById('cookie-accept-btn');

    // ===== ИНИЦИАЛИЗАЦИЯ =====
    function init() {
        setupLanguageSwitcher();
        setupCalculator();
        setupPhoneValidation();
        setupCookieBanner();
        setupDynamicContent();
        trackEvent('page_view');
    }

    // ===== ДИНАМИЧЕСКАЯ ЗАМЕНА КОНТЕНТА =====
    function setupDynamicContent() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmContent = urlParams.get('utm_content');
        const langParam = urlParams.get('lang');
        
        if (utmContent && dynamicContent.ru[utmContent]) {
            currentContent = utmContent;
            applyDynamicContent();
        }
        
        if (langParam && (langParam === 'ru' || langParam === 'ro')) {
            setLanguage(langParam);
        }
    }

    function applyDynamicContent() {
        const content = dynamicContent[currentLang][currentContent] || dynamicContent[currentLang].default;
        
        // Обновляем заголовок
        const heroTitle = document.querySelector('[data-lang-key="hero_title"]');
        if (heroTitle) {
            heroTitle.innerHTML = content.hero_title;
        }
        
        // Обновляем подзаголовок
        const heroSubtitle = document.querySelector('[data-lang-key="hero_subtitle"]');
        if (heroSubtitle) {
            heroSubtitle.textContent = content.hero_subtitle;
        }
        
        // Обновляем кнопку
        const heroButton = document.querySelector('[data-lang-key="hero_button"]');
        if (heroButton) {
            heroButton.textContent = content.hero_button;
        }
    }

    // ===== ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ =====
    function setupLanguageSwitcher() {
        langRuBtn.addEventListener('click', () => setLanguage('ru'));
        langRoBtn.addEventListener('click', () => setLanguage('ro'));
    }

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        
        // Обновляем переводы
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Обновляем активную кнопку языка
        langRuBtn.classList.toggle('active', lang === 'ru');
        langRoBtn.classList.toggle('active', lang === 'ro');
        
        // Применяем динамический контент для нового языка
        applyDynamicContent();
    }

    // ===== КАЛЬКУЛЯТОР =====
    function setupCalculator() {
        startBtn.addEventListener('click', () => {
            modal.classList.add('active');
            trackEvent('calculator_opened');
        });
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => showStep('step1'), 400);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => showStep('step1'), 400);
            }
        });

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const currentStep = button.closest('.calc-step');
                const nextStepId = button.dataset.next;
                userChoices[currentStep.id] = button.dataset.value;

                if (nextStepId === 'results-step') {
                    calculateResults();
                    trackEvent('calculator_completed', { choices: userChoices });
                } else {
                    trackEvent('calculator_step_completed', { 
                        step: currentStep.id, 
                        value: button.dataset.value 
                    });
                }
                
                showStep(nextStepId);
            });
        });
    }

    function showStep(stepId) {
        steps.forEach(step => step.classList.remove('active'));
        document.getElementById(stepId).classList.add('active');
    }

    function calculateResults() {
        const monthlyBill = parseFloat(userChoices.step1) || 1500;
        const annualSavings = Math.round((monthlyBill * 12) * 0.8) * 2;
        let stationCost;
        
        if (monthlyBill <= 1000) stationCost = 75000;
        else if (monthlyBill <= 2000) stationCost = 110000;
        else if (monthlyBill <= 3000) stationCost = 150000;
        else stationCost = 200000;
        
        const payback = Math.round(stationCost / annualSavings);

        document.getElementById('annual-savings').textContent = `~${annualSavings.toLocaleString('ru-RU')} MDL`;
        document.getElementById('payback-period').textContent = `~${payback} ${currentLang === 'ru' ? 'лет' : 'ani'}`;
    }

    // ===== ВАЛИДАЦИЯ ТЕЛЕФОНА =====
    function setupPhoneValidation() {
        const phoneInputInstance = window.intlTelInput(phoneInput, {
            initialCountry: "md",
            preferredCountries: ['md', 'ro', 'ua', 'ru'],
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        });

        const resetValidation = () => {
            errorMsg.style.display = "none";
            phoneInput.classList.remove('error');
        };

        const showError = (message) => {
            errorMsg.textContent = message;
            errorMsg.style.display = "block";
            phoneInput.classList.add('error');
        };

        const isPhoneValid = () => {
            resetValidation();
            if (phoneInput.value.trim()) {
                if (phoneInputInstance.isValidNumber()) {
                    const countryData = phoneInputInstance.getSelectedCountryData();
                    const number = phoneInput.value.trim();
                    if ((countryData.iso2 === 'md' || countryData.iso2 === 'ro') && number.startsWith('0')) {
                        showError(translations[currentLang].phone_error_starts_zero);
                        return false;
                    }
                    return true;
                } else {
                    showError(translations[currentLang].phone_error_invalid);
                    return false;
                }
            } else {
                showError(translations[currentLang].phone_error_invalid);
                return false;
            }
        };

        phoneInput.addEventListener('input', isPhoneValid);
        phoneInput.addEventListener('countrychange', isPhoneValid);

        // Обработка отправки формы
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!isPhoneValid()) {
                return;
            }

            const submitBtn = document.getElementById('submit-lead-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '...';

            const fullNumber = phoneInputInstance.getNumber();

            // Получение геолокации
            const location = await getGeolocation();
            let geolocationInfo = '';
            if (location) {
                geolocationInfo = `\n- Геолокация клиента (ссылка на карту):\nhttps://www.google.com/maps?q=${location.lat},${location.lon}`;
            } else if (isMobileDevice()) {
                geolocationInfo = `\n- ${translations[currentLang].geolocation_denied}`;
            }
            
            // Сбор аналитики для лида
            trackEvent('lead_form_submitted');
            const firstVisit = localStorage.getItem('first_visit_timestamp');
            const sessionStart = sessionTimers['page_view'] || Date.now();
            const calcStart = sessionTimers['calculator_opened'] || sessionStart;
            const submitTime = sessionTimers['lead_form_submitted'];

            const timeOnSite = formatDuration(submitTime - sessionStart);
            const timeInCalc = formatDuration(submitTime - calcStart);
            
            let analyticsSummary = `
                Аналитика и поведение клиента:
                - Первый визит на сайт: ${firstVisit ? new Date(firstVisit).toLocaleString() : 'Не отслежено (cookie)'}
                - Время на сайте до заявки: ${timeOnSite}
                - Время, затраченное на расчет: ${timeInCalc}
                - Источник: ${currentContent}
                - Язык: ${currentLang.toUpperCase()}
                ${geolocationInfo}
            `;
            
            const webhookURL = 'https://crm.eprimebusiness.md/rest/3/1w6otlj1xrvscmam/crm.lead.add.json';

            const data = {
                fields: {
                    TITLE: `Заявка с калькулятора ePrime (${new Date().toLocaleString()})`,
                    NAME: "Клиент с лендинга",
                    PHONE: [{ VALUE: fullNumber, VALUE_TYPE: "WORK" }],
                    SOURCE_ID: "WEB",
                    COMMENTS: `
                        Данные из калькулятора:
                        - Ежемесячный счет: ${userChoices.step1 || 'не указан'} MDL
                        - Тип крыши: ${userChoices.step2 || 'не указан'}
                        - Расчетная экономия: ${document.getElementById('annual-savings').textContent}
                        - Расчетный срок окупаемости: ${document.getElementById('payback-period').textContent}
                        - Язык сайта: ${currentLang.toUpperCase()}
                        - Источник: ${currentContent}
                        
                        -----------------
                        ${canTrack ? analyticsSummary : 'Клиент не дал согласие на отслеживание.'}
                    `
                },
                params: { "REGISTER_SONET_EVENT": "Y" }
            };

            try {
                const response = await fetch(webhookURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    if (canTrack) localStorage.removeItem('user_journey');
                    showThankYouPage();
                } else { 
                    throw new Error('Bitrix24 API Error'); 
                }
            } catch (error) {
                console.error('Ошибка отправки лида:', error);
                alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // ===== ГЕОЛОКАЦИЯ =====
    const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

    const getGeolocation = () => {
        return new Promise((resolve) => {
            if (isMobileDevice() && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        });
                    },
                    () => {
                        resolve(null);
                    },
                    { timeout: 5000 }
                );
            } else {
                resolve(null);
            }
        });
    };

    // ===== СТРАНИЦА БЛАГОДАРНОСТИ =====
    const showThankYouPage = () => {
        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');
        const thankYouPage = document.getElementById('thank-you-page');

        modal.classList.remove('active');
        header.style.opacity = '0';
        hero.style.opacity = '0';
        
        setTimeout(() => {
            header.style.display = 'none';
            hero.style.display = 'none';
            thankYouPage.style.display = 'block';
            window.scrollTo(0, 0);
        }, 500);
    };

    // ===== COOKIE И ОТСЛЕЖИВАНИЕ =====
    function setupCookieBanner() {
        canTrack = localStorage.getItem('cookie_consent') === 'true';
        
        if (localStorage.getItem('cookie_consent') !== 'true') {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 2000);
        } else {
            if (!localStorage.getItem('first_visit_timestamp')) {
                localStorage.setItem('first_visit_timestamp', new Date().toISOString());
            }
        }

        acceptCookieBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'true');
            if (!localStorage.getItem('first_visit_timestamp')) {
                localStorage.setItem('first_visit_timestamp', new Date().toISOString());
            }
            canTrack = true;
            cookieBanner.classList.remove('show');
            trackEvent('cookie_consent_given');
        });
    }

    const formatDuration = (ms) => {
        if (ms < 0) ms = 0;
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        
        let parts = [];
        if (hours > 0) parts.push(`${hours} ч`);
        if (minutes > 0) parts.push(`${minutes} мин`);
        if (seconds > 0 || parts.length === 0) parts.push(`${seconds} сек`);
        
        return parts.join(' ');
    };

    const trackEvent = (eventName, data = {}) => {
        if (!canTrack) return;
        sessionTimers[eventName] = Date.now();
        
        // Здесь можно добавить отправку в Google Analytics, Facebook Pixel и т.д.
        console.log(`Event: ${eventName}`, data);
    };

    // ===== ЗАПУСК =====
    init();
});