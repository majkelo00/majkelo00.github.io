document.addEventListener('DOMContentLoaded', function () {
    // Data rozpoczęcia liczenia (13 sierpnia 2024)
    var startDate = new Date('August 14, 2023 20:00:00').getTime();

    // Funkcja aktualizująca odliczanie
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = now - startDate;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    // Aktualizuj odliczanie co sekundę
    setInterval(updateCountdown, 1000);
});
