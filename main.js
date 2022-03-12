var playButton = document.querySelector(".play__button");
var videoContent = document.querySelector(".video__content");
var closeVideo = document.querySelector ("#close__video");

playButton.addEventListener("click",function () {
    videoContent.style.display = "flex"
})
closeVideo.addEventListener("click",function () {
    videoContent.style.display = "none"
})

