import React, { useEffect, useState } from 'react'
import  {useDispatch,useSelector} from 'react-redux'
import {fetchproduct} from '../Slice/Product'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const sely = useSelector ((state) => state.product.Apidata)
  console.log(`>>>>>>` ,sely)

  const [serch,setserch] = useState("");
  const [categare , setcategare] = useState("");
  const [sort, setsort] = useState("");



  const filterdata = sely.filter((iteam)=> 
    iteam.title.toLowerCase().includes(serch.toLowerCase())
  )

const categar = [...new Set(filterdata.flatMap((x)=> x.tags))];

const categaress = categare?

          filterdata.filter((f)=> f.tags.includes(categare)):
          filterdata;



          const sorteddata = [...categaress];

          if(sort === "low") sorteddata.sort((a,b)=> a.price - b.price)
          if(sort === "hige") sorteddata.sort((a,b)=> b.price - a.price)


  useEffect (()=>{
    dispatch(fetchproduct())
  },[]);

  return (
    <div>

      <div>
        <select onChange={(e)=> setsort(e.target.value)}>
          <option value="">sort</option>
          <option value="low">price -</option>
          <option value="hige">price +</option>


        </select>
      </div>
      
        <input type='search' 
        placeholder=' searcher.........'
        value={serch}
        onChange={(e)=> setserch(e.target.value)} 
        className=' border '/>

<button onClick={()=> setcategare("")}>All</button>
{ categar.map((c,i)=>(
  <button key={i} onClick={()=> setcategare(c)}>{c}</button>
)) }

      {sorteddata.map((x)=> (
        <div key={x.id}>
          <p>{x.id}</p>
          <p>{x.title}</p>
          <p>{x.price}</p>

          <button onClick={() => navigate(`/about/${x.id}`)} className=' border w-15 h-15'> viwe deatail</button>
        </div>
      ))}
    </div>
  )
}

export default Home
