function showDiv1() {
    document.getElementById("polski").style.display = "block";
    playPol("audioPL");
}
function showDiv2() {
    document.getElementById("ruski").style.display = "block";
    playRus("audioRU");
}
function showDivReset() {
    document.getElementById("polski").style.display = "none";
    document.getElementById("ruski").style.display = "none";
    stopPol("audioPL");
    stopRus("audioRU");
}
function playPol() {
    var audioPol = document.getElementById("audioPL");
    audioPol.play("audioPL");
}
function stopPol() {
    var audioPol = document.getElementById("audioPL");
    document.getElementById("audioPL").src = "music/polak.mp3";
    audioPol.pause("auidoPL");
}
function playRus() {
    var audioRus = document.getElementById("audioRU");
    audioRus.play("auidoRU");
}
function stopRus() {
    var audioRus = document.getElementById("audioRU");
    document.getElementById("audioRU").src = "music/hymnzsrr.mp3";
    audioRus.pause("audioRU");
}