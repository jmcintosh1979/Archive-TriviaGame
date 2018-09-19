$(document).ready(function() {
  // console.log("document is ready");

  $(".trivia-game").hide();
  $(".score").hide();

  $(".start-game").on("click", function() {
    // console.log("start button has been clicked");
    $(".welcome").hide();
    $(".trivia-game").show();
  })


  $(".submit").on("click", function() {
    // console.log("submit button has been clicked");
    $(".welcome").hide();
    $(".trivia-game").hide();
    $(".score").show();
  })

  $(".re-play").on("click", function() {
    // console.log("re-play button has been clicked");
    $(".welcome").show();
    $(".trivia-game").hide();
    $(".score").hide();
  })

})
