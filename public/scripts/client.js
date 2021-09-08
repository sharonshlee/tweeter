/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
// const data = [
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac",
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants",
//     },
//     created_at: 1461116232227,
//   },
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd",
//     },
//     content: {
//       text: "Je pense , donc je suis",
//     },
//     created_at: 1461113959088,
//   },
// ];

const createTweetElement = function (tweet) {
  let timeAgo = timeago.format(tweet.created_at);
  let tweetArticle = $(`
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
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const tweetArticle = createTweetElement(tweet);
    // takes return tweet article and prepend it to the tweets section
    $(".tweets").prepend(tweetArticle);
  }
};

const loadFirst = function () {
  $.get("/tweets", function (data) {
    renderTweets(data);
  });
};

//renderTweets(data);

const loadTweets = function (newTweet) {
  $.post("/tweets", newTweet, function () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
  });
};

$(document).ready(function () {
  loadFirst();
  // create an AJAX POST request that sends the form data to the server.
  $("#frm-new-tweet").submit(function (event) {
    // prevent the default behaviour of the submit event (data submission and page refresh)
    event.preventDefault();

    //Serialize the form data before posting to the server, key=value pair
    const newTweet = $(this).serialize();

    loadTweets(newTweet);
  });
}); //close ready
