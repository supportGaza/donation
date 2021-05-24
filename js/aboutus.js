'use strict'
let magerText = document.getElementById("mager");
let GithubLink = document.getElementById("Github");
let imgGithub = document.getElementById("githubimg");
let linkedinLink = document.getElementById("LinkeIn");
let imgteam = document.getElementById("team");
let parghraph = document.getElementById("text");
let imgstu1 = document.getElementById("erada");
let imgstu2 = document.getElementById("suad");
let imgstu3 = document.getElementById("gahidaa");
let imgstu4 = document.getElementById("mohmmad");
let imgstu5 = document.getElementById("alla");

// fun erada
imgstu1.addEventListener("click", showImgstdu1);

function showImgstdu1(event) {
    event.preventDefault();
    imgteam.setAttribute("src", "../img/Erada.png");
    parghraph.textContent = "Erada Abdalrhman Ali";
    magerText.textContent = "Computer Science at BAU";
    GithubLink.setAttribute("href", "https://github.com/eradaali");
    GithubLink.textContent = "GitHub";
    linkedinLink.setAttribute("href", "https://www.linkedin.com/in/erada-ali-54b8901b9");
    linkedinLink.textContent = "LinkedIn";
}
/// fun suad
imgstu2.addEventListener("click", showImgstdu2);

function showImgstdu2(event) {
    event.preventDefault();
    imgteam.setAttribute("src", "../img/Suad.png");
    parghraph.textContent = "Suad Husam Talafha";
    magerText.textContent = "Renewable Energy Engineer at AABU";
    GithubLink.setAttribute("href", "https://github.com/suadtalafha");
    GithubLink.textContent = "GitHub";
    linkedinLink.setAttribute("href", "https://github.com/suadtalafha");
    linkedinLink.textContent = "LinkedIn";
}

// fun gahida
imgstu3.addEventListener("click", showImgstdu3);

function showImgstdu3(event) {
    event.preventDefault();
    imgteam.setAttribute("src", "../img/Ghaida.png");
    parghraph.textContent = "Ghaidaa mohammad Al-nattah";
    magerText.textContent = "management  information system";
    GithubLink.setAttribute("href", "https://github.com/Ghaidaamoh");
    GithubLink.textContent = "GitHub";
    linkedinLink.setAttribute("href", "https://www.linkedin.com/in/ghaidaa-mohammad");
    linkedinLink.textContent = "LinkedIn";
}

//fun mohmmad
imgstu4.addEventListener("click", showImgstdu4);

function showImgstdu4(event) {
    event.preventDefault();
    imgteam.setAttribute("src", "../img/Mohammad.png");
    parghraph.textContent = "Mohammad Omar Atta";
    magerText.textContent = "Electrical Power Engineer at BAU";
    GithubLink.setAttribute("href", "https://github.com/mr-atta");
    GithubLink.textContent = "GitHub";
    linkedinLink.setAttribute("href", "www.linkedin.com/in/mohammad-atta-96b5711b2");
    linkedinLink.textContent = "LinkedIn";
}

// fun alla
imgstu5.addEventListener("click", showImgstdu5);

function showImgstdu5(event) {
    event.preventDefault();
    imgteam.setAttribute("src", "../img/Alaa.png");
    parghraph.textContent = "Alaa Nasser Al Smadi";
    magerText.textContent = "Survey Engineering at BAU";
    GithubLink.setAttribute("href", " https://github.com/AlaaN-Smadi");
    GithubLink.textContent = "GitHub";
    linkedinLink.setAttribute("href", "www.linkedin.com/in/alaa-smadi-a9b17a210");
    linkedinLink.textContent = "LinkedIn";
}