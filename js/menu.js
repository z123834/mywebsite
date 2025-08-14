/*轮播*/
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000);
/*实现二维码*/
var Button1 = document.getElementById('app-list:nth-child(3)');
var Wechat = document.getElementById('wechat');
Button1.addEventListener('click', function() {
    Wechat.style.display = 'block';
})