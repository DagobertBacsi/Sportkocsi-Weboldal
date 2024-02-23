$(function () {

	'use strict';

	const lenis = new Lenis({
		duration: 1.2
	})

	lenis.on('scroll', (e) => {
		console.log(e)
	})
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

	function scrollTrig() {

		gsap.registerPlugin(ScrollTrigger);

		let gsapBl = $('.gsap__bl').width();

		let gsapTrack = $('.gsap__track').width();
		let scrollSliderTransform = gsapTrack - gsapBl

		gsap.to('.gsap__track', {
			scrollTrigger: {
				trigger: '.gsap_slider',
				start: 'center center',
				end: () => '+=' + gsapTrack,
				pin: true,
				scrub: true
			},
			x: '-=' + scrollSliderTransform + 'px'
		});

	}
	scrollTrig();

	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		console.log('Window resized!');
		location.reload();
	}
	$(window).on('resize', debouncedResize);
});