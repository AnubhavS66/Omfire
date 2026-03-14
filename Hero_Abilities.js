// --- Abilities System ---
function initHeroPowers() {
    if (global.selected_hero == "Agni") {
        global.damage_power = 50; // High Damage
        global.player_speed = 200;
    } 
    else if (global.selected_hero == "Vayu") {
        global.damage_power = 20;
        global.player_speed = 400; // Extra Speed
    } 
    else if (global.selected_hero == "Moksha") {
        global.auto_heal = true; // Regenerate HP
    } 
    else if (global.selected_hero == "GLW") {
        global.shield_active = true; // Extra Armor
    }
}
