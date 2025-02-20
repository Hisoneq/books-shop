export function setupNavigation() {
    const navItems = document.querySelectorAll('.header_nav li');

    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.header_nav li').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            document.getElementById(item.getAttribute('data-section')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}