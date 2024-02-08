function readAndWrite() {
    fetch("/json/about.json") // Corrected path to fetch the JSON file
        .then(response => response.json()) // Convert the response to JSON
        .then(json => {
            // Access the object for the current language
            const content = json[currentLang][0];

            // Update the HTML elements with the data using innerHTML to render <br> tags correctly
            document.getElementById("main_page_article_title").innerHTML = content.title;
            document.getElementById("main_page_article_body01").innerHTML = content.main_page_article_body01;
            document.getElementById("main_page_article_body02").innerHTML = content.main_page_article_body02;
        })
        .catch(error => console.error('Error:', error)); // Log any errors
}
