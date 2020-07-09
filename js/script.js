//create a promise
//then talk about promises
let movieData, userInput;
const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");
const $input = $("input[type='text']");
$("form").on("submit", handleGetData);
function handleGetData(event) {
  event.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `https://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`,
  }).then(
    (data) => {
      console.log("DATA IS ", data);
      movieData = data;
      render();
    },
    (error) => {
      console.log("ERROR IS ", error);
    }
  );
}
function render() {
  $title.html(movieData.Title);
  $year.html(movieData.Year);
  $rated.html(movieData.Rated);
  $("img").attr("src", movieData.Poster);
}
