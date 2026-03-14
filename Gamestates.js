// --- Scene & State Manager ---

function initGame() {
    global.player_hp = 100;
    global.is_game_over = false;
    loadScene("Battlefield");
}

function update() {
    // Agar player ki health khatam toh Game Over
    if (global.player_hp <= 0 && !global.is_game_over) {
        global.is_game_over = true;
        loadScene("GameOver");
    }

    // Zone Shrinking (Battle Royale feel)
    if (currentTime > zoneTimer) {
        shrinkZone();
    }
}
