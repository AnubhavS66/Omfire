// --- Page Transitions ---
function onSplashStart() {
    wait(3000); // 3 sec loading
    changeScene("Lobby");
}

function onStartButtonClick() {
    changeScene("CharSelect");
}

function onHeroSelected(heroName) {
    global.selected_hero = heroName;
    changeScene("Battlefield");
}

function onDeath() {
    changeScene("GameOver");
}
