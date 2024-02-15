import { useContext } from "react"
import Gc from "./Gc"
import './Cart.css'

let Cart=()=>{
    let gobj=useContext(Gc)
    return(
        <>
        <div className="headings">
             Cart Products
             <hr></hr>
        </div>
        <div className="prodcon">
            {
                gobj.cart.map((item,index)=>{
                    return(
                        <div className="item">
                            <div className="imgcon">{
                                item.images.map((url)=>{
                                    return <img src={url}/>

                                })}</div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div>{item.price}</div>
                            <div><button  className='btn1'  onClick={()=>gobj.dec(index)}>-</button> {item.qty} <button  className='btn1' onClick={()=>gobj.inc(index)}>+</button></div>
                            <div>{item.total}</div>
                            <button className='btn3'onClick={()=>gobj.del(index)}>Delete</button>
                            <button className='btn4'>Proceed To Pay</button>
                            
                        </div>
                    )
                })
            }

      { gobj.cart.length>0&&<div>Total: {gobj.gt}</div>}
        </div>
        </>
    )
    
        
}
export default Cart