const $ = document.querySelector.bind(document);
const content = $(".content");
const open = $(".open");
const card = $(".card");
const heart1 = $(".heart-1");
const heart2 = $(".heart-2");
const heart3 = $(".heart-3");
const heart4 = $(".heart-4");
const heart5 = $(".heart-5");
const heart6 = $(".heart-6");
const heart7 = $(".heart-7");
const heart8 = $(".heart-8");
const heart9 = $(".heart-9");

content.onclick = () => {
  const widthWindow = window.innerWidth;
  if (widthWindow > 768) {
    content.style.borderTop = "100px solid transparent";
  } else {
    content.style.borderTop = "50px solid transparent";
  }
  open.style.visibility = "visible";
  card.style.transform = "translate(-50%, -70%)";
  card.style.visibility = "visible";
  heart1.style.animation = "heart1 infinite 6s .2s";
  heart2.style.animation = "heart2 infinite 6s .3s";
  heart3.style.animation = "heart3 infinite 6s .2s";
  heart4.style.animation = "heart4 infinite 6s .5s";
  heart5.style.animation = "heart5 infinite 6s .4s";
  heart6.style.animation = "heart6 infinite 6s .6s";
  heart7.style.animation = "heart7 infinite 6s .5s";
  heart8.style.animation = "heart8 infinite 6s .3s";
  heart9.style.animation = "heart9 infinite 6s .2s";

  setTimeout(() => {
    document.body.style.backgroundColor = "";
    content.style.borderTop = "";
    card.style.transform = "";
    card.style.visibility = "hidden";
    open.style.visibility = "";
    heart1.style.animation = "";
    heart2.style.animation = "";
    heart3.style.animation = "";
    heart4.style.animation = "";
    heart5.style.animation = "";
    heart6.style.animation = "";
    heart7.style.animation = "";
    heart8.style.animation = "";
    heart9.style.animation = "";
  }, 5000);

  const audio = $("#audio");
  if (audio.paused) {
    audio.play();
  }
};
