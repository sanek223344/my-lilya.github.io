let offset = 0; //Смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.knopka0').addEventListener('click', function () {
	offset = offset + 445;
	if (offset > 890) {
		offset = 0
	}
	sliderLine.style.left = -offset + 'px';

});

document.querySelector('.knopka2').addEventListener('click', function () {
	offset = offset - 445;
	if (offset < 0) {
		offset = 890
	}
	sliderLine.style.left = -offset + 'px';

});