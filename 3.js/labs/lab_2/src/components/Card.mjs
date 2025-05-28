export async function fetchItems(){
  const url = "https://v2.jokeapi.dev/joke/Programming" +
              "?lang=es" +
              "&blacklistFlags=nsfw,religious,political,racist,sexist,explicit" +
              "&amount=3";
  const res = await fetch(url);
  const jokes = await res.json();
  console.log(jokes);
  
  return jokes;
}
