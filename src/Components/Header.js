import { NavLink } from "react-router-dom"
const Header = () => {
    const navLinkStyles = ({isActive})=>{
        return { 
            TextDecoration : isActive ? 'none' : 'underline',
            color : isActive ? 'yellow' : 'white',
            fontSize : '25px'
        }
    }
    return (
        <div className="header" >
            <NavLink to = {'/home'} style={navLinkStyles} >Home</NavLink>
            
            <NavLink to = {'/about'} style={navLinkStyles} >About</NavLink>
        </div>
    )
  }
  
  export default Header