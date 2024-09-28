document.addEventListener("DOMContentLoaded", function () {
  // Get the paragraph element
  const paragraph = document.querySelector("p");
  const paragraphText = paragraph.innerHTML;
  const heading = document.querySelector("h1");

  // Task 1: Highlight words over 8 characters long
  function highlightLongWords(text) {
    return text
      .split(" ")
      .map((word) => {
        return word.length > 8
          ? `<span style="background-color: yellow;">${word}</span>`
          : word;
      })
      .join(" ");
  }

  paragraph.innerHTML = highlightLongWords(paragraphText);

  // Task 2: Add a link back to the source of the text
  const link = document.createElement("a");
  link.href = "https://google.com";
  link.textContent = "Source: Google";
  link.style.display = "block";
  link.style.marginTop = "10px";
  paragraph.after(link);

  // Task 3: Split each new sentence onto a separate line
  function splitSentences(text) {
    return text.replace(/([.?!])\s*(?=[A-Z])/g, "$1<br><br>");
  }

  paragraph.innerHTML = splitSentences(paragraph.innerHTML);

  // Task 4: Count the number of words in the paragraph
  function countWords(text) {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  }

  const wordCount = countWords(paragraphText);
  const wordCountElement = document.createElement("p");
  wordCountElement.textContent = `Word Count: ${wordCount}`;
  heading.after(wordCountElement);
});
