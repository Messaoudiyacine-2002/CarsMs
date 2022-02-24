const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});
/*#####*/







const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped1');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped2');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped3');
});

const card4 = document.querySelector(".card__inner4");

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped4');
});

const card5 = document.querySelector(".card__inner5");

card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped5');
});

const card6 = document.querySelector(".card__inner6");

card6.addEventListener("click", function (e) {
  card6.classList.toggle('is-flipped6');
});