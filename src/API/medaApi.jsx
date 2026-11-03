import axios from 'axios'
const UNSPLASH = import.meta.env.VITE_UNSPLASH_KEY
const KLIPY = import.meta.env.VITE_KLIPY_KEY

export const FetchApi = async(query) => {

 try {
const respon =  await axios.get("https://api.unsplash.com/search/photos",

{
    params:{
         query: query,
      per_page: 30,
    },
    headers:{
         Authorization: `Client-ID ${UNSPLASH}`

    }
}
)     
console.log(respon);
 console.log(respon.data);
    return respon.data;
}
catch (error) {
    console.log(error.response?.status);
    console.log(error.response?.data);
  }
console.log("API key loaded:", Boolean(UNSPLASH));
console.log("API key length:", UNSPLASH?.length);
}
// KLIPY GIF API
export const FetchGif = async (query = query) => {

  try {

    const respon = await axios.get(
      `https://api.klipy.com/api/v1/${KLIPY}/gifs/search`,
      {
        params: {
          q: query,
          page: 1,
          per_page: 30,
          customer_id: "ramsha-001"
        }
      }
    );

    console.log("KLIPY GIF DATA:", respon.data);

    return respon.data;

  } catch (error) {

    console.log("KLIPY Error:", error.message);
    console.log("KLIPY Status:", error.response?.status);
    console.log("KLIPY Error Data:", error.response?.data);

  }
};


export default FetchApi                            
 

