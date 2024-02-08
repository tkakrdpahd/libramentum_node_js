function readAndWrite() {
    // Correct the path to the JSON file if necessary. This path assumes the HTML file is located one directory above the 'json' directory.
    fetch("/json/ceos_profile.json") // Fetch the JSON file
        .then(response => response.json()) // Convert the response to JSON
        .then(json => {
            // Access the first object within the current language array of the JSON
            const content = json[currentLang][0];

            // Update the HTML elements with the data
            document.getElementById("ceo_name").innerHTML = content.name;
            document.getElementById("ceo_education").innerHTML = content.education;
            document.getElementById("ceo_education_01").innerHTML = content.education_01;
            document.getElementById("ceo_education_02").innerHTML = content.education_02;
        })
        .catch(error => console.error('Error:', error)); // Log any errors
}
