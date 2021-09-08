$(document).ready(function () {
  //keydown will not detect the first letter entered
  $("#tweet-text").on("keyup", function () {
    // .next() to get next element relative to #tweet-text element,
    // use .find("output") to get the output element from next element
    const counter = $(this).next().find("output");
    const textCounter = 140 - $(this).val().length;
    $(counter).val(textCounter);
    if (textCounter < 0) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "");
    }
  });
});
