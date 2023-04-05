import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate, isMobile) => {
    const tl = gsap.timeline();

    tl.to(position, {
        x: !isMobile ? 9.9524037753 : -7,
        y: !isMobile ? 2.1615084322 : -12.2,
        z: !isMobile ? -8.762916964 : -6,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 0 : 0.7,
        y: !isMobile ? 0 : 1.9,
        z: !isMobile ? 0 : 0.7,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to('.sound-section-content', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: !isMobile ? 4.7395553226 : 9.36,
        y: !isMobile ? -12.5716620287 : 10.95,
        z: !isMobile ? -0.033204034 : 0.09,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 0 : -1.62,
        y: !isMobile ? 0 : 0.02,
        z: !isMobile ? 0 : -0.06,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to('.display-section', {
        opacity: 1,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
}