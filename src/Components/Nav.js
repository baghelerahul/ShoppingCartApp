import {Link} from 'react-router-dom'
import './Nav.css' 
let Nav=()=>{
    return(<nav className='navstyle'>
        <Link to="/">Home <i class="fa-solid fa-house"></i></Link>
        <input type='text' placeholder='Search Here'/>
        <Link to={"/login"}>Login <i class="fa-solid fa-user"></i></Link>
        {/* <Link to={"/wishlist"}>Wishlist <i class="fa-solid fa-heart"></i></Link> */}
        <Link to="/cart">Cart <i class="fa-solid fa-cart-shopping"></i></Link>
    </nav>)
}
export default Nav