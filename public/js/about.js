function readAndWrite() {
    fetch("../json/about.json") // Corrected path to fetch the JSON file
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
