// --- Movement & Combat System ---
const SPEED_MODIFIER = 200;

function update() {
    if (global.is_game_active) {
        // 1. Movement
        let joyX = getJoystickX();
        let joyY = getJoystickY();
        movePlayer(joyX * SPEED_MODIFIER, joyY * SPEED_MODIFIER);

        // 2. Health Check
        if (global.player_hp <= 0) {
            onDeath();
        }
    }
}

// Firing Weapon
function shootAgniban() {
    let bullet = spawn("Bullet_Sprite");
    bullet.push(player.direction, 600); // Goli ki speed
}

// Enemy Hit Logic
function onBulletHitEnemy(enemy) {
    enemy.hp -= global.damage_power;
    if (enemy.hp <= 0) {
        enemy.destroy();
        global.kills++;
    }
}
