import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import './Home.css'
import Gc from "./Gc"

let Home=()=>{
    let [data,setData]=useState([])
    let gobj=useContext(Gc)
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(
            (res)=>{
                console.log(res.data.products)
                setData(res.data.products)
            }
        )
        
    },[])
    return(
        <div className="prodcon">
            {
                data.map((item,index)=>{
                    return(
                        <div className="item">
                            <div className="imgcon"> 
                            <img src= {item.images[0]}/>
                            {/* <img src= {item.images[1]}/>
                            <img src= {item.images[2]}/> */}
                            </div>
                            {/* <div className="imgcon">{
                                item.images.map((url)=>{
                                    
                                    return <img src={url}/>

                                })}</div> */}
                            <div><span>Name:</span>{item.title}</div>
                            <div>Desc:{item.description}</div>
                            <div>Price:{item.price}</div>
                            <div>Rating:{item.rating}</div>
                            <div>Category:{item.category}</div>
                            
                            <button className="btn" onClick={()=>gobj.addcart(item)}>AddCart</button>&nbsp;
                            {/* <button>Buy Now</button> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home