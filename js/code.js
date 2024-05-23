document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeSlider = document.getElementById('volume');
    const volumeLabel = document.getElementById('volume-label');

    const albumArt = document.getElementById('album-art');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const songDuration = document.getElementById('song-duration');

    let isPlaying = false;
    let currentTrack = 0;

    const tracks = [
        {
            "name": "Extasy",
            "artist": "Myke Towers",
            "path": "../src/Myke Towers - EXTASY.mp3",
            "duration": "3:40",
            "img":"../img/extasy-myke.jpeg"
        },
        {
            "name": "Lonely Night",
            "artist": "The Weeknd",
            "path": "../src/Lonely Night .mp3",
            "duration": "3:40",
            "img":"../img/lonely-night.jpeg"
        },
        {
            "name": "Quizas,tal vez",
            "artist": "Eladio Carrion",
            "path": "../src/Eladio Carrión - Quizás, Tal Vez .mp3",
            "duration": "3:40",
            "img":"../img/quizas-tal-vez.jpg"
        }
    ];

    const audio = new Audio(tracks[currentTrack].path);

    function loadTrack(trackIndex) {
        const track = tracks[trackIndex];
        albumArt.src = track.img;
        songTitle.textContent = track.name;
        artistName.textContent = track.artist;
        songDuration.textContent = track.duration;
        audio.src = track.path;
    }

    playButton.addEventListener('click', function() {
        if (isPlaying) {
            playButton.innerHTML = '&#9654;'; // Play icon
            audio.pause();
        } else {
            playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
            audio.play();
        }
        isPlaying = !isPlaying;
    });

    prevButton.addEventListener('click', function() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audio.play();
        }
    });

    nextButton.addEventListener('click', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audio.play();
        }
    });

    volumeSlider.addEventListener('input', function() {
        const volume = volumeSlider.value;
        volumeLabel.textContent = volume;
        audio.volume = volume / 100;
    });

    loadTrack(currentTrack);
});
