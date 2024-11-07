import React, { useState } from 'react'
import Item from './Item'

// const items = [
//     {
//         name:"jacket",
//         id:1,
//         quantity:1,
//         packed: false,
//     },
//     {
//         name:"socks",
//         id:2,
//         quantity: 3,
//         packed: false,
//     },
//     {
//         name: 'shoes',
//         id: 3,
//         quantity: '2',
//         packed: false,
//     },
// ]

//as we comment the static data becoz we recive data as prop in props and use it


const PackingList = ({items, handelDelete, handelUpdate, handelClearList}) => {
    const [sort, setSort] = useState('input');
    let sortedItems; //basically defalut item ye hi hoge
    if(sort === 'input') sortedItems = items; // this is default
    else if(sort === 'name') sortedItems = items.sort((a,b) => a.name.localeCompare(b.name)); //sort by name
    else if(sort === 'quantity') sortedItems = items.sort((a,b) => a.quantity - b.quantity); //sort by quantity

  return (
    <div className=' w-full h-[60%] bg-[#113261d2] p-2 rounded-lg mt-1'>
        <h1 className=' w-full mx-auto text-center text-lg text-white opacity-60'>Add Your Items !</h1>
        <ul className=' flex items-center gap-5 flex-wrap'>
            {sortedItems.map(item => ( //map on sorted so its defalut sorted
                <li key={item.id}>
                <Item item={item}  handelDelete={handelDelete} handelUpdate={handelUpdate}/>
                </li>
            ))}
        </ul>
        <div className=' absolute bottom-[22%] left-16'>
            <select value={sort} onChange={(e)=> setSort(e.target.value)} className=' h-[2.5rem] rounded-full bg-gray-300 text-black font-bold'>
                <option value='input'>Sort By Words</option>
                <option value="name">Sort By Name</option>
                <option value="quantity">Sort By Quantity</option>
            </select>
            <button onClick={handelClearList} className=' px-5 text-white font-bold py-2 rounded-full bg-green-600'>Clear List</button>
        </div>
    </div>
  )
}

export default PackingList