//latest way to write document.ready
$(function () {
  $("#tweet-text").on("input", onChange);
});

const onChange = function () {
  //find the nearest parent and descendent
  const form = $(this).closest("form");
  const counter = form.find("output");

  const textLength = 140 - $(this).val().length;

  $(counter).val(textLength);

  if (textLength < 0) {
    $(counter).css("color", "red");
    return;
  }

  $(counter).css("color", "");
};
