const type = document.getElementById('type');
const getJoke = document.getElementById('getJoke');
const Joke = document.getElementById('joke');
let category;
getJoke.addEventListener('click', () => {
  category = type.value;
  fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`).then((res) =>
    res.json().then((data) => {
      Joke.innerHTML = data.joke;
    })
  );
});
