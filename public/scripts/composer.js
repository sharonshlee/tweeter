$(function () {
  $(".back-top").hide();

  // Click on new-icon to create new tweet
  $(".new-icon").on("click", onClick);

  $(window).scroll(winScroll);

  $(".back-top span").on("click", backTopClick);
});

const onClick = function (event) {
  //slide toggle the tweets section up and down
  $(".new-tweet").slideToggle("slow");

  $("#tweet-text").focus();
};

const winScroll = function () {
  if ($(window).scrollTop() > 120) {
    $(".new-tweet-icon").hide();
    $(".back-top").show();
  } else {
    $(".new-tweet-icon").show();
    $(".back-top").hide();
  }
};

const backTopClick = function () {
  $(window).scrollTop(0);
};
