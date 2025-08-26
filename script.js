// Global variables
let currentStep = 1;
let totalSteps = 4;
let calculatorData = {
    type: null,
    billAmount: null,
    kwhUsage: null,
    roofType: null,
    orientation: null,
    spaceAvailable: true,
    financing: false,
    messenger: 'whatsapp'
};

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
    setupFormValidation();
    setupPhoneMask();
});

// Initialize calculator
function initializeCalculator() {
    updateProgress();
    showStep(1);
}

// Start calculator from hero section
function startCalculator() {
    document.getElementById('calculator').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Show specific step
function showStep(stepNumber) {
    // Hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`step${i}`).classList.remove('active');
    }
    
    // Show current step
    document.getElementById(`step${stepNumber}`).classList.add('active');
    
    // Update progress
    currentStep = stepNumber;
    updateProgress();
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const progress = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Шаг ${currentStep} из ${totalSteps}`;
}

// Select option (for step 1)
function selectOption(field, value) {
    calculatorData[field] = value;
    
    // Update UI to show selection
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => card.classList.remove('selected'));
    
    // Find and select the clicked card
    const clickedCard = event.currentTarget;
    clickedCard.classList.add('selected');
    
    // Auto-advance to next step after a short delay
    setTimeout(() => {
        nextStep();
    }, 500);
}

// Toggle option (for boolean fields)
function toggleOption(field, value) {
    calculatorData[field] = value;
    
    // Update UI
    const toggleBtns = event.currentTarget.parentElement.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Go to next step
function nextStep() {
    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

// Go to previous step
function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// Calculate results
function calculateResult() {
    // Validate current step
    if (!validateCurrentStep()) {
        return;
    }
    
    // Perform calculations
    const results = performCalculations();
    
    // Display results
    displayResults(results);
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Track analytics event
    trackEvent('calculator_completed', calculatorData);
}

// Validate current step
function validateCurrentStep() {
    let isValid = true;
    
    switch (currentStep) {
        case 2:
            const billAmount = document.getElementById('billAmount').value;
            const kwhUsage = document.getElementById('kwhUsage').value;
            
            if (!billAmount && !kwhUsage) {
                showError('Пожалуйста, укажите счет за электричество или потребление в кВт⋅ч');
                isValid = false;
            } else {
                calculatorData.billAmount = billAmount ? parseFloat(billAmount) : null;
                calculatorData.kwhUsage = kwhUsage ? parseFloat(kwhUsage) : null;
            }
            break;
            
        case 3:
            calculatorData.roofType = document.getElementById('roofType').value;
            calculatorData.orientation = document.getElementById('orientation').value;
            break;
            
        case 4:
            calculatorData.messenger = document.getElementById('messenger').value;
            break;
    }
    
    return isValid;
}

// Perform calculations based on input data
function performCalculations() {
    let power, savings, price, payback;
    
    // Calculate power based on electricity bill or kWh usage
    if (calculatorData.billAmount) {
        // Rough estimation: 1 MDL ≈ 0.5 kWh
        const estimatedKwh = calculatorData.billAmount * 0.5;
        power = Math.max(3, Math.min(10, estimatedKwh / 30)); // 3-10 kW range
    } else if (calculatorData.kwhUsage) {
        power = Math.max(3, Math.min(10, calculatorData.kwhUsage / 100)); // 3-10 kW range
    } else {
        power = 5; // Default value
    }
    
    // Adjust power based on object type
    if (calculatorData.type === 'business') {
        power *= 1.5; // Business typically needs more power
    }
    
    // Adjust power based on roof conditions
    if (calculatorData.orientation === 'south') {
        power *= 1.1; // South orientation is optimal
    } else if (calculatorData.orientation === 'unknown') {
        power *= 0.9; // Conservative estimate
    }
    
    // Calculate savings (rough estimation)
    const monthlyKwh = power * 120; // Average monthly production
    const electricityRate = 2.5; // MDL per kWh (approximate)
    savings = monthlyKwh * electricityRate * 12;
    
    // Calculate price (rough estimation)
    const pricePerKw = 8000; // MDL per kW (approximate)
    price = power * pricePerKw;
    
    // Calculate payback period
    payback = price / savings;
    
    return {
        power: power.toFixed(1),
        savings: Math.round(savings),
        price: Math.round(price),
        payback: payback.toFixed(1)
    };
}

// Display calculation results
function displayResults(results) {
    // Update result values
    document.getElementById('powerResult').textContent = `${results.power} кВт`;
    document.getElementById('savingsResult').textContent = `${results.savings.toLocaleString()} MDL`;
    document.getElementById('priceResult').textContent = `${results.price.toLocaleString()} MDL`;
    document.getElementById('paybackResult').textContent = `${results.payback} лет`;
    
    // Store results for form submission
    calculatorData.results = results;
}

// Setup form validation
function setupFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            submitForm();
        }
    });
}

// Validate contact form
function validateContactForm() {
    const phone = document.getElementById('phone').value;
    const agreement = document.getElementById('agreement').checked;
    
    if (!phone) {
        showError('Пожалуйста, укажите номер телефона');
        return false;
    }
    
    if (!agreement) {
        showError('Пожалуйста, согласитесь с политикой конфиденциальности');
        return false;
    }
    
    return true;
}

// Submit form
function submitForm() {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Отправляем...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        
        // Show success modal
        showSuccessModal();
        
        // Track conversion
        trackEvent('lead_generated', {
            ...calculatorData,
            phone: document.getElementById('phone').value,
            name: document.getElementById('name').value,
            contactMethod: document.getElementById('contactMethod').value
        });
        
        // Reset form
        document.getElementById('contactForm').reset();
        
    }, 2000);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// Show error message
function showError(message) {
    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: #ff3b30;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        margin: 16px 0;
        text-align: center;
        font-weight: 500;
    `;
    errorDiv.textContent = message;
    
    // Insert error message
    const currentStep = document.querySelector('.calc-step.active');
    currentStep.insertBefore(errorDiv, currentStep.firstChild);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Setup phone mask
function setupPhoneMask() {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // Limit to 8 digits (Moldova mobile format)
        if (value.length > 8) {
            value = value.slice(0, 8);
        }
        
        // Format as +373 XX XXX XXX
        if (value.length > 0) {
            value = '+373 ' + value;
        }
        
        e.target.value = value;
    });
}

// Scroll to calculator
function scrollToCalculator() {
    document.getElementById('calculator').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Track analytics events
function trackEvent(eventName, eventData) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Custom analytics
    console.log('Analytics Event:', eventName, eventData);
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when page loads
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add keyboard navigation for calculator
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && currentStep < totalSteps) {
        nextStep();
    } else if (e.key === 'Escape') {
        closeModal();
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentStep < totalSteps) {
            // Swipe up - next step
            nextStep();
        } else if (diff < 0 && currentStep > 1) {
            // Swipe down - previous step
            prevStep();
        }
    }
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                console.log('Page load time:', loadTime + 'ms');
                
                // Track performance metrics
                if (loadTime < 3000) {
                    trackEvent('fast_load_time', { loadTime });
                }
            }, 0);
        });
    }
}

// Initialize performance monitoring
measurePerformance();