function setLanguage(languageOnClick) {

    localStorage.setItem("language", languageOnClick);

    updateLanguageButtonStyles();

    readAndWrite(sessionStorage.getItem("organization"), sessionStorage.getItem("idx"));
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

    readAndWrite(sessionStorage.getItem("organization"), sessionStorage.getItem("idx"));
}

function readAndWrite() {
    var idx = '001';
    var organization = 'agency';
    fetch("./refac.json") // JSON 파일 위치
        .then(response => response.json()) // 응답을 JSON으로 변환
        .then(json => {
            const language = localStorage.getItem("language"); // 현재 언어 설정 가져오기

            // JSON 배열을 순회하면서 조건에 맞는 객체 찾기
            let contentFound = false; // 조건에 맞는 콘텐츠를 찾았는지 여부를 나타내는 플래그
            json[language].forEach(content => {
                if (content.organization === organization && content.idx === idx) { // 조직과 idx가 매개변수와 일치하는 경우
                    // 페이지 요소에 기본 콘텐츠 삽입
                    document.getElementById("idx").innerText = content.idx;
                    document.getElementById("organization").innerText = content.organization;
                    document.getElementById("title").innerText = content.title;

                    // content 객체의 나머지 속성 순회
                    Object.entries(content).forEach(([key, value]) => {
                        if (!["idx", "organization", "title"].includes(key)) { // 기본 키를 제외한 속성에 대해 처리
                            const element = document.createElement('h5');
                            element.id = `${key}`; // 백틱(`)을 사용하여 문자열 템플릿을 적용
                            element.innerText = value;
                            document.querySelector('.career_detail').appendChild(element); // '.career_detail' 클래스를 가진 요소를 찾아 그 안에 새 요소를 추가
                        }
                    });

                    contentFound = true; // 조건에 맞는 콘텐츠를 찾음
                }
            });

            if (!contentFound) { // 조건에 맞는 콘텐츠를 찾지 못한 경우
                console.error('No content found for the specified organization and idx');
                // 필요한 경우, 사용자에게 적절한 메시지를 표시하거나 다른 처리를 수행할 수 있습니다.
            }
        })
        .catch(error => console.error('Error:', error)); // 오류 처리
}
