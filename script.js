document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var birthdayfromnow = (new Date("04/05/2020") / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(birthdayfromnow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');

      boxtop = $('.box-top');
      boxtl = new TimelineLite({delay:3});

      //---------------------------
      // Show Gift (after 3sec)
      //---------------------------

        TweenLite.delayedCall(3.5, function(){
          TweenLite.to('.box',0.3, {css:{ display: "block"}});

          TweenMax.from('.box',2,{y:-1000,transformOrigin: "0% 50%", ease: Bounce.easeOut});
          TweenMax.from(boxtop,2,{y:-300,transformOrigin: "0% 50%", ease: Bounce.easeOut},"+=3.5");

          //Animate top box
          boxtl.to(boxtop, 0.15, {rotation:5, ease:Bounce.easeOut})
              .to(boxtop, 0.15, {rotation:-5, ease:Bounce.easeOut, repeat:10, yoyo:true, repeatDelay:0.15}, 0.25)
              //end at 0
              .to(boxtop, 0.25, {rotation:0}, "+=0.5")
              .to('.box',2.5,{scaleX:1.05,scaleY:1.05,repeat:-1,ease:Elastic.easeOut,yoyo:true}, "+=0.5");
        });

        $('.box').one('click',function(){
            //Stop any box animation
            boxtl.remove();
    
            // Open the gift box
            TweenMax.to(boxtop, 1.3, {rotation:-150, y:50, x:-100, ease:Power4.easeInOut});

            setTimeout(function(){location.replace("prismatic-happy-birthday/index.html")}, 3000)

        
        });
    });

    let body = document.body;
    body.classList.add('light-theme');
    body.querySelector('#flipdown').classList.add('flipdown__theme-dark');


  
});