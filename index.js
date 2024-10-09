// $("h1").css("color", "red");
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function () {
//   $("h1").css("color", "green");
// });

// $("button").click(function () {
//   $("h1").css("color", "red");
// });

// $("input").keydown(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "gray");
// });

// $("button").on("click", function () {
//   $("h1").hide();
// });

// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("button").on("click", function () {
//   $("h1").fadeOut();
// });

// $("button").on("click", function () {
//     $("h1").fadeIn();
//   });

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//     $("h1").slideUp();
//   });

// $("button").on("click", function () {
//     $("h1").slideDown();
//   });

// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
