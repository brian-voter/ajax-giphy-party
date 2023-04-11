"use strict"

const gifsDiv = $("#gifsDiv");

/**
 * Button click handler which adds the first gif from the Giphy API
 * based on the user's search term
 */
async function onClickAdd() {
  const searchTerm = $("#searchTermInput").val();
  const searchURL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const response = await axios.get(searchURL);
  console.log(response.data);

  const url = response.data.data[0].images.original.url;
  addGif(url);
}

/**
 * Button click handler which clears the div containing all the gifs
 */
function onClickClear() {
  gifsDiv.empty();
}

/**
 * Adds a gif to the gifs div given the image URL
 * @param {string} url the URL to insert in an image element
 */
function addGif(url) {
  gifsDiv.append($("<img>", {src: url}));
}

$("#searchButton").on("click", onClickAdd);
$("#clearButton").on("click", onClickClear);