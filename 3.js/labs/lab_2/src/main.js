fetch(
  "https://v2.jokeapi.dev/joke/Programming?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=3"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
