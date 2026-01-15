// Load More Resources Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const resourceGrid = document.getElementById('resourceGrid');
    
    // Additional resources to load
    const additionalResources = [
        {
            title: "Employee Training Tracker",
            description: "Track the progress of your training programs with this comprehensive tracker template.",
            image: "https://www.thinkific.com/wp-content/uploads/2025/05/resources_employee_training_tracker_hero.webp",
            alt: "Employee Training Tracker"
        },
        {
            title: "Training Needs Assessment Template",
            description: "Don't reinvent the wheel! Make your assessment easier with this free toolkit.",
            image: "https://www.thinkific.com/wp-content/uploads/2025/05/resources_training_needs_assessment_template_survey_hero.webp",
            alt: "Training Needs Assessment Template"
        },
        {
            title: "Free Personal Branding Worksheet",
            description: "Think of your relationships with your customers as professional friendships.",
            image: "https://www.thinkific.com/wp-content/uploads/2025/06/personal-brand-worksheet.png",
            alt: "Personal Branding Worksheet"
        },
        {
            title: "Free Micro Teaching Lesson Plan Template",
            description: "What's inside this comprehensive micro teaching template for educators.",
            image: "https://www.thinkific.com/wp-content/uploads/2025/05/resources_micro_teaching_lesson_plan_template_hero.webp",
            alt: "Micro Teaching Lesson Plan Template"
        },
        {
            title: "Beyond the Stage: Speaking Revenue Guide",
            description: "Build your business step-by-step from business modeling to building your offer and funnel.",
            image: "https://www.thinkific.com/wp-content/themes/thinkific/assets/images/placeholder.png",
            alt: "Speaking Revenue Guide"
        },
        {
            title: "Ultimate Guide to Online Courses",
            description: "At Thinkific, we've helped tens of thousands of entrepreneurs create and sell more than $100 million in online courses.",
            image: "https://www.thinkific.com/wp-content/themes/thinkific/assets/images/placeholder.png",
            alt: "Ultimate Guide to Online Courses"
        }
    ];
    
    let currentResourceIndex = 0;
    const resourcesPerLoad = 4;
    
    function createResourceCard(resource) {
        return `
            <li class="overflow-hidden h-full">
                <a href="#" class="block h-full">
                    <div class="flex flex-col h-full border border-Gray border-[2px] rounded-[3px]">
                        <figure class="flex-shrink-0">
                            <img src="${resource.image}" 
                                alt="${resource.alt}" 
                                class="w-full h-48 object-cover">
                        </figure>
                        <div class="px-5 py-[30px] flex flex-col flex-grow">
                            <h2 class="text-2xl font-semibold text-SemiWhite mb-[10px] tracking-[-0.1px] leading-[27px]">
                                ${resource.title}
                            </h2>
                            <p class="text-md text-DarkWhite py-4 flex-grow">
                                ${resource.description}
                            </p>
                            <span class="text-sm font-medium group mt-auto">
                                Read resource
                                <span class="text-xl font-black inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1"><i class="uil uil-arrow-right"></i></span>
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        `;
    }
    
    function loadMoreResources() {
        // Change button to loading state
        loadMoreBtn.innerHTML = `
            Loading...
        `;
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay
        setTimeout(() => {
            const resourcesToLoad = additionalResources.slice(
                currentResourceIndex, 
                currentResourceIndex + resourcesPerLoad
            );
            
            // Add new resource cards to the grid
            resourcesToLoad.forEach(resource => {
                const resourceCard = createResourceCard(resource);
                resourceGrid.insertAdjacentHTML('beforeend', resourceCard);
            });
            
            currentResourceIndex += resourcesPerLoad;
            
            // Reset button state
            if (currentResourceIndex >= additionalResources.length) {
                // No more resources to load - hide the button completely
                loadMoreBtn.style.display = 'none';
            } else {
                // More resources available
                loadMoreBtn.innerHTML = 'Load More';
                loadMoreBtn.disabled = false;
            }
        }, 1500); // 1.5 second loading simulation
    }
    
    // Add click event listener to load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreResources);
    }
    
    // Newsletter Subscription Functionality
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(messageElement, hideElement) {
        messageElement.classList.remove('hidden');
        hideElement.classList.add('hidden');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageElement.classList.add('hidden');
        }, 5000);
    }
    
    function handleNewsletterSubmit(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            showMessage(errorMessage, successMessage);
            return;
        }
        
        // Change button to loading state
        subscribeBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-LightBlack inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Subscribing...
        `;
        subscribeBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            emailInput.value = '';
            subscribeBtn.innerHTML = 'Subscribe';
            subscribeBtn.disabled = false;
            
            // Show success message
            showMessage(successMessage, errorMessage);
        }, 2000);
    }
    
    // Add form submit listener
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});