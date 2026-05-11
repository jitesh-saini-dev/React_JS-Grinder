import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
 import {addtocart, fetchproductByid} from '../Slice/Product'


const About = () => {
  const diapatch = useDispatch ();

  const {id}= useParams();

  const sely = useSelector ((state)=> state. product.singleApiid)
  console.log(`>>>>>` ,sely)

  useEffect(()=>{
 diapatch(fetchproductByid(id))
  },[id])

  return (
    <div>

      <p>{sely.id}</p>
      <p>{sely.title}</p>
      <img src={sely.image} alt="" />

      <button onClick={() =>diapatch(addtocart(sely) , alert("Product Added To Cart")) }>
         add to cart 

      </button>
      
    </div>
  )
}

export default About
