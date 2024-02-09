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

function readAndWrite() {
    fetch("../json/mission.json") // Corrected path to fetch the JSON file
        .then(response => response.json()) // Convert the response to JSON
        .then(json => {
            const language = localStorage.getItem("language");
            const content = json[language][0]; // 현재 언어에 해당하는 첫 번째 콘텐츠 객체 가져오기

            // Update the HTML elements with the data using innerHTML to render <br> tags correctly
            document.getElementById("main_page_article_title").innerHTML = content.title;
            document.getElementById("main_page_article_body01").innerHTML = content.main_page_article_body01;
            document.getElementById("main_page_article_body02").innerHTML = content.main_page_article_body02;
        })
        .catch(error => console.error('Error:', error)); // Log any errors
}
