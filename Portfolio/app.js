gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	// Elegant animation for the title
	ScrollTrigger.create({
		trigger: '.about-me__title',
		start: 'top bottom-=100',
		end: 'top center',
		onEnter: () => document.querySelector('.about-me__title').classList.add('visible'),
		onLeaveBack: () => document.querySelector('.about-me__title').classList.remove('visible'),
		toggleActions: 'play none none reverse'
	});

	// Animation for decorative squares
	gsap.from('.decorative-square.red', {
		scrollTrigger: {
			trigger: '.image-container',
			start: 'top bottom-=100',
			end: 'top center',
			scrub: 1
		},
		x: '0',
		y: '0',
		opacity: 0,
		duration: 1.5,
		ease: 'power2.out'
	});

	gsap.from('.decorative-square.dark', {
		scrollTrigger: {
			trigger: '.image-container',
			start: 'top bottom-=100',
			end: 'top center',
			scrub: 1
		},
		x: '0',
		y: '0',
		opacity: 0,
		duration: 1.5,
		ease: 'power2.out'
	});

	const letters = gsap.utils.toArray('.letter-animation');
	
	ScrollTrigger.create({
		trigger: '.about-me',
		start: 'top center+=100',
		onEnter: () => {
			letters.forEach((letter, index) => {
				gsap.to(letter, {
					opacity: 1,
					y: 0,
					rotationX: 0,
					duration: 0.8,
					delay: index * 0.1,
					ease: 'back.out(1.7)',
					color: 'var(--color-header)',
					textShadow: '0 0 0 rgba(244, 239, 236, 0)',
					onStart: () => letter.style.visibility = 'visible'
				});
			});
		},
		onLeaveBack: () => {
			letters.forEach((letter, index) => {
				gsap.to(letter, {
					opacity: 0,
					y: 50,
					rotationX: -90,
					duration: 0.5,
					delay: (letters.length - index) * 0.05,
					ease: 'power2.in',
					color: 'transparent',
					textShadow: '0 0 5px rgba(244, 239, 236, 0.5)'
				});
			});
		}
	});

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

	// Анимация для первой части тэглайна
	gsap.to('.tagline__part-1', {
		scrollTrigger: {
			trigger: '.tagline',
			start: 'top center',
			onEnter: () => document.querySelector('.tagline__part-1').classList.add('visible')
		}
	});

	// Анимация для второй части тэглайна и клякс
	gsap.to('.tagline__part-2', {
		scrollTrigger: {
			trigger: '.tagline',
			start: 'top center',
			onEnter: () => {
				setTimeout(() => {
					document.querySelector('.tagline__part-2').classList.add('visible');
					// Добавляем кляксы с небольшой задержкой
					setTimeout(() => {
						document.querySelectorAll('.ink-blot').forEach(blot => {
							blot.classList.add('visible');
						});
					}, 200);
				}, 800)
			}
		}
	});
}