// HERO 

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  
  	gsap.registerPlugin(ScrollTrigger);
  
	
           
    gsap.fromTo( '.index-section .custom__image',
        {
            y: 100, opacity:0
        },
        {
            y: 0, opacity:1, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '.index-section',
                start: 'top 80%',
                end: 'center center',
                scrub: true
            }
        }
  	);
  
  	gsap.fromTo ( '.shopify-section.index-section .custom-content .custom__item--1647529858991c0f69-1',
        {
            y: -50, opacity:0, scale: 2,
        },
        {
            scale: 1, y: 0, opacity:1, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '.shopify-section.index-section .custom-content .custom__item--1647529858991c0f69-1',
                start: 'top 70%',
                end: 'center center',
                scrub: true
            }
        }
  	);
  
   
  	gsap.fromTo( '.shopify-section.index-section .custom-content .custom__item--f68cbd06-d5a2-4333-8730-f121c72dc120',
        {
      y: 150, opacity:0
        },
        {
      y: 0, opacity:1, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '.index-section',
                start: 'top 75%',
                end: 'center center',
                scrub: true
            }
        }
  	);
  
   gsap.fromTo( '.shopify-section.index-section .custom-content .custom__item--1647525074af71d827-0',
        {
      y: 150, opacity:0
        },
        {
            y: 0, opacity:1, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '.index-section',
                start: 'top 75%',
                end: 'center center',
                scrub: true
            }
        }
  	);
  
  	gsap.fromTo( '.feature-columns .cols .col img',
        {
            y: 100, opacity:0
        },
        {
            y: 0, opacity:1, stagger: 0.5, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '.feature-columns',
                start: 'top 70%',
                end: 'center center',
                scrub: true
            }
        }
    );
  
  	gsap.fromTo( '#shopify-section-template--15759719563520__1647529743558de923',
        {
            y: 150, opacity:0
        },
        {
            y: 0, opacity:1, yoyo:true,  ease: "power3.out",
            scrollTrigger: {
                trigger: '#shopify-section-template--15759719563520__1647529743558de923',
                start: 'top 70%',
                end: 'center center',
                scrub: true
            }
        }
  	);
  

  
});

