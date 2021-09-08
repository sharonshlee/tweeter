/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function (tweet) {
  const timeAgo = timeago.format(tweet.created_at);
  const tweetArticle = $(`
        <article class="tweet">
        <header>
          <div class="image-name">
            <img src=${tweet.user.avatars}/>
            <span>${tweet.user.name}</span>
          </div>
          <div class="lastname">${tweet.user.handle}</div>
        </header>

        <main>${tweet.content.text}</main>

        <footer>
          <span>${timeAgo}</span>
          <div class="icons">
            <span class="fas fa-flag flag-icon hover-cursor"></span>
            <span class="fas fa-retweet retweet-icon hover-cursor"></span>
            <span class="fas fa-heart love-icon hover-cursor"></span>
          </div>
        </footer>
        </article>
    `);

  return tweetArticle;
};

const renderTweets = function (tweets) {
  $(".tweets").empty(); //clear the previous tweets

  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const tweetArticle = createTweetElement(tweet);
    // takes return tweet article and append to the beginning of the tweets section
    $(".tweets").prepend(tweetArticle);
  }
};

const loadTweets = function () {
  $.get("/tweets", function (data) {
    renderTweets(data);
  });
};

const postTweet = function (newTweet) {
  $.post("/tweets", newTweet, function () {
    loadTweets();
  });
};

$(document).ready(function () {
  loadTweets();

  $("#frm-new-tweet").submit(function (event) {
    // prevent the default behaviour of the submit event (data submission and page refresh)
    event.preventDefault();

    //Serialize the form data before posting to the server, key=value pair
    const newTweet = $(this).serialize();

    //AJAX POST request that sends the form data to the server.
    postTweet(newTweet);

    //clear textarea after post and focus the textarea for new input
    $("#tweet-text").val("").focus();
  });
}); //close ready
