$(document).ready(function () {
  $(".tweets").hover(function (event) {
    $(this).toggleClass("tweet-shadow");
  });

  $(".flag-icon").hover(function (event) {
    $(this).toggleClass("icons-flag");
  });
  $(".retweet-icon").hover(function (event) {
    $(this).toggleClass("icons-flag");
  });
  $(".love-icon").hover(function (event) {
    $(this).toggleClass("icons-flag");
  });
});
