var socket = io();

document.addEventListener('DOMContentLoaded', function () {
    // localStorage에 'language' 설정이 없으면 기본값으로 'ko' 설정
    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "ko");
    }

    // 언어 변경 버튼에 대한 이벤트 리스너 추가
    document.getElementById('lang_ko').addEventListener('click', function () {
        setLanguage("ko");
    });
    document.getElementById('lang_en').addEventListener('click', function () {
        setLanguage("en");
    });

    // 페이지 로드 시 언어 버튼 스타일과 콘텐츠 업데이트
    updateLanguageButtonStyles();
    readAndWrite();

    // 페이지 내비게이션을 위한 이벤트 리스너
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

// 선택된 언어로 localStorage 업데이트 및 페이지 업데이트 함수
function setLanguage(languageOnClick) {
    localStorage.setItem("language", languageOnClick); // 언어 설정 저장
    updateLanguageButtonStyles(); // 언어 버튼 스타일 업데이트
    readAndWrite(); // 콘텐츠 업데이트
}

// 언어 버튼 스타일을 현재 설정된 언어에 따라 업데이트하는 함수
function updateLanguageButtonStyles() {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    var currentLang = localStorage.getItem("language"); // 현재 언어 설정 가져오기

    // 현재 언어 설정에 따라 버튼 스타일 조정
    langKoButton.style.textDecoration = currentLang === "ko" ? 'underline' : 'none';
    langEnButton.style.textDecoration = currentLang === "en" ? 'underline' : 'none';
}
