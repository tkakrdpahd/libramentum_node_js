var socket = io();

// 페이지 로드 시 필요한 모든 이벤트 리스너와 로직을 초기화하는 함수
function initializePage() {
    setupPageNavigation();
    setupLanguageSwitching();
    if( typeof setupPageCareer == 'function' ) {
        setupPageCareer();
    } else {
        
    }
}

// 웹 페이지 내비게이션을 위한 이벤트 리스너 설정
function setupPageNavigation() {
    var ids = [
        'index', 'about', 'CEO_profile', 'mission', 'contact_us', 'artists_notice', 
        'companys_notice', 'creators', 'profile', 'career', 'agency', 'production', 'notice', 'IR', 'shop'
    ];
    
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                hrefLink(id);
            });
        }
    });
}

// 페이지 이동 로직
function hrefLink(page) {
    var pageMap = {
        // 페이지 매핑 정보
    };

    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}

// 언어 전환 기능을 위한 이벤트 리스너 설정
function setupLanguageSwitching() {
    document.getElementById('lang_ko').addEventListener('click', function () {
        setLanguage("ko");
    });

    document.getElementById('lang_en').addEventListener('click', function () {
        setLanguage("en");
    });

    updateLanguageButtonStyles();
    loadContentBasedOnLanguage();
}

// 언어 설정 저장 및 업데이트
function setLanguage(language) {
    localStorage.setItem("language", language);
    updateLanguageButtonStyles();
    loadContentBasedOnLanguage();
}

// 언어 버튼 스타일 업데이트
function updateLanguageButtonStyles() {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    var currentLang = localStorage.getItem("language") || "ko";

    langKoButton.style.textDecoration = currentLang === "ko" ? 'underline' : 'none';
    langEnButton.style.textDecoration = currentLang === "en" ? 'underline' : 'none';
}

// 언어에 따라 콘텐츠 로드
function loadContentBasedOnLanguage() {
    // 해당하는 JSON 파일 및 요소 ID에 따라 적절한 로직 구현
}

// 페이지 로드 완료 시 초기화 함수 실행
document.addEventListener('DOMContentLoaded', initializePage);

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
        'agency': '/html/career.html',
        'production': '/html/career.html',
        'notice': '/html/404.html',
        'IR': '/html/404.html',
        'shop': '/html/404.html'
    };

    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}
