// Before I move on, I would like to challenge you to create this yourself without having to follow along.We went over everything that you need to know already.In the resources for this video, you'll find the 'chuck - joke - generator`folder with the HTML and CSS along with an empty `script.js` file. You just need to do the following:

// - Add an event listener for the button
// - Create a function that will make a request to https://api.chucknorris.io/jokes/random using the `XMLHttpRequest` object
// - Get the data that is sent back (this.responseText), parse the JSON and get the joke from it
// - Display the joke in the page (you can use the `innerHTML` property)

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(JSON.parse(this.responseText).value);
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
      }
    }
  };

  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
