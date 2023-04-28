import Footer from "./general/Footer"
import Navbar from "./general/Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout