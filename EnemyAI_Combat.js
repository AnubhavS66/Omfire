// --- Om Fire: Enemy AI & Bullet Interaction ---

function enemyBehavior() {
    // 1. Dushman Player ko dhundega
    let distanceToPlayer = getDistance(enemy.pos, player.pos);

    if (distanceToPlayer < 500) { // Agar player range mein hai
        moveToward(player.pos, 100); // Player ki taraf badho
        
        // 2. Shooting Logic
        if (canShoot) {
            shootAtPlayer();
            startCooldown(2); // 2 second ka gap goli ke beech mein
        }
    }
}

// 3. Bullet Collision (Jab goli dushman ko lage)
function onBulletHit(target) {
    if (target.tag == "Enemy") {
        target.health -= global.damage_power; // Hero ki ability ke hisaab se damage
        spawnEffect("Blood_Spark", target.x, target.y);
        
        if (target.health <= 0) {
            target.destroy();
            global.kills += 1;
            checkWinCondition();
        }
    }
}

// 4. Win Condition
function checkWinCondition() {
    if (global.kills >= 10) { // Maano 10 kills par jeet
        changeScene("GameOver");
        setGlobalVariable("Result", "Winner");
    }
}
