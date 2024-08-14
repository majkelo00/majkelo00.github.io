document.addEventListener('DOMContentLoaded', function () {
    // Obsługa pierwszego hasła
    document.getElementById('accept-btn').addEventListener('click', function () {
        var password = document.getElementById('password').value;
        if (password === 'brzoza-14.08.2023') { // Zmień 'twojehaslo' na odpowiednie hasło
            document.getElementById('auth-section').style.display = 'none';
            document.getElementById('login-instruction').style.display = 'none';
            document.getElementById('content-section').style.display = 'block';
        } else {
            alert('Nieprawidłowe hasło! W razie problemów call me:)');
        }
    });

    // Ukrywanie i pokazywanie hasła
    var passwordField = document.getElementById('password');
    var togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('mousedown', function () {
        passwordField.type = 'text';
    });

    togglePasswordButton.addEventListener('mouseup', function () {
        passwordField.type = 'password';
    });

    togglePasswordButton.addEventListener('mouseleave', function () {
        passwordField.type = 'password';
    });

    // Dodajemy obsługę dotyku dla urządzeń mobilnych
    togglePasswordButton.addEventListener('touchstart', function () {
        passwordField.type = 'text';
    });

    togglePasswordButton.addEventListener('touchend', function () {
        passwordField.type = 'password';
    });

    // Przycisk "Przejdź dalej" wyświetlający album
    var nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            // Ukryj poprzednią zawartość (sekcję z filmem)
            document.getElementById('content-section').style.display = 'none';

            // Pokaż nową zawartość (album ze zdjęciami)
            document.getElementById('photo-album').style.display = 'block';
        });
    } else {
        console.error('Element #next-btn nie został znaleziony.');
    }

    // Album zdjęć
    var images = [
        {
            src: 'images/photo1.png',
            caption: 'Czy wiesz, że współrzędne naszego poznania to: 52°08\'04.1"N 19°55\'59.2"E'
        },
        {
            src: 'images/photo2.png',
            caption: 'Numerologia dnia którego się poznaliśmy wynosi 2 (14.08.2023 czyli 1+4+0+8+2+0+2+3 = 20 czyli 2+0 = 2). A co oznacza ta dwójka? Dwójka w numerologii oznacza harmonijne uzupełnianie się przeciwieństw, równowagę sił i odmienności. W tarocie dwójkę symbolizuje Kapłanka, a w astrologii liczbie dwa odpowiada Księżyc. Dwójka to także symbol relacji między ludźmi, przez co czasem postrzegana jest jako uosobienie nierozerwalnej więzi ciała i ducha'
        },
        {
            src: 'images/photo3.jpg',
            caption: '14 sierpnia 2023 roku słońce znajdowało się w znaku Lwa, co jest szczególnie korzystnym czasem na wyrażanie kreatywności, pewności siebie oraz odwagę.'
        },
        {
            src: 'images/photo4.jpg',
            caption: '14 sierpnia 2023 roku obchodzimy w Polsce Dzień Energetyka!'
        },
        {
            src: 'images/photo5.jpg',
            caption: 'Pigwa pospolita w 100 g owoców zawiera około 15 mg witaminy C. Obfituje także w antyoksydanty i minerały niezbędne do prawidłowego funkcjonowania organizmu. Związki te silnie wspierają układ odpornościowy w walce z licznymi infekcjami, przeziębieniem i grypą. Prawidłowe działanie układu odpornościowego wspierają także zawarte w pigwie witaminy z grupy B.'
        },
        {
            src: 'images/photo6.jpg',
            caption: 'Słyszałaś kiedyś pojęcie efekt motyla? Efekt motyla to pojęcie z teorii chaosu, które opisuje, jak małe zmiany w początkowych warunkach systemu mogą prowadzić do dużych, nieprzewidywalnych skutków w przyszłości. A jak to się ma do nas? A tak, że miało nas tego dnia nie być na imprezie, a jednak coś tchnęło nas, żeby jechać do tej Łodzi. Gdyby nie ta mała decyzja to najprawdopodobniej teraz byśmy nawet nie wiedzieli o swoich istnieniu:)'
        },
        {
            src: 'images/photo7.jpg',
            caption: 'Jest godzina 15:08. A ja właśnie kończę robić stronę i wrzucam ją na sieć. Oby się udało, bo nie mogę się doczekać, aż to zobaczysz.'
        }

    ];

    var currentIndex = 0;

    var photoElement = document.getElementById('photo');
    var captionElement = document.getElementById('caption');
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn1 = document.getElementById('next-btn1');

    function updateAlbum() {
        photoElement.src = images[currentIndex].src;
        captionElement.textContent = images[currentIndex].caption;
    }

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateAlbum();
    });

    nextBtn1.addEventListener('click', function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateAlbum();
        } else {
            window.location.href = 'w3b2.html'; // Przekierowanie na stronę koniec.html
        }
    });

    // Initial load
    updateAlbum();
});