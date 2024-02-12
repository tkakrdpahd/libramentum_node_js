var socket = io();

function initializePage() {
    setupPageNavigation();
    setupLanguageSwitching();
    headerNav();
    if( typeof setupPageCareer == 'function' ) {
        setupPageCareer();
    } else {
        
    }
}

function setupPageNavigation() {
    var ids = [
        'index', 'about', 'CEO_profile', 'mission', 'contact_us', 'artists_notice', 
        'companys_notice', 'creators', 'profile', 'career', 'agency', 'production', 'notice', 'IR', 'shop'
    ];

    var pageMap = {
        'index': '../index.html',
        'about': '/html/about.html',
        'CEO_profile': '/html/404.html',
        'mission': '/html/mission.html',
        'contact_us': '/html/contact_us.html',
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

    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                if (pageMap[id]) {
                    window.location.href = pageMap[id];
                }
            });
        }
    });
}

function headerNav() {
    // header 요소를 선택
    var header = document.querySelector('header');
    // 모든 h3 요소를 선택
    var h3s = document.querySelectorAll('.navigation_bar h3');

    // header에 mouseenter 이벤트 리스너 추가
    header.addEventListener('mouseenter', function() {
        // 마우스가 header 위에 있을 때 모든 h3 요소를 보이게 함
        h3s.forEach(function(h3) {
            h3.style.opacity = 1;
            h3.style.paddingBottom = '0.65vw';
            h3.style.transitionDuration = '300ms';
        });
    });

    // header에 mouseleave 이벤트 리스너 추가
    header.addEventListener('mouseleave', function() {
        // 마우스가 header를 떠났을 때 모든 h3 요소를 숨김
        h3s.forEach(function(h3) {
            h3.style.opacity = 0;
            h3.style.padding = 0;
            h3.style.transitionDuration = '300ms';
        });
    });
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
}

// 언어 설정 저장 및 업데이트
function setLanguage(language) {
    localStorage.setItem("language", language);
    updateLanguageButtonStyles();
}

// 언어 버튼 스타일 업데이트
function updateLanguageButtonStyles() {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    var currentLang = localStorage.getItem("language") || "ko";

    langKoButton.style.textDecoration = currentLang === "ko" ? 'underline' : 'none';
    langEnButton.style.textDecoration = currentLang === "en" ? 'underline' : 'none';
}

// 페이지 로드 완료 시 초기화 함수 실행
document.addEventListener('DOMContentLoaded', initializePage);
