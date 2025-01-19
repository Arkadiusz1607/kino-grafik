document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Zapobiega domyślnemu działaniu formularza (czyli przeładowaniu strony)

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Prosty mechanizm logowania (w przyszłości może to być bardziej rozbudowane)
    if (login === "manakowalska" && password === "aa123456!") {
        // Jeśli login i hasło są poprawne, pokaż formularz dyspozycji
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.schedule-form').style.display = 'block';
        alert("Zalogowano pomyślnie! Wprowadź swoje dyspozycje.");
    } else {
        alert("Błędny login lub hasło!");
    }
});
