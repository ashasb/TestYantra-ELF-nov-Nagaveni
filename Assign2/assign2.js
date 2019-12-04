let img4 = document.getElementById("img4")
let img5= document.getElementById("img5")
let img3= document.getElementById("img3")
let img2= document.getElementById("img2")
let img1= document.getElementById("img1")
img1.addEventListener('click', function () {
    img4.className="addImage"
    img5.className = "addImage"
    //img4.classList.toggle("visible");

})
img1.addEventListener('mouseover', function () {
    img2.src="photo3.jpg"
    img3.src="photo4.jpg"

})
img1.addEventListener('mouseout', function () {
    img2.src="img6.jpg"
    img3.src="img8.jpg"


})