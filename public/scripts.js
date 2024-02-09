var socket = io();

// event lisner for navigating the web-page
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
});

// pageload logic
function hrefLink(page) {
    var pageMap = {
        'index': '../index.html',
        'about': '/html/about.html',
        'CEO_profile': '/html/404.html',
        'mission': '/html/about.html',
        'contact_us': '/html/404.html',
        'artists_notice': '/html/404.html',
        'companys_notice': '/html/404.html',
        'creators': '/html/404.html',
        'profile': '/html/404.html',
        'career': '/html/career.html',
        'agency': '/html/404.html',
        'production': '/html/404.html',
        'notice': '/html/404.html',
        'IR': '/html/404.html',
        'shop': '/html/404.html'
    };

    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // 언어 버튼에 이벤트 리스너 추가
    document.getElementById('lang_ko').addEventListener('click', function () {
        setLanguage("ko");
    });

    document.getElementById('lang_en').addEventListener('click', function () {
        setLanguage("en");
    });

    // 페이지 로드 시 저장된 언어 설정에 따라 언어 버튼 스타일 업데이트
    updateLanguageButtonStyles();

    // 페이지 로딩 시 기본 언어 컨텐츠 로드
    readAndWrite();
});

function setLanguage(languageOnClick) {
    // 언어 설정 저장
    localStorage.setItem("language", languageOnClick);

    // 언어 버튼 스타일 업데이트
    updateLanguageButtonStyles();

    // 언어 변경에 따른 페이지 컨텐츠 업데이트
    readAndWrite();
}

function updateLanguageButtonStyles() {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    var currentLang = localStorage.getItem("language")

    if (localStorage.getItem("language") == null) {
        localStorage.setItem("language", "ko");
    }

    if (currentLang === "ko") {
        langKoButton.style.textDecoration = 'underline';
        langEnButton.style.textDecoration = 'none';
    } else {
        langKoButton.style.textDecoration = 'none';
        langEnButton.style.textDecoration = 'underline';
    }

    readAndWrite();
}
