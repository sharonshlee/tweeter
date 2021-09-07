/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  // Click on new-icon to create new tweet
  $(".new-icon").on("click", function (event) {
    $("#tweet-text").focus();
    $(document).scrollTop(0); //position top:0
  });
});
