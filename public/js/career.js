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

    //readAndWrite();
    readAndWrite();
}

function setupPageCareer() {
    console.log("called")
    var ids = [
        'a001', 'a002', // Agency 관련 ID
        'p001', 'p002', 'p003' // Production 관련 ID 추가
    ];
    
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                hrefLinkCareer();
                readIdx(id);
            });
        }
    });
}

function readAndWrite() {
    fetch("../json/career_detail.json")
        .then(response => response.json())
        .then(json => {
            const language = localStorage.getItem("language"); // 현재 언어 설정 가져오기
            const contents = json[language]; // 현재 언어에 해당하는 모든 콘텐츠 객체 배열 가져오기

            console.log(contents);

            for (let i = 0; i < contents.length; i++) {
                const content = contents[i]; // 현재 콘텐츠 객체
                let prefix = content.organization === 'Agency' ? 'a' : 'p'; // 조직에 따른 접두사 결정
                let idx = `${prefix}${content.idx}`; // 동적 id 생성

                let element = document.getElementById(idx);
                if (!element) {
                    // 해당 id를 가진 요소가 없으면 새 요소 생성
                    element = document.createElement('a'); // 'a' 태그 사용
                    element.href = "#"; // href 속성 추가
                    element.id = idx; // 생성된 요소에 id 설정

                    // prefix 값에 따라 적절한 부모 요소에 추가
                    if(prefix === 'a') {
                        document.getElementById('career_result_agency').appendChild(element);
                    } else {
                        document.getElementById('career_result_production').appendChild(element);
                    }
                }

                // 요소의 내용 업데이트
                element.innerHTML = `<h3>No. ${content.idx}</h3><h3 class="Job_title">${content.title}</h3>`;

                // 이벤트 리스너 추가
                element.addEventListener('click', function(event) {
                    event.preventDefault();
                    hrefLinkCareer();
                    readIdx(idx);
                });
            }
        })
        .catch(error => console.error('Error:', error)); // 오류 처리
}

function readIdx(id) {
    var organization = id.charAt(0) === 'a' ? 'Agency' : 'Production'; // 첫 글자에 따라 조직 결정
    var idx = id.substr(1); // 나머지 부분은 idx로 사용

    sessionStorage.setItem("organization", organization);
    sessionStorage.setItem("idx", idx);
}

function hrefLinkCareer() {
    var url = '../html/career_detail.html'; // URL 예시
    window.location.href = url; // 페이지 이동
}
