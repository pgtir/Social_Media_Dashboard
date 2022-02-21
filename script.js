const themeSwitcher =  document.querySelector('.theme-switcher');
const toggler =  document.querySelector('.toggler');
const themeName =  document.querySelector('.theme-name');

const body = document.body;
themeSwitcher.addEventListener('click', function() {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        toggler.style.transform = 'translateX(27.5px)';
        themeName.innerHTML = 'Light Mode';

    } else {
        body.classList.replace('light', 'dark');
        toggler.style.transform = 'translateX(0)';
        themeName.innerHTML = 'Dark Mode';

    }
});