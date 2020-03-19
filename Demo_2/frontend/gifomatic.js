//CODE FROM DEMO 1

const newGifAJAX = queryString => {
  return $.ajax({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
  });
};

const appendGif = gifUrl => {
  $(".gif-display").empty();
  $(".gif-display").append($(`<img class="gif" src=${gifUrl} />`));
};

//TO BE WRITTEN AJAX REQUESTS

//EVENT HANDLERS
const setEventHandlers = () => {
  $('#new-gif-form').on('submit', e => {
    e.preventDefault();
    fetchNewGif();
  });

  // $("#save-gif-form").on("submit", e => {
  //   e.preventDefault();
  //   saveGif();
  // });
  //
  // $("#old-gif-form").on("submit", e => {
  //   e.preventDefault();
  //   fetchSavedGif();
  // });
  //
  // $("#callback-hell-form").on("submit", e => {
  //   e.preventDefault();
  //   callbackHell();
  // })

  // $(".clear").on("click", () => {
  //   $(".gif-display").empty();
  //   $(".messages").empty();
  // });
};

$(() => {
  setEventHandlers();
});

// ------------- GIF ACTIONS - fetchNew, save, and fetchSaved ---------------

const fetchNewGif = () => {
  const $input = $('#new-gif-query');
  const queryString = $input.val();
  $input.val('');

  // TODO: Initiate AJAX call to GIPHY API, take response and put on the DOM
};

// const saveGif = e => {
//   const $input = $("#save-gif-title");
//   const title = $input.val();
//   $input.val("");
//   const gif = {
//     title: title,
//     url: $(".gif-display > img").attr('src')
//   };
//
//   // TODO: Initiate AJAX request to Rails backend, give a message if successful
// };

// const postMessage = message => {
//   $('.messages').text(message);
// };

// const fetchSavedGif = () => {
//   const $input = $("#old-gif-query");
//   const title = $input.val();
//   $input.val("");
//
//   // TODO: Initate AJAX request to Rails backend, add gif to the DOM if successful
// };

// ------------- CALLBACK HELL ---------------

// const callbackHell = () => {
//   const $input = $('#callback-hell-query');
//   const title = $input.val();
//   $input.val('');
//      debugger; 
//   return $.ajax({
//     method: 'GET',
//     url: `/gifs/${title}`,
//     dataType: 'json',
//     success: gif => {
//       // gif exists in DB
//          debugger; 
//       appendGif(gif.url);
//     },
//     error: response => {
//       // gif doesn't exist
//            debugger; 
//       postMessage(`${response.responseJSON[0]} Fetching new gif...`);
//       return $.ajax({
//         method: 'GET',
//         url: `https://api.giphy.com/v1/gifs/random?tag=${title}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
//         success: (
//           gif // giphy call is successful
//         ) => {
//           const url = gif.data.image_url;
//           appendGif(url);
//           gif = { title: title, url: url };
//                debugger; 
//           return $.ajax({
//             // save gif to db
//             method: 'POST',
//             url: '/gifs',
//             data: {
//               gif: gif,
//             },
//             success: savedGif => {
//                   debugger; 
//               postMessage('Successfully saved!');
//             },
//           });
//         },
//       });
//     },
//   });
// };
