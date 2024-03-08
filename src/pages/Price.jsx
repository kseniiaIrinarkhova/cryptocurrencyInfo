//import react objects
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//additional lib
import axios from 'axios';

export default function Price() {
  const API_KEY= import.meta.env.VITE_API_KEY;
  const {symbol} = useParams();

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`

  const[coin, setCoin] = useState(null);

  async function getCoin(){
    console.log(symbol)
    axios.get(url, { headers: { 'X-CoinAPI-Key': API_KEY } })
    .then((res)=>{
      
      console.log(res.data)
      setCoin(res.data)
    })
    .catch((err)=>{
      console.log({ error: err })
    })
    
    // try {
    //   const response = await axios.get(url, { headers: { 'X-CoinAPI-Key': API_KEY } })
    //   const data = a
    //   setCoin(response.data)
    //   console.log(response)
    // } catch (err) {
    //   console.log({error: err})
    // }
  }

  useEffect(()=>{
    getCoin();
  },[]);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };



  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}
