document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var birthdayfromnow = (new Date("04/05/2020").getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(birthdayfromnow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

    let body = document.body;
    body.classList.add('light-theme');
    body.querySelector('#flipdown').classList.add('flipdown__theme-dark');
  
});