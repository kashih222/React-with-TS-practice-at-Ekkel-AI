import { Link, Outlet } from "react-router-dom"


const Products = () => {
  return (
   
      <div className="flex items-center font-bold bg-black">
       <div className="flex flex-col h-screen w-1/5 items-start justify-start gap-10  pt-10 border-r-4 bg-gray-950 p-4">
         <Link className="bg-purple-600 px-6 py-2 rounded-xl text-white active:scale-90 w-56" to='/products/mancollection'>MansCollection</Link>
         <Link className="bg-purple-600 px-6 py-2 rounded-xl text-white active:scale-90 w-56" to='/products/womancollection'>WomanCollection</Link>
         <Link className="bg-purple-600 px-6 py-2 rounded-xl text-white active:scale-90 w-56" to='/products/kidscollection'>KidsCollection</Link>
       </div>
        <Outlet/>
      </div>
      
      
    
  )
}

export default Products