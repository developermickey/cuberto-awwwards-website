gsap.registerPlugin(ScrollTrigger);

gsap.from(".one h2", 
    {
        y: 300,
        duration: 1, 
})
gsap.from(".two h2", 
    {
        y: 300,
        duration: 1, 
})
gsap.from(".three h2", 
    {
        y: 300,
        duration: 1, 
})
gsap.from(".forth h2", 
    {
        y: 300,
        duration: 1, 
})
gsap.from(".forth span", 
    {
        y: 300,
        duration: 1, 
})
gsap.to(".one h2", 
    {
        x: -200,
        duration: 1, 
        delay: 1
})
gsap.to(".two h2", 
    {
        x: 300,
        duration: 1, 
        delay: 1
})
gsap.to(".one", 
    {   
        y:  190,
        duration: 1, 
        delay: 2,
        zIndex: 99999
        
})
gsap.to(".go", 
    {   
        y:  -190,
        duration: 1, 
        delay: 3,
        
})
gsap.to(".preloader", 
    {   
        y:  "-100%",
        duration: 1, 
        delay: 4,
        
})

gsap.to(".dedmosss", {

        duration: 1, 
})
gsap.to(".dedmosss", {
    y: -500,
    delay: 2,
    duration: 1, 
})
gsap.to(".preloader", 
    {   
        y:  "-100%",
        duration: 1, 
        delay: 3,
        
})