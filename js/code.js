document.addEventListener('DOMContentLoaded', function () {
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
            "name": "Lonely Night",
            "artist": "The Weeknd",
            "path": "src/Lonely Night .mp3",
            "duration": "3:20",
            "img": "../img/lonely-night.jpeg"
        },

        {
            "name": "Lady Hear Me Tonight",
            "artist": "Modjo",
            "path": "src/Modjo - Lady (Hear Me Tonight).mp3",
            "duration": "3:40",
            "img": "../img/Lady-Hear-Me-Tonight.jpg"
        },
        {
            "name": "Baby I'm Yours",
            "artist": "Breakbot",
            "path": "src/Baby I'm Yours.mp3",
            "duration": "3:00",
            "img": "../img/baby-im-yours.jpg"
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


    playButton.addEventListener('click', function () {
        if (isPlaying) {
            playButton.innerHTML = '<i class="material-symbols-outlined" style="font-size: 70px;">play_circle</i>';
            audio.pause();
        } else {
            playButton.innerHTML = '<i class="material-symbols-outlined" style="font-size: 70px;">pause_circle</i>';
            audio.play();
        }
        isPlaying = !isPlaying;
    });
    
    prevButton.addEventListener('click', function () {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audio.play();
        }
    });

    nextButton.addEventListener('click', function () {
        currentTrack = (currentTrack + 1) % tracks.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audio.play();
        }
    });

    volumeSlider.addEventListener('input', function () {
        const volume = volumeSlider.value;
        volumeLabel.textContent = volume;
        audio.volume = volume / 100;
    });

    loadTrack(currentTrack);
});