import React from 'react'

function Deal(props,setDeals) {
    let {hotdeals} =props.deals
    console.log(hotdeals,setDeals)
  return (
    <div>
        {hotdeals &&(
            <div>Deals</div>
        )}
    </div>
  )
}

export default Deal