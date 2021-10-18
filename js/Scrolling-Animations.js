let MainCoverScrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".MainCoverScrolling",
        start: "%top center",
        end: "150% center",
        // toggleActions: "play complete pause reverse",
        scrub: "true",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "blue",
        //     endColor: "black"},

    }
});
MainCoverScrolling.to(".cover", 3, {ease: Power1.easeOut, transform: 'translate3d(0,60vh,0)'}, "<");
MainCoverScrolling.to(".cover", 3, {autoAlpha:"0",ease: Power1.easeOut}, "<+0.6");
MainCoverScrolling.to(".main-container-columns1", 3, {height: "200px",ease: Power1.easeOut}, "<");




let columns2Scrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".columns2Scrolling",
        start: "10% center",
        end: "70% center",
        // toggleActions: "play complete pause reverse",
        scrub: "true",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "blue",
        //     endColor: "black"},

    }
});
columns2Scrolling.from(".Text1-columns2", 3, {y:"15vh",ease: Power1.easeOut}, "<");
columns2Scrolling.from(".Text1-columns2", 2.5, {autoAlpha:"0",ease: Power1.easeOut}, "<");
columns2Scrolling.from(".Text2-columns2", 3, {y:"15vh",ease: Power1.easeOut}, ">+1");
columns2Scrolling.from(".Text2-columns2", 2.5, {autoAlpha:"0",ease: Power1.easeOut}, "<");
columns2Scrolling.from(".Text3-columns2", 3, {y:"15vh",ease: Power1.easeOut}, ">+1");
columns2Scrolling.from(".Text3-columns2", 2.5, {autoAlpha:"0",ease: Power1.easeOut}, "<");



let columns3Scrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".columns3Scrolling",
        start: "30% bottom",
        end: "130% center",
        // toggleActions: "play complete pause reverse",
        scrub: "3",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "green",
        //     endColor: "red"},

    }
});
columns3Scrolling.from(".content-gridcolumns3", 0.9, {y:"80"}, "<");
columns3Scrolling.from(".content-gridcolumns3", 0.5, {autoAlpha:"0"}, "<");

columns3Scrolling.to(".main-container-columns3", 2, {height: "0px",ease: Power1.easeOut}, "<");


let columns4Scrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".columns4Scrolling",
        start: "top center",
        end: "90% center",
        // toggleActions: "play complete pause reverse",
        scrub: "true",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "green",
        //     endColor: "green"},

    }
});
columns4Scrolling.from(".chocolate1Collumns4", 1.2, {top: "-20%", left:"75%",width: "13vh"}, "<");
columns4Scrolling.from(".slogan2Collumns4", 1.2, {top: "-20%", left:"30%",width: "30vh", rotation:0}, "<");
columns4Scrolling.from(".chocolate2Collumns4", 1.2, {top: "-20%", left:"0%",width: "15vh"}, "<+0.23");
columns4Scrolling.from(".chocolate3Collumns4", 1.2, {top: "-20%", left:"40%",width: "10vh"}, "<+0.1");
columns4Scrolling.from(".slogan1Collumns4", 1.2, {top: "-20%", left:"60%",width: "40vh", rotation:0}, "<+0.03");



let columns5Scrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".columns5Scrolling",
        scrub: 2,
        start: "-70vh bottom",
        end: "100% bottom",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "yellow",
        //     endColor: "yellow"},

    }
});
columns5Scrolling.from(".container-columns5, .Text1-columns5, .Text2-columns5", 3, {autoAlpha:0}, "<");
columns5Scrolling.from(".container-columns5", 5, {y:"10vh"}, "<");
columns5Scrolling.from(".Text1-columns5", 5, {y:"10vh"}, "<");
columns5Scrolling.from(".Text2-columns5", 6, {y:"10vh"}, "<");





let columns6Scrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".columns6Scrolling",
        scrub: 1,
        start: "-50vh bottom",
        end: "100% bottom",
        toggleActions: "play complete reverse none",
        // markers: {
        //     startColor: "pink",
        //     endColor: "pink"},

    }
});
columns6Scrolling.from(".container-columns6", 1, {autoAlpha:0}, "<");
columns6Scrolling.from(".Text1-columns6, .Mockup1-collumns6", 2, {y:"5vh"}, "<");


// ----------------------------------//
//                                   //
//    Introduce Scene Animation      //
//                                   //
// ----------------------------------//

let IntrolScrolling = gsap.timeline({
    scrollTrigger: {
        trigger: ".Storyboard---Introl",
        start: "top% center",
        end: "bottom center",
        // toggleActions: "play complete pause reverse",
        toggleActions: "play none none none",
        pin: true,
        // scrub: 1.5,
        // markers: {
        //     startColor: "black",
        //     endColor: "black"},

    }
});
IntrolScrolling.to(".YSLC_LOGO1", 1.5, {autoAlpha:1, repeat:1, repeatDelay:0.8,yoyo:true, ease: Linear.easeNone}, "<");

IntrolScrolling.to(".Web_AboutUs", 1, {autoAlpha:1, repeat:1, repeatDelay:1,yoyo:true, ease: Linear.easeNone}, ">+1");

IntrolScrolling.to(".Web_Band1", 3, {autoAlpha:1, yoyo:true, width:"63%",top:"49%", ease: Linear.easeNone}, ">");

IntrolScrolling.set(".YSLC_LOGO1",{top: "6%",left:"8%", width:"7%"},">");
IntrolScrolling.to(".YSLC_LOGO1, .Web_Contract", 3, {autoAlpha:1, yoyo:true, ease: Linear.easeNone}, "<");

// IntrolScrolling.set(".SectionRelativeSize, .Storyboard---1, .Storyboard---2, .Storyboard---3, .Storyboard---4, .Storyboard---5, .StoryText---5, .Storyboard---6, .Storyboard---7, .Storyboard---8, .Storyboard---9, .Storyboard---10",{display: "none"},">");
// IntrolScrolling.add(IntrolAnimated, 0, ">");


