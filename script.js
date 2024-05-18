let homeScore = 0;
let guestScore = 0;
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("quest-score");
const addHomeBtn = document.getElementById("add-home");
const addGuestBtn = document.getElementById("add-guest");

addGuestBtn.addEventListener("click", () => {
    guestScore++;
    guestScoreEl.textContent = guestScore;
})

addHomeBtn.addEventListener("click", () => {
    homeScore++;
    homeScoreEl.textContent = homeScore;
})

document.getElementById("reset-btn").addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
})


