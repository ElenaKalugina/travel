const video = document.querySelector('[data-set="video"]');
const videoImg = video.querySelector('[data-set="video-img"]');
const playBtn = video.querySelector('[data-set="play-btn"]');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('hero__media-img');
  video.appendChild(iframe);
};

const playVideo = () => {
  playBtn.addEventListener('click', () => {
    playBtn.remove();
    videoImg.remove();
    createIframe();
  });
};

export {playVideo};
