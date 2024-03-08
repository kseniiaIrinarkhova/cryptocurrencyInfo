//import static data
import { currencies } from '../data/constants.js';

//import route data
import { Link } from 'react-router-dom';

export default function Currencies() {
  return (
    <div className='currencies'>
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link key={symbol} to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>

  )
}
