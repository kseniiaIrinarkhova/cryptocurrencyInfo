//import react objects
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//additional lib
import axios from 'axios';

export default function Price() {
  //take URL parameter
  const {symbol} = useParams();
  //creating url for rate request
  const url = `${import.meta.env.VITE_API_URL}/${symbol}/USD`
  //create a state - to show the information about rates
  const[coin, setCoin] = useState(null);

  /**
   * function that is used in useEffect
   */
  async function getCoin(){
    //call the API
    axios.get(url, { headers: { 'X-CoinAPI-Key': import.meta.env.VITE_API_KEY } })
    .then((res)=>{
      //set state for new data
      setCoin(res.data)
    })
    .catch((err)=>{
      console.log({ error: err })
    })
    
  }

  useEffect(()=>{
    //try to get rate information
    getCoin();
  },[]);

  // loaded function for when data is resieved.
  const loaded = () => {
    return (
      <div className="price">
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist or loading.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}
