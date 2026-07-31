const auditButton = document.getElementById("auditButton");
const score = document.getElementById("score");

auditButton.addEventListener("click", function () {

    const websiteScore = Math.floor(Math.random() * 41) + 60;

    score.textContent =
        "Website Score: " + websiteScore + "/100";

});