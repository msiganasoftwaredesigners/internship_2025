// Smooth page entrance animations
document.addEventListener('DOMContentLoaded', function() {
    // Add page entrance class to main content
    const mainContent = document.getElementById('general');
    if (mainContent) {
        mainContent.classList.add('page-entrance');
    }
    
    // Add animate-item class to list items for staggered animation
    const listItems = document.querySelectorAll('ol li');
    listItems.forEach(item => {
        item.classList.add('animate-item');
    });
    
    // Trigger entrance animation after a short delay
    setTimeout(() => {
        if (mainContent) {
            mainContent.classList.add('loaded');
        }
        
        // Stagger the list item animations
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, 200 + (index * 150)); // 200ms initial delay, then 150ms between each item
        });
    }, 100);
    
    
    // Smooth scroll behavior for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add intersection observer for elements that come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-item');
    animateElements.forEach(el => observer.observe(el));
});
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
let isFirstActive = true;

// Set initial state
arrow1.style.transform = 'translateX(0)'; // Start at center, visible
arrow1.style.opacity = '1';
arrow2.style.transform = 'translateX(-2rem)'; // Start hidden on left
arrow2.style.opacity = '0';

document.querySelector('.hover-area').addEventListener('mouseenter', () => {
  if (isFirstActive) {
    // First: Current arrow (arrow1) slides out to the right and disappears
    arrow1.style.transform = 'translateX(2rem)';
    arrow1.style.opacity = '0';
    
    // Then: New arrow (arrow2) slides in from left to exact center position
    setTimeout(() => {
      arrow2.style.transform = 'translateX(0)'; // Exactly center
      arrow2.style.opacity = '1';
    }, 200); // Wait for first arrow to move out completely
    
    // Finally: Reset first arrow to far left for next cycle
    setTimeout(() => {
      arrow1.style.transform = 'translateX(-2rem)'; // Far left, ready for next cycle
      arrow1.style.opacity = '0';
    }, 400);
    
  } else {
    // First: Current arrow (arrow2) slides out to the right and disappears
    arrow2.style.transform = 'translateX(2rem)';
    arrow2.style.opacity = '0';
    
    // Then: New arrow (arrow1) slides in from left to exact center position
    setTimeout(() => {
      arrow1.style.transform = 'translateX(0)'; // Exactly center
      arrow1.style.opacity = '1';
    }, 200); // Wait for first arrow to move out completely
    
    // Finally: Reset second arrow to far left for next cycle
    setTimeout(() => {
      arrow2.style.transform = 'translateX(-2rem)'; // Far left, ready for next cycle
      arrow2.style.opacity = '0';
    }, 400);
  }
  
  // Toggle for next hover
  isFirstActive = !isFirstActive;
});

document.querySelector('.hover-area').addEventListener('mouseleave', () => {
  // Do nothing - arrows stay in their positions
});