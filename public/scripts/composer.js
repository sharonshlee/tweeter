$(document).ready(function () {
  $(".back-top").hide();

  // Click on new-icon to create new tweet
  $(".new-icon").on("click", function (event) {
    //slide toggle the section up and down
    $(".new-tweet").slideToggle("slow");

    $("#tweet-text").focus();
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 120) {
      $(".new-tweet-icon").hide();
      $(".back-top").show();
    } else {
      $(".new-tweet-icon").show();
      $(".back-top").hide();
    }
  });

  $(".back-top span").on("click", function () {
    $(window).scrollTop(0);
  });
});
