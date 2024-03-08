//import route related objects
import { Link } from "react-router-dom";

//import styles
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav">
        <Link to='/'>
            <div>CRYPTO PRICES</div>
        </Link>
        <Link to='/currencies'>
            <div>CURRENCIES</div>
        </Link>
    </div>
  )
}
