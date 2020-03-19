const newGifAJAX = queryString => {
  return $.ajax({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
  });
};

const setupGifFormListener = () => {
  $(".gif-search-form").submit((e) => {
    e.preventDefault();
    const $input = $(".gif-search-input");
    const queryString = $input.val();
    newGifAJAX(queryString);
  });
};

const appendGifToUL = gifURL => {
  const $ul = $(".gif-index");
  const $li = $(`<img src=${gifURL} />`);
  $ul.append($li);
};

$(() => {
  setupGifFormListener();
});
