// Om Fire - Core Movement & Combat System
const SPEED = 250;
const BULLET_SPEED = 600;

function playerMovement(joystickX, joystickY) {
    // Top-down movement logic
    let velocityX = joystickX * SPEED;
    let velocityY = joystickY * SPEED;
    applyPhysics(velocityX, velocityY);
}

function shootAgniban() {
    // Projectile spawning logic
    spawnObject("Agniban", player.pos.x, player.pos.y);
    playSound("fire_sound");
}

function checkDamage(enemy) {
    if (collision(player, enemy)) {
        player_hp -= 10;
        if (player_hp <= 0) changeScene("GameOver");
    }
}
