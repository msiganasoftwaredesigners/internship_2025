// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // Toggle hamburger animation
      this.classList.toggle('is-active');

      // Toggle mobile menu visibility
      mainNav.classList.toggle('open');

      // Update aria-expanded
      const isExpanded = mainNav.classList.contains('open');
      this.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Desktop dropdown functionality
  const dropdownButtons = document.querySelectorAll('[data-dropdown]');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const menuType = this.getAttribute('data-dropdown');
      const targetMenu = document.getElementById(menuType + '-menu');

      // Close all other menus first
      document.querySelectorAll('.mega-menu').forEach(menu => {
        if (menu !== targetMenu) {
          menu.classList.remove('active');
          document.getElementById('main-nav').after(menu);
          const otherButton = document.querySelector(`[data-dropdown="${menu.id.replace('-menu', '')}"]`);
          if (otherButton) {
            otherButton.classList.remove('active');
            otherButton.parentElement.classList.remove('active');
            otherButton.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current menu
      if (targetMenu) {
        targetMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.parentElement.classList.toggle('active');
        this.setAttribute('aria-expanded', targetMenu.classList.contains('active'));
        if (targetMenu.classList.contains('active')) {
          this.parentElement.after(targetMenu);
        } else {
          document.getElementById('main-nav').after(targetMenu);
        }
      }
    });
  });

  // Close dropdowns when clicking outside or inside
  document.addEventListener('click', function(e) {
    const isDropdownButton = e.target.closest('[data-dropdown]');
    const isInsideMenu = e.target.closest('.mega-menu');
    const isMobileMenuButton = e.target.closest('#mobile-menu-button');
    const isInsideMainNav = e.target.closest('#main-nav');

    if (!isDropdownButton && !isMobileMenuButton) {
      document.querySelectorAll('.mega-menu').forEach(menu => {
        menu.classList.remove('active');
        document.getElementById('main-nav').after(menu);
      });

      dropdownButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.classList.remove('active');
        button.parentElement.classList.remove('active');
      });

      // Close mobile menu if open
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        if (mobileMenuButton) {
          mobileMenuButton.classList.remove('is-active');
          mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // Close dropdowns on scroll for large screens
  window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1024) {
      document.querySelectorAll('.mega-menu').forEach(menu => {
        menu.classList.remove('active');
        document.getElementById('main-nav').after(menu);
      });

      dropdownButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.classList.remove('active');
        button.parentElement.classList.remove('active');
      });
    }
  });

  // No need to close menu on nav link clicks since menu is always visible
});

// Handle escape key to close dropdowns
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.mega-menu').forEach(menu => {
      menu.classList.remove('active');
    });

    document.querySelectorAll('[data-dropdown]').forEach(button => {
      button.setAttribute('aria-expanded', 'false');
    });

    // Close mobile menu
    if (mainNav && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      if (mobileMenuButton) {
        mobileMenuButton.classList.remove('is-active');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    }
  }
});
