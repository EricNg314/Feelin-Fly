$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwISBzRMB9OYvEooKslnA37JQAFJbflPY",
    authDomain: "feelin-fly.firebaseapp.com",
    databaseURL: "https://feelin-fly.firebaseio.com",
    projectId: "feelin-fly",
    storageBucket: "feelin-fly.appspot.com",
    messagingSenderId: "347513284405"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
  //this function helps avoid CORS(Cross Origin) issues. set globally
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  //random prompt generator using reddit API
  //how to get rid of [WP] for each prompt printed
  // var queryURL = "https://www.reddit.com/r/WritingPrompts/new.json?limit=100";

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function (response) {
  //   var i = Math.floor((Math.random() * 26));
  //   var randomPrompt = $("#reddit-prompt");
  //   var prompt = response.data.children[i].data.title;
  //   var cutPrompt = prompt.slice(4);
  //   randomPrompt.text(cutPrompt);
  // });


//difference between addClass and attr
    //addClass: adds additional class on top of any pre existing classes
    //attr: clears all previous classes, adds new class

  //start button on.click function
  $(document).on("click", "#start-button", function () {
    var introBox = $(".startbox");
    //getting user name and saving on Firebase
    var userName = $(".user-name").val();
    console.log("This is the input: " + userName);
    var peopleInputs = {};
    peopleInputs["name"] = userName;
    database.ref().push(peopleInputs);
    //adding slideout to introbox
    introBox.addClass("slideout");
    //wait 2.2 seconds then bring on next box
    var timeOut = setTimeout(function () {
      introBox.addClass("hide");
      var promptbox = $(".promptbox");
      promptbox.removeClass("hide");
      promptbox.addClass("slidein");
    }, 600);
  });

  //submit button on.click function
  $(document).on("click", "#submit-button", function () {
    var promptBox = $(".promptbox");
    promptBox.removeClass("slidein").attr("class", "slideout");
    var timeOut = setTimeout(function () {
      promptBox.addClass("hide");
      var personBox = $(".personality-box");
      var matchBox = $(".match-box");
      var numberBox = $(".info-box");
      var redoBox = $(".redo-box");
      personBox.removeClass("hide").addClass("slidein");
      matchBox.removeClass("hide").addClass("slidein");
      numberBox.removeClass("hide").addClass("slidein");
      redoBox.removeClass("hide").addClass("slidein");
    }, 600);
  });




  //feelinFly API
  // var queryURL = "https://feelinfly.com/watson"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
  // });

  // //feelinFly API
  // var queryURL = "https://feelinfly.com/countries"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
  // });
})