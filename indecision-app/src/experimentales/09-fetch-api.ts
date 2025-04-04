const apiKey = "cF07mDNVwR6hwHTKryrlmwsLncTQh7HB";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((respuesta)=> console.log(respuesta))
  .catch((err) => console.info(err));