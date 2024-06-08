var l1 = document.querySelector(".list-home ul ");
var l2 = document.querySelector(".list-home2 ul ");
var l3 = document.querySelector(".list-home3 ul ");
var l4 = document.querySelector(".list-home4 ul ");
var l5 = document.querySelector(".list-home5 ul ");
var l6 = document.querySelector(".list-home6 ul ");
let mood = "yes";
let mood2 = "true";

var category = document.querySelector(".category i");

category.onclick = function () {
    document.getElementsByClassName('side2')[0].classList.toggle('active')
};

document.getElementById("st1").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }

        document.querySelector(".list-home ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home ul ").style.display = "none";
        }
    }
};

document.getElementById("st2").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }
        document.querySelector(".list-home2 ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home2 ul ").style.display = "none";
        }
    }
};

document.getElementById("st3").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }
        document.querySelector(".list-home3 ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home3 ul ").style.display = "none";
        }
    }
};

document.getElementById("st4").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }
        document.querySelector(".list-home4 ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home4 ul ").style.display = "none";
        }
    }
};

document.getElementById("st5").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }
        document.querySelector(".list-home5 ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home5 ul ").style.display = "none";
        }
    }
};

document.getElementById("st6").onclick = function () {
    if (mood2 === "true") {
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
        }
        document.querySelector(".list-home6 ul ").style.display = "block";
        mood2 = "no";
    } else {
        mood2 = "true";
        let arr = [l1, l2, l3, l4, l5, l6];
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = "none";
            document.querySelector(".list-home6 ul ").style.display = "none";
        }
    }
};

var img1 = document.querySelectorAll(".category0 ")[0];
var img2 = document.querySelectorAll(".category0 ")[1];
var img3 = document.querySelectorAll(".category0 ")[2];
var img4 = document.querySelectorAll(".category0 ")[3];
var img5 = document.querySelectorAll(".category0 ")[4];
var img6 = document.querySelectorAll(".category0 ")[5];

var safa1 = document.querySelectorAll(".category0 p")[0];
var safa2 = document.querySelectorAll(".category0 p")[1];
var safa3 = document.querySelectorAll(".category0 p")[2];
var safa4 = document.querySelectorAll(".category0 p")[3];
var safa5 = document.querySelectorAll(".category0 p")[4];
var safa6 = document.querySelectorAll(".category0 p")[5];

img1.onmouseover = function () {
    safa1.style.display = "block";
};
img1.onmouseleave = function () {
    safa1.style.display = "none";
};

//2

img2.onmouseover = function () {
    safa2.style.display = "block";
};
img2.onmouseleave = function () {
    safa2.style.display = "none";
};

//3

img3.onmouseover = function () {
    safa3.style.display = "block";
};
img3.onmouseleave = function () {
    safa3.style.display = "none";
};

//4

img4.onmouseover = function () {
    safa4.style.display = "block";
};
img4.onmouseleave = function () {
    safa4.style.display = "none";
};

//5
img5.onmouseover = function () {
    safa5.style.display = "block";
};
img5.onmouseleave = function () {
    safa5.style.display = "none";
};

//6

img6.onmouseover = function () {
    safa6.style.display = "block";
};
img6.onmouseleave = function () {
    safa6.style.display = "none";
};
