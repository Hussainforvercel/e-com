import DarkModeToggle from "../modetoggle/tooglemood"

const Navbar = () => {
    return (
      <nav className="bg-blue-900 p-5">
        <DarkModeToggle/>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white font-semibold hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-semibold hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-semibold hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-semibold hover:underline">
              Contact
            </a>
          </li>
       
          <li>
            <a href="/product" className="text-white font-semibold hover:underline">
             Products
            </a>
          </li>

          
          <li>
            <a href="/dashboard" className="text-white font-semibold hover:underline">
            Admin Dashboard
            </a>
          </li>

          <li className="">
            <a href="/dashboard" className="text-white font-semibold hover:underline">
            Cart
            </a>
          </li>

          

        </ul>
      </nav>
    )
  }
  
  export default Navbar
  