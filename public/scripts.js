var socket = io();
var currentLang = 'ko';

document.addEventListener('DOMContentLoaded', function () {
    var ids = ['index', 'about', 'CEO_profile', 'mission', 'contact_us', 'artists_notice', 
    'companys_notice', 'creators', 'profile', 'career', 'agency', 'production', 'notice', 'IR', 'shop'];
    
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                hrefLink(id);
            });
        }
    });

    readAndWriteCeoInfo();
});

function hrefLink(page) {
    var pageMap = {
        'index': '../index.html',
        'about': './html/about.html',
        'CEO_profile': './html/404.html',
        'mission': './html/about.html',
        'contact_us': './html/404.html',
        'artists_notice': './html/404.html',
        'companys_notice': './html/404.html',
        'creators': './html/404.html',
        'profile': './html/404.html',
        'career': './html/career.html',
        'agency': '.html/404.html',
        'production': './html/404.html',
        'notice': './html/404.html',
        'IR': './html/404.html',
        'shop': './html/404.html'
    };

    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}

function switchLanguage(lang) {
    currentLang = lang; // Set the current language based on the button clicked
    updateLanguageButtonStyles(lang); // Update button styles
    readAndWrite(); // Call the function to update the content based on the current language
}

function updateLanguageButtonStyles(selectedLang) {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    
    if (selectedLang === 'ko') {
        langKoButton.style.textDecoration = 'underline';
        langEnButton.style.textDecoration = 'none';
    } else {
        langKoButton.style.textDecoration = 'none';
        langEnButton.style.textDecoration = 'underline';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to language buttons
    document.getElementById('lang_ko').addEventListener('click', function(event) {
        event.preventDefault();
        switchLanguage('ko');
    });

    document.getElementById('lang_en').addEventListener('click', function(event) {
        event.preventDefault();
        switchLanguage('en');
    });

    // Initialize default language button style
    updateLanguageButtonStyles('ko');

    // Load the default language content on initial page load
    readAndWrite();
});
