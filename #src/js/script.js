$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		touchThreshold: 10
	});
});
document.addEventListener('DOMContentLoaded', () => {
	const burger = document.getElementById('burger');
	const nav = document.querySelector('.header-items__menu-nav');
	const menu = document.querySelector('.header-items__menu');
	if (document.documentElement.clientWidth <= 767) {
		$('.top-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 5,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			touchThreshold: 10,
			responsive: [{
					breakpoint: 520,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 420,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}
			]
		});
	}
	if (document.documentElement.clientWidth <= 1200) {
		$('.new-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			touchThreshold: 10,
			//centerMode: true
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}
	$('.rewievs-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		touchThreshold: 10,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	document.addEventListener('click', (e) => {
		console.log(e.target);
		if (e.target === burger || e.target.parentElement === burger) {
			if (document.documentElement.clientWidth > 767) {
				if (burger.classList.contains('active')) {
					nav.classList.remove('active');
					burger.classList.remove('active');
				} else {
					nav.classList.add('active');
					burger.classList.add('active');
				}
			} else {
				if (burger.classList.contains('active')) {
					menu.classList.remove('active');
					burger.classList.remove('active');
				} else {
					menu.classList.add('active');
					burger.classList.add('active');
				}
			}
		} else if (e.target !== nav && e.target.parentElement !== nav && e.target !== menu && e.target.parentElement !== menu) {
			if (document.documentElement.clientWidth > 767) {
				if (burger.classList.contains('active')) {
					e.preventDefault();
					nav.classList.remove('active');
					burger.classList.remove('active');
				}
			} else {
				if (burger.classList.contains('active')) {
					e.preventDefault();
					menu.classList.remove('active');
					burger.classList.remove('active');
				}
			}
		}
	})

	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
});