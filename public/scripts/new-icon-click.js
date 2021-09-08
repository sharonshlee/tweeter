$(document).ready(function () {
  // Click on new-icon to create new tweet
  $(".new-icon").on("click", function (event) {
    $("#tweet-text").focus();
    $(document).scrollTop(0); //position top:0
  });
});
