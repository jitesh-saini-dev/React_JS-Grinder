import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {remove} from '../Slice/Product'


const Rivers = () => {
  const dispatch = useDispatch()

  const cartdata = useSelector(
    (state) => state.product.cart
  );

  console.log(cartdata);

  return (
    <div>

      {cartdata.map((x) => (

        <div key={x.id}>

          <p>{x.title}</p>

          <p>{x.price}</p>

          <img
            src={x.thumbnail}
            width="100"
          />
  
  <button onClick={()=>dispatch(remove(x.id) , alert("Product remove To Cart")) }> Remove</button>
        </div>

      ))}

    </div>
  );
};


export default Rivers
