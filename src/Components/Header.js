import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <Link to = {'/'}><h1 className="header" style={{cursor:'pointer'}}>Home</h1></Link>
            <Link to = {'/about'}><h1 className="header"  style={{cursor:'pointer'}}>About</h1></Link>
        </div>
    )
  }
  
  export default Header