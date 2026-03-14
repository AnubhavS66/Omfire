# Scene Navigation Logic

1. **Splash.scene** - Timer(3s) -> LoadScene("Lobby")
2. **Lobby.scene**
   - OnClick("Start") -> LoadScene("Battlefield")
   - OnClick("Heroes") -> LoadScene("CharSelect")
3. **Battlefield.scene**
   - OnPlayerDeath -> LoadScene("GameOver")
   - OnVictory -> ShowUI("Booyah")
