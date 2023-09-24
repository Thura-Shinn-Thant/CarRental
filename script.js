const pickBtnOne = document.getElementById("pick-btn1");
const pickBtnTwo = document.getElementById("pick-btn2");
const pickBtnThree = document.getElementById("pick-btn3");
const pickBtnFour = document.getElementById("pick-btn4");
const pickBtnFive = document.getElementById("pick-btn5");
const pickBtnSix = document.getElementById("pick-btn6");
const carImg = document.getElementById("pickcar-img");
const loading = document.getElementById("loadingDisplay");
const signinBtn = document.getElementById("signIn");
function showLoading() {
  loading.style.display = "block";
  carImg.style.display = "none";
}
function hideLoading() {
  loading.style.display = "none";
  carImg.style.display = "block";
}

pickBtnOne.addEventListener("click", () => {
  showLoading();
  //button click change color
  pickBtnOne.classList.add("pickbtnone");
  pickBtnTwo.classList.remove("pickbtntwo");
  pickBtnThree.classList.remove("pickbtnthree");
  pickBtnFour.classList.remove("pickbtnfour");
  pickBtnFive.classList.remove("pickbtnfive");
  pickBtnSix.classList.remove("pickbtnsix");

  //button click show image
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  setTimeout(() => {
    const newImg1 = document.createElement("img");
    newImg1.classList.add("pickcar-img");
    newImg1.src = "image/audi.jpg";
    carImg.appendChild(newImg1);
    hideLoading();
  }, 1000);
});

pickBtnTwo.addEventListener("click", () => {
  showLoading();
  pickBtnOne.classList.remove("pickbtnone");
  pickBtnTwo.classList.add("pickbtntwo");
  pickBtnThree.classList.remove("pickbtnthree");
  pickBtnFour.classList.remove("pickbtnfour");
  pickBtnFive.classList.remove("pickbtnfive");
  pickBtnSix.classList.remove("pickbtnsix");
  //button click show image
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  //create and show new img
  setTimeout(() => {
    const newImg2 = document.createElement("img");
    newImg2.classList.add("pickcar-img");
    newImg2.src = "image/vw1.jpg";
    carImg.appendChild(newImg2);
    hideLoading();
  }, 1000);
});

pickBtnThree.addEventListener("click", () => {
  showLoading();
  pickBtnOne.classList.remove("pickbtnone");
  pickBtnTwo.classList.remove("pickbtntwo");
  pickBtnThree.classList.add("pickbtnthree");
  pickBtnFour.classList.remove("pickbtnfour");
  pickBtnFive.classList.remove("pickbtnfive");
  pickBtnSix.classList.remove("pickbtnsix");
  //button click show image
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  //create and show new img
  setTimeout(() => {
    const newImg3 = document.createElement("img");
    newImg3.classList.add("pickcar-img");
    newImg3.src = "image/toyota.jpg";
    carImg.appendChild(newImg3);
    hideLoading();
  }, 1000);
});
pickBtnFour.addEventListener("click", () => {
  showLoading();
  pickBtnOne.classList.remove("pickbtnone");
  pickBtnTwo.classList.remove("pickbtntwo");
  pickBtnThree.classList.remove("pickbtnthree");
  pickBtnFour.classList.add("pickbtnfour");
  pickBtnFive.classList.remove("pickbtnfive");
  pickBtnSix.classList.remove("pickbtnsix");
  //button click show image
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  //create and show new img
  setTimeout(() => {
    const newImg4 = document.createElement("img");
    newImg4.classList.add("pickcar-img");
    newImg4.src = "image/bmw.jpg";
    carImg.appendChild(newImg4);
    hideLoading();
  }, 1000);
});
pickBtnFive.addEventListener("click", () => {
  showLoading();
  pickBtnOne.classList.remove("pickbtnone");
  pickBtnTwo.classList.remove("pickbtntwo");
  pickBtnThree.classList.remove("pickbtnthree");
  pickBtnFour.classList.remove("pickbtnfour");
  pickBtnFive.classList.add("pickbtnfive");
  pickBtnSix.classList.remove("pickbtnsix");
  //button click show image
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  //create and show new img
  setTimeout(() => {
    const newImg5 = document.createElement("img");
    newImg5.classList.add("pickcar-img");
    newImg5.src = "image/mercedes.jpg";
    carImg.appendChild(newImg5);
    hideLoading();
  }, 1000);
});
pickBtnSix.addEventListener("click", () => {
  showLoading();
  pickBtnOne.classList.remove("pickbtnone");
  pickBtnTwo.classList.remove("pickbtntwo");
  pickBtnThree.classList.remove("pickbtnthree");
  pickBtnFour.classList.remove("pickbtnfour");
  pickBtnFive.classList.remove("pickbtnfive");
  pickBtnSix.classList.add("pickbtnsix");
  // button click show img
  //remove the existing img
  const existingImg = document.querySelector(".pickcar-img");
  if (existingImg) {
    carImg.removeChild(existingImg);
  }
  //create and show new img
  setTimeout(() => {
    const newImg6 = document.createElement("img");
    newImg6.classList.add("pickcar-img");
    newImg6.src = "image/vw2.jpg";
    carImg.appendChild(newImg6);
    hideLoading();
  }, 1000);
});
signinBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
