import React from 'react'

const Footer = ({items}) => {
  const numberOfItemsAdded = items.length; // we dont make state here derived state ki bat horhi hi
  return (
    <div className=' w-full h-[5.5rem] bg-[#FFBB70] rounded-lg mt-1 p-1 flex justify-center items-center'>
        <p className=' text-center font-bold text-lg'>You have {numberOfItemsAdded} items in your list ✈️</p>
    </div>
  )
}

export default Footer