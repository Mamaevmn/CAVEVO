const mobileSliders = document.querySelectorAll('.promo__mobile-slider')

mobileSliders.forEach(slider => {
	function mobileSliders() {
		if (window.innerWidth <= 575) {
			if (slider.dataset.mobile == 'false') {
				currentSlider = new Swiper(slider, {
					wrapperClass: 'categories',
					slideClass: 'categories__item',
					slidesPerView: 'auto',
					grabCursor: true,
				});

				slider.dataset.mobile = 'true'
			}
		}

		if (window.innerWidth > 575) {
			if (slider.dataset.mobile == 'true') {
				categories.dataset.mobile = 'false';

				categoriesSlider.destroy();
			}
		}
	};

	mobileSliders();

	window.addEventListener('resize', () => {
		mobileSliders();
	})

})
