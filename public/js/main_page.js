function readAndWrite() {
    fetch("../json/main_page.json") // JSON 파일 위치
        .then(response => response.json()) // 응답을 JSON으로 변환
        .then(json => {
            const language = localStorage.getItem("language");
            const content = json[language][0]; // 현재 언어에 해당하는 첫 번째 콘텐츠 객체 가져오기

            // 페이지 요소에 콘텐츠 삽입
            document.getElementById("main_page_article_title").innerHTML = content.title;
            document.getElementById("main_page_article_body01").innerHTML = content.main_page_article_body01;
            document.getElementById("main_page_article_body02").innerHTML = content.main_page_article_body02;
        })
        .catch(error => console.error('Error:', error)); // 오류 처리
}
