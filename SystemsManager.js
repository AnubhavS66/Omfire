// --- Om Fire: Systems & Rules Manager ---

// 1. Ammo System
function handleShooting() {
    if (global.current_ammo > 0) {
        fireWeapon();
        global.current_ammo -= 1;
    } else {
        playSound("empty_click");
        reloadWeapon();
    }
}

function reloadWeapon() {
    console.log("Reloading...");
    wait(2000); // 2 second reload time
    global.current_ammo = 30; // Ammo full
}

// 2. Battle Royale Zone (Shrinking Area)
var zoneSize = 2000;
function updateZone() {
    if (zoneSize > 100) {
        zoneSize -= 0.5; // Zone dhire-dhire chhota hoga
        setObjectScale("Zone_Circle", zoneSize);
    }

    // Zone se bahar damage
    if (getDistance(player.pos, center.pos) > zoneSize) {
        global.player_hp -= 0.1; // Zone ke bahar HP kam hogi
    }
}

// 3. UI Sync (Screen par HP aur Ammo dikhana)
function updateUI() {
    setText("HP_Text", "Health: " + Math.floor(global.player_hp));
    setText("Ammo_Text", "Ammo: " + global.current_ammo + "/30");
}
