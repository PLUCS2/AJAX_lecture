## Prep Materials Checklist
- [AJAX Towers of Hanoi Solutions](https://github.com/appacademy/curriculum/tree/master/javascript/projects/hanoi_jquery/solution)
- [AJAX TicTacToe Solutions](https://github.com/appacademy/curriculum/tree/master/javascript/projects/ttt_jquery/solution)
- [AJAX Demo](https://github.com/appacademy/ny-lecture-notes/blob/master/javascript/Ajax/AJAXdemo.zip)

## Lecture Agenda
  + **Yesterday's Solutions**
    - Fair game on the Assessments(Enumerables, String Manipulation, Recursion(no subsets, no permutations, no makeChange), myBind, myCall, myApply, myCurry, myInherit )
  + **What is AJAX?**
    - Definition:
    - Motivations
    - "Asynchronous"
  + **Rails Review + Webpack**
  + **Ajax Code Demo**
  + **Callback Hell Demo**
  + **Promises**
  + **Promises Code Demo**
  + **Quiz**

**1.) Yesterday's Solutions** (9:35)
+ Never hurts to mention curry, bind, and surrogate again
+ Inform students of what will be fair game for the test (no makeChange, yes bind, etc).
+ Cover bindEvents in the constructor of ttt vs just setting it up in the constructor for Hanoi.
+ Cover what is happening in the render method of hanoi, i.e., wiping out the css classes and adding css classes based on the new state of the board.

## AJAX Lecture

**2.) AJAX overview** (9:50)
+ AJAX: "Asynchronous Javascript and XML"
+ Motivation:
  - AJAX is extremely powerful.
  - It gives us the ability to collect information and resources from a server/backend without completely reloading the webpage.
  - AJAX makes the web fast and gives a great user experience.
  - Frontend vs backend and how to connect via AJAX
  - Optional: Diagram the client/server on the board/ipad
+ What does it mean that an AJAX request is asynchronous?
  - Asks for resources/info in the background
  - Does not block other code from running while it waits for the response.
+ Rails as an API vs. how we have seen it up to this point
  - Up to this point we were using Rails for rendering logic. Now, we will be using it only for serving data.
+ Today is students' introduction to single page applications. No more full page refreshes! All of our data requests are happening in the background!

**3.) First steps** (10:00)

+ Start by discussing the syntax of `newGifAJAX` in `AJAX_first_steps/index.js`.
+ JQuery's `$.ajax` allows us to generate an HTTP request by passing an object with key-value pairs dictating the nature of the request
  - `method`, which defaults to "GET"
  - URL is the path of our request
+ Test in the console: `const response = newGifAJAX('dog')`, then: `console.log(response.responseJSON.data.image_url)`. It works!
+ Next, try putting those two lines in `AJAX_first_steps/index.js` and inspecting the console output. It doesn't work because AJAX is asynchronous.
+ Instead, add a success callback to `newGifAJAX`. Make sure to wrap the callback body in braces in order make use of the debugger.
  ```javascript
  const newGifAJAX = queryString => {
    return $.ajax({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
      success: response => {
        console.log(response.data.image_url);
      }
    });
  };
  ```
+ Once students are comfortable with the idea of `$.ajax`, walk through the HTML in `AJAX_first_steps/index.html` as well as the `setupGifFormListener` and `appendGifToUL` methods in `AJAX_first_steps/index.js`. Replace the earlier success callback and add an errors callback:
  ```javascript
  const newGifAJAX = queryString => {
    return $.ajax({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
      success: gif => appendGifToUL(gif.data.image_url),
      errors: errors => console.log(errors),
    });
  };
  ```
+ Open `AJAX_first_steps/index.html` in the browser and see AJAX in action!

**4.) Rails Review + Webpack** (10:10)
+ Walk through the Gif-O-Matic rails application
  + Give a high level overview of the application and what it is supposed to do.
  + Remind students of the general layout of a Rails app.
  + Show the available routes and controllers.
  + Show the students the frontend folder pointing out that it is outside our app.
+ Webpack and JS in Rails:
  + Show the students the `app/assets/javascripts` directory
  + Walk through `application.js` and explain how Rails supplies our JS files to the application in `application.html.erb`.
  + Show the Webpack config file and explain why we use it.
  + Run webpack and show how the bundle that we create is inserted into `app/assets/javascripts`.

**5a.) Ajax Code Demo** (10:20)
+ Our initial Rails API serves a static HTML view with buttons. But the buttons don't do anything!
+ Comment in `appendGif` in `AJAXdemo/frontend/gifomatic.js` and add `success: response => appendGif(response.data.image_url),` to `newGifAJAX` there.
+ Add `newGifAJAX(queryString);` to `fetchNewGif`:
  ```javascript
    const fetchNewGif = () => {
      const $input = $('#new-gif-query');
      const queryString = $input.val();
      $input.val('');

      // TODO: Initiate AJAX call to GIPHY API, take response and put on the DOM
      newGifAJAX(queryString);
      });
    };
  ```
+ Show how the `Generate Gif` button works now.
+ Don't forget to uncomment the clear gif code!
+ Put debuggers in the callbacks to show the data that is returned from the server.
+ Show network tab in console to show that requests are being made in the background

### Break (10:30)

**5b.) Ajax Code Demo continued** (10:30)

+ Write out the AJAX request for saving a gif to our Rails backend.
  - Don't forget to uncomment adding the submit listener to the save form.
  - Point out the  `data` parameter of the ajax options argument and how we have it hold a key of `gif` that points to the gif object we received.
    ```javascript
    const saveGifAJAX = gif => {
      return $.ajax({
        method: 'POST',
        url: '/gifs',
        data: {
          gif: gif
        },
      });
    };
    ```
  - Add `saveGifAJAX(gif);` to `saveGif`:
    ```javascript
      const saveGif = e => {
        const $input = $("#save-gif-title");
        const title = $input.val();
        $input.val("");
        const gif = {
          title: title,
          url: $(".gif-display > img").attr('src')
        };
        // TODO: Initiate AJAX request to Rails backend, give a message if successful
        GifApiUtil.saveGifAjax(gif);
      };
    ```
  - Display a message upon success: Add `success: gif => postMessage('Successfully saved!'),` to `saveGifAJAX` and comment in `postMessage` helper function.
+ Write out the AJAX request for fetching a saved gif from our backend.
  - Don't forget to uncomment `old-gif-form` submit listener.
  - Walk-through the custom route and the custom controller action:
    ```rb
    # routes.rb
      resources :gifs, only: [:create]
      get '/gifs/:title', to: 'gifs#search'

    # GifsController
      def search
        gif = Gif.find_by_title(params[:title])
        if gif
          render json: gif
        else
          render json: ["There is no GIF with that title!"], status: 422
        end
      end
    ```
  - Add:
    ```javascript
      const fetchSavedGifAJAX = queryString => {
        return $.ajax({
          method: 'GET',
          url: `/gifs/${queryString}`,
          success: gif => appendGif(gif.url),
          error: errors => postMessage(errors.responseJSON[0]),
        })
      };
    ```
  - Add `fetchSavedGifAjax(title)` to `fetchSavedGif`:
    ```javascript
      const fetchSavedGif = () => {
        const $input = $("#old-gif-query");
        const title = $input.val();
        $input.val("");

        // TODO: Initate AJAX request to Rails backend, add gif to the DOM if successful
        fetchSavedGifAjax(title);
      };
    ```

**6.) Callback Hell:** (11:15)

+ Comment in `callbackHell`, which does the following:
  - Search our database for a gif with a certain query
  - If the gif exists, display the gif 
  - If no gif exists, query Giphy for a new gif
  - Display the gif on the page 
  - Save new gif to database and display success message if successful
+ Comment in `callback-hell-form` submit listener.
+ Put debuggers in each request along with backend controller methods.

**7.) Promises:** (11:30)
+ Motivation?
 - separation of concerns
 - Don't have to hard code success/error callbacks, allowing for DRYer code.
 - Clean syntax for chaining async callbacks. You would otherwise have to nest callbacks which would get messy fast.

**8.) Promises code demo:** (11:35)
+ Remove success and error callbacks from ajax functions and seperate them out into a `gif_api_util.js` file:
  ```javascript
    const GifAPIUtil = {
      newGifAJAX: queryString => {
        return $.ajax({
          method: "GET",
          url: `https://api.giphy.com/v1/gifs/random?tag=${queryString}&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
        });
      },
      fetchSavedGifAJAX: queryString => {
        return $.ajax({
          method: 'GET',
          url: `/gifs/${queryString}`,
        })
      },
      saveGifAJAX: gif => {
        return $.ajax({
          method: 'POST',
          url: '/gifs',
          data: {
            gif: gif
          },
        });
      },
    };

    module.exports = GifAPIUtil;
  ```
+ Import this util in `gifomatic.js`: `const GifApiUtil = require("./gif_api_util");`
+ Refactor `fetchNewGif`, `fetchSavedGif`, and `saveGif` using `.then` and `.fail`:
  ```javascript
    const fetchNewGif = () => {
      // ...
      
      const successCb = response => appendGif(response.data.image_url);
      GifApiUtil.newGifAJAX(queryString).then(successCb);
    };

    const fetchSavedGif = () => {
      // ...

      const successCb = gif => appendGif(gif.url);
      const errorCb = errors => postMessage(errors.responseJSON[0]);
      GifApiUtil.fetchSavedGifAJAX(queryString).then(successCb).fail(errorCb);
    };

    const saveGif = () => {
      // ...

      const successCb = gif => postMessage(`${gif.title} Successfully saved!`);
      GifApiUtil.saveGifAJAX(gif).then(successCb);
    };
  ```
+ `catch` vs. `fail`
  - `catch` will return a new promise while `fail` returns the original promise.
+ Mention that `.then` also takes an optional second argument, which is the error callback.
  So in `fetchSavedGif` we could say `GifApiUtil.fetchSavedGifAJAX(queryString).then(successCb, errorCb)`.
+ In fact, `catch(cb)` is an alias for `then(null, cb)`.

**9.) Quiz!** (12:05)

## Today's Projects
  + [Ajax Twitter](https://github.com/appacademy/curriculum/tree/master/javascript/projects/ajax_twitter)

## Common Student Questions
  + What is JSON?
  + Where does the manipulation of the DOM happen?
  + What is XML? Why don’t we use that?
  + Does the order matter in the object argument to ajax?
  + Can we use rails url helpers in ajax requests?
  + How do we actually connect the backend to the frontend, i.e. not understanding how our app knows about our js files ( cue webpack/bundle )

## Additional Insights and Notes
  + Be prepared to speak in depth about promises. Students will ask many questions about many different scenarios. Save edge case type questions for the q/a.

## Previous Lectures
+ [September2018](https://github.com/appacademy/2018-09-24-NYC-Lecture-Notes/tree/master/w6d3)
+ [July2018](https://github.com/appacademy/2018-07-23-NYC-Lecture-Notes/tree/master/w6d3)
+ [September2017](https://github.com/appacademy/2017-09-04-NYC-Lecture-Notes/tree/master/w6d3)
  + Code demo in Twitter, application.js
+ [July2017](https://github.com/appacademy/2017-07-03-NYC-Lecture-Notes/tree/master/w6d3)
+ [May2017](https://github.com/appacademy/2017-05-01-NYC-Lecture-Notes/tree/master/w6d3/CatFacts)
+ [February2017](https://github.com/appacademy/2017-02-27-NYC-Lecture-Notes/tree/master/w6d3)
+ [December2016](https://github.com/appacademy/NYC-student-lecture-notes-dec-2016/tree/master/w6d3)
+ [October2016](https://github.com/appacademy/NYC-student-lecture-notes/tree/master/w6d3)
+ [older](./pre_oct_2016)
