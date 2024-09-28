let names = [];
let scores = [];

const $ = (id) => document.getElementById(id);

// Display the results (average and highest score)
function displayResults() {
    let total = 0;
    let highestScore = 0;
    let highestName = "";

    // Calculate total and find the highest score
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestName = names[i];
        }
    }

    const averageScore = total / scores.length;

    // Display results
    $("results").innerHTML = `
        <h2>Results</h2>
        <p>Average score = ${averageScore.toFixed(2)}</p>
        <p>High score = ${highestName} with a score of ${highestScore}</p>
    `;
}

// Display the names and scores in the table
function displayScores() {
    const table = $("scores_list");
    
    // Clear previous table rows except for the header
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;

    for (let i = 0; i < names.length; i++) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = names[i];

        const scoreCell = document.createElement("td");
        scoreCell.textContent = scores[i];

        row.appendChild(nameCell);
        row.appendChild(scoreCell);

        table.appendChild(row);
    }
}

// Add a new score to the array
function addScore() {
    const name = $("name").value.trim();
    const score = parseInt($("score").value);

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score between 0 and 100.");
        return;
    }

    names.push(name);
    scores.push(score);

    // Clear input fields and focus on the name field
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
}

// Attach event listeners to buttons
window.onload = () => {
    $("add").onclick = addScore;
    $("displayResults").onclick = displayResults;
    $("displayScores").onclick = displayScores;

    $("name").focus();
};
