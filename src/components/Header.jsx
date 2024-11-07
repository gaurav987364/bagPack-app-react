const Header = () => {
  return (
    <div className=' w-full h-14 bg-slate-300 rounded-lg'>
        <div className="logo flex items-center justify-between p-2">
            <h1 className=' text-xl font-bold'>🎒Pack.ToDo</h1>
           <div className=' w-12 h-12 rounded-full overflow-hidden'>
             <img className=' w-full h-full object-cover ' src="https://images.pexels.com/photos/25913490/pexels-photo-25913490/free-photo-of-h.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Header