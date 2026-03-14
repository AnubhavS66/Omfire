// --- Om Fire: Character Special Powers ---

function applyAbility(selectedChar) {
    switch(selectedChar) {
        
        case "Agni": // Damage Dealer
            global.bulletDamage = 50; // Normal se zyada damage
            global.playerSpeed = 200;
            console.log("Agni Ready: Double Damage Active!");
            break;

        case "Vayu": // The Speedster
            global.bulletDamage = 20;
            global.playerSpeed = 350; // Sabse tez bhagega
            global.canDoubleJump = true;
            console.log("Vayu Ready: High Speed & Double Jump!");
            break;

        case "Moksha": // The Healer
            global.bulletDamage = 25;
            global.playerSpeed = 200;
            // Special: Har 5 second mein 5 HP automatic badhegi
            startHealingTimer(5); 
            console.log("Moksha Ready: Self-Healing Active!");
            break;

        case "GLW": // The Tank (Shield)
            global.bulletDamage = 30;
            global.playerSpeed = 150; // Thoda bhari hai toh slow chalega
            global.shieldHP = 50; // Extra protection
            console.log("GLW Ready: Armor Shield Active!");
            break;
    }
}

// Moksha's Healing Logic
function startHealingTimer(amount) {
    setInterval(() => {
        if(global.playerHP < 100) {
            global.playerHP += amount;
        }
    }, 5000);
}
