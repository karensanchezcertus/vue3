import type { GIFResponse } from "./interfaces/gif.response";

const apiKey = "cF07mDNVwR6hwHTKryrlmwsLncTQh7HB";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((respuesta:GIFResponse)=> {
    console.log(respuesta.data.images.downsized_medium.url)
  })
  .catch((err) => console.info(err));