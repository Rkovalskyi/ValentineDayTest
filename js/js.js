function changeGifAndPlayMusic(newGifPath, musicPath) {
    document.getElementById('valentineGif').src = newGifPath;
    document.getElementById('backgroundMusic').src = musicPath;
    document.getElementById('backgroundMusic').play();
}
