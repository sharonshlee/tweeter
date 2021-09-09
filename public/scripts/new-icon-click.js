$(document).ready(function () {
  // Click on new-icon to create new tweet
  $(".new-icon").on("click", function (event) {
    //slide toggle the section up and down
    $(".new-tweet").slideToggle("slow");

    $("#tweet-text").focus();
  });
});
