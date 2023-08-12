const article = document.querySelector("article");

// 'document.querySelector' may return null if the selector matches nothing.
// the if statement below checks to see if a valid selector has been stored in the 'article' variable
if (article) {
    const text = article.textContent; //then, a new variable is created that stores the textContent property of that selector
    const wordMatchRegExp = /[^\s]+/g; //Regex (regular expression) Learn More; This regex searches globally for any input that is a non-white space
    const words = text.matchAll(wordMatchRegExp); // this searches the article's text content for any input that matches the Regex.
    const wordCount = [...words].length; // the matchAll function's data is stored in an array using a spread operator to capture the length property
    const readingTime = Math.round(wordCount / 200); // 
    const badge = document.createElement("p"); //Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption"); //adds the 'color-seconary-text' class and 'caption' type to the badge'sClasslist
    badge.textContent = `⏱️ ${readingTime} min read`;

    //support for API reference docs
    const heading = article.querySelector("h1"); //checks for 'header' selectors
    const date = article.querySelector("time")?.parentNode; //checks for 'time' selectors on the page

    (date ?? heading).insertAdjacentElement("afterend", badge); //if left operand is null, use right op, else use left
}