document.addEventListener('DOMContentLoaded', function() {
    const loopImages = document.querySelectorAll('.media1 > img[data-base-path], .media3 > img[data-base-path]');
    let currentIndex = 0;

    function changeImage() {
        loopImages.forEach(loopImage => {
          const basePath = loopImage.dataset.basePath;
          const currSrc = loopImage.src;
          const frameIndex = currentIndex % 2 === 0 ? 1 : 2;
          const fileExtension = currSrc.includes('.png') ? 'png' : 'jpg';
          loopImage.src = `${basePath}frame${frameIndex}.${fileExtension}`;
        });
        currentIndex++;
    }

    setInterval(changeImage, 1000);


    
    const videoPlayers = [
        document.getElementById('videoPlayer1'),
        document.getElementById('videoPlayer2'),
        document.getElementById('videoPlayer3'),
        document.getElementById('videoPlayer4'),
        document.getElementById('videoPlayer5')
      ];
      
      function handleClickableImage(videoPlayer, image) {
        const clickableImages = document.querySelectorAll(`.${image.parentNode.parentNode.classList[0]} .clickable-image`);
      
        clickableImages.forEach(img => {
          img.classList.remove('clickable-image-selected');
        });
      
        image.classList.add('clickable-image-selected');
        const videoSrc = image.dataset.video;
        videoPlayer.src = videoSrc;
        videoPlayer.load();
      }
      
      videoPlayers.forEach((videoPlayer, index) => {
        const clickableImages = document.querySelectorAll(`.row1:nth-child(${index + 3}) .clickable-image`);
      
        clickableImages.forEach(image => {
          image.addEventListener('click', () => handleClickableImage(videoPlayer, image));
        });
      });
});