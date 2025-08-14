import './NavBar.css'

export const NavBar = ({children})=>{
   
    return (
        <nav className='navbar'>
            {children}
        </nav>
    )
}