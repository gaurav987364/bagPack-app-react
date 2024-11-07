/* eslint-disable react/prop-types */
import React from 'react'

const Form = ({handelAdd}) => {

  //recive this handel add as prop from app jsx or parent
    const [name, setName] = React.useState('');
    const [quantity, setQuantity] = React.useState();

    ///lifting state up like that to hame ye state idhr se cut krke parent me paset krni hai 
    //const [items, setItems] = React.useState([]);

    //similarly we cut it from here and pase to app jsx
    //const handelAdd = (item)=>{
     // setItems((items )=> [...items, item]); //now simple we do phle upar wale arry ko copy kiya taki vo mutate / change na ho and item me hame niche se har bar ek chij revive hogi usko add krdiya basiclaly
   // }
    const handelSubmit = (e) => {
        e.preventDefault();
        //if there is nothing or user click on add so nothing is add to object newITEM
        if(!name) return;

       const newItem = {
        name,
        quantity,
        packed: false,
        id: Date.now()
       } 

       handelAdd(newItem); // idhr se bj kr upar funtion me recive krliya


        setName(' ')
        setQuantity(1)
    }
  return (
    <form onSubmit={handelSubmit} className=' mt-1 w-full h-[7rem] bg-slate-300 rounded-md'>
        <h1 className=' mx-auto text-center'>What do you need for trip?</h1>
       <div className=' w-full flex items-center gap-5 justify-evenly p-1 mt-2'>

       <select value={quantity} onChange={(e=> setQuantity(Number(e.target.value)))} className=' h-10 rounded-md'>
            {
            Array.from({length: 10},(_ , i)=>i + 1)
            .map(num=>(
                <option key={num} value={num}> {num}</option>
            ))
            }
        </select>

         <input
          className=' w-[50%] mx-auto rounded-lg p-2 border border-gray-500 outline-none'
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Add a Items...'
         />
        <button className=' px-5 text-white font-bold py-2 rounded-md bg-blue-600'>Add</button>
       </div>
    </form>
  )
}

export default Form