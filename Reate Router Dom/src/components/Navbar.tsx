import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-4 bg-purple-600'>
        <div className='font-bold text-2xl'>
            LOGO
        </div>
        <div>
            <ul className='flex items-center justify-center gap-8 font-bold border border-1 border-white px-10 py-3 rounded-2xl '>
                <Link className="hover:text-white active:scale-90" to='/'><li>Home</li></Link>
                <Link className="hover:text-white active:scale-90" to='/about'><li>About</li></Link>
                <Link className="hover:text-white active:scale-90" to='/products'><li>Product</li></Link>
                <Link className="hover:text-white active:scale-90" to='/services'><li>Services</li></Link>    
            </ul>
        </div>
        <div className='font-bold text-2xl px-4 py-2 rounded-2xl hover:bg-purple-950 hover:text-white border-1 border-white  '>
            <a className="" href="">LOGIN</a>
        </div>
    </div>
  )
}

export default Navbar