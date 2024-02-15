
import './login.css'
let Login=()=>{
    return(<div className='main'>
        

        <div className='container'>
        <h2>Log In </h2>

         <input type="text" placeholder="Enter your Name"/><br/> 
        <input type="text" placeholder="Enter id or Phone No"/><br/> 
        <input type="password" placeholder="Enter your Password"/><br/> 
        <input type="text" placeholder="Enter your Number"/><br/> 
        <button className="bttn" >Login</button><br/> 
        <span className='forget'>Forget Password ?</span>


        </div>

    </div>)
}
export default Login
