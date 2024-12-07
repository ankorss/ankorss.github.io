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

	// Tagline animation
	const taglinePart1 = document.querySelector('.tagline__part-1')
	const taglinePart2 = document.querySelector('.tagline__part-2')
	const inkBlots = document.querySelectorAll('.ink-blot')

	const taglineObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					taglinePart1.classList.add('visible')
				}, 300)
				
				setTimeout(() => {
					taglinePart2.classList.add('visible')
					// Add visible class to ink blots when part 2 appears
					inkBlots.forEach(blot => {
						blot.classList.add('visible')
					})
				}, 1200)
			}
		})
	}, {
		threshold: 0.5
	})

	const taglineSection = document.querySelector('.tagline')
	if (taglineSection) {
		taglineObserver.observe(taglineSection)
	}

	// Portfolio title animation
	const portfolioTitleAccent = document.querySelector('.portfolio__title-accent')
	const portfolioObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				portfolioTitleAccent.classList.add('visible')
			}
		})
	}, {
		threshold: 0.5
	})

	if (portfolioTitleAccent) {
		portfolioObserver.observe(portfolioTitleAccent)
	}

}

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
	// Animate title on page load
	const title = document.querySelector('.main-title')
	if (title) {
		title.style.opacity = '1'
		title.style.transform = 'translateY(0)'
	}

	// Animate about me section when it comes into view
	const aboutMeTitle = document.querySelector('.about-me__title')
	const aboutMeObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
				aboutMeObserver.unobserve(entry.target)
			}
		})
	}, {
		threshold: 0.1
	})

	if (aboutMeTitle) {
		aboutMeObserver.observe(aboutMeTitle)
	}

	// Carousel functionality
	const images = document.querySelectorAll('.about-me__image');
	const prevBtn = document.querySelector('.carousel-btn.prev');
	const nextBtn = document.querySelector('.carousel-btn.next');
	let currentIndex = 0;

	function showImage(index) {
		images.forEach(img => img.classList.remove('active'));
		images[index].classList.add('active');
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		showImage(currentIndex);
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		showImage(currentIndex);
	}

	// Add click event listeners
	nextBtn.addEventListener('click', nextImage);
	prevBtn.addEventListener('click', prevImage);

})