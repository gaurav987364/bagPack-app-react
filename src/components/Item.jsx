import React from 'react'

const Item = ({item, handelDelete, handelUpdate}) => {
  return (
    <div>
        <div className=' flex items-center gap-1'>
            {/* <input
             type="checkbox" 
             value={item.packed}
             onChange={()=> handelUpdate(item.id)}
             
             /> */} 
           <div className={`${item.packed ? 'line-through' : {}}`}>
           <strong className=' text-lg text-white opacity-70'>{item.quantity}</strong>
           <span className='  text-white text-lg opacity-70'>{item.name} </span>
           </div>
            <span onClick={()=> handelDelete(item.id)} className='   rounded-full text-red-500 text-lg font-bold border opacity-70 border-white px-2'> ✕</span>
        </div>
    </div>
  )
}

export default Item;