/*
Original image: https://i.pinimg.com/originals/d5/89/e4/d589e42554245e0b05760c773fe91045.png
*/

window.addEventListener('DOMContentLoaded', function(){

const m = document.querySelector("#m");
const b = document.querySelector("#b");


let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    b.style.transform = `
        perspective(2000px)
        rotateX(${ y * 10  + 60}deg)
        rotateZ(-${ x * 10  + 45}deg)
    `;
}
m.addEventListener("mousemove", base);

});


