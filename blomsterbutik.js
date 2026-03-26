//Her laver jeg min kurv
const kurvBtn = document.querySelector("#kurvBtn"); //her laver jeg min kurv.
const closeBtn = document.querySelector("#closeBtn");
const offcanvasMenu = document.querySelector("#offcanvasMenu");

kurvBtn.addEventListener("click", function () {
  offcanvasMenu.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  offcanvasMenu.classList.remove("open");
  document.querySelector(".overlay").classList.remove("show");
});

//her laver jeg mit slideshow
//slides er nu array af elementer
const slides = document.querySelectorAll(".slide");

console.log(slides);
let currentIndex = 0;

function displayImageNumber(displayNumber) {
  currentIndex = displayNumber;
  //denne kode skjuler alle billeder
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  const numberOfImages = slides.length; //spørger hvor mange elementer der er i arrayet
  console.log("hvor mange elementer er der?", numberOfImages);
  //denne kode gør så billederne køre i ring og du bare kan trykke på next knappen
  if (currentIndex > numberOfImages - 1) {
    currentIndex = 0;
    //denne kode gør så billederne køre i ring og du bare kan trykke på prev knappen
  } else if (currentIndex < 0) {
    currentIndex = numberOfImages - 1;
  }

  slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

//trykker på knap
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
  //gør så ,man køre igennem alle billeder i slide showet
  displayImageNumber(currentIndex + 1);
});

btnPrev.addEventListener("click", () => {
  displayImageNumber(currentIndex - 1);
});

//Pop op overlay tekst
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("popup-overlay");
  const lukKnap = document.getElementById("luk-knap");

  // Vis popup efter 1 sekund
  setTimeout(function () {
    overlay.style.display = "flex";
  }, 1000);

  // Luk med X-knap
  lukKnap.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Luk ved klik på baggrunden
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
