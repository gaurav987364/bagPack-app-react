import React from "react"
//import PintrestLayout from './components/PintrestLayout'

import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import PackingList from "./components/PackingList"

const App = () => {
  const [items, setItems] = React.useState([]);

  //below all are crud operations
  //add items to the list
  //update or checked items
  //delete items from the list
  //clear the list
  
  const handelAdd = (item)=>{
    setItems((items )=> [...items, item]);
  };
  //ab is handel add ko as prop from ko bjdege
  //or jo upare items hai usko list ko bjdege taki vo sala ui me dikhe

  //another case of child to parent is to delete items from the list
  const handelDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //another similiar case to update or checked items
  const handelUpdate  = (id) => {
    setItems((items) => items.map((item) => item.id === id ? 
    {...items, packed: !item.packed} : item));
  };
  //not working for now 

  //delete items from list
  const handelClearList = ()=>{
    const confirmAlert = window.confirm('Are you sure you want to delete all ?')

   if(confirmAlert) setItems([]); //agar true hoga to delete krdena
  }
  return (
    <div className=" w-full h-screen bg-white p-1">
      {/* <PintrestLayout /> */} 
      {/* <StepIncrease/> */}
      <Header/>
      <Form handelAdd={handelAdd}/>
      <PackingList items={items} handelDelete={handelDelete} handelUpdate={handelUpdate} handelClearList={handelClearList}/>
      <Footer items={items}/>
    </div>
  )
}

export default App