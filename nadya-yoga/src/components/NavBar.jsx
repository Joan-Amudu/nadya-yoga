'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavBar() {
    const path = usePathname(); // hook to check current path
        return (
            <nav className="NavBar">
                <ul className="menu">                
                    <li><Link href="/">Home</Link></li>     
                    <li><Link href="/Classes" className={path.startsWith('/classes') ?
                    'active' : null}>Classes</Link></li>
                    <li><Link href="/Timetable" className={path.startsWith('/timetable') ?
                    'active' : null}>Timetable</Link></li>                
                    <li><Link href="/Contact" className={path.startsWith('/contact') ?
                    'active' : null}>Contact</Link></li>
                    <li><Link href="/Login" className={path.startsWith('/login') ?
                    'active' : null}>Login</Link></li>
                    <li><Link href="/Register" className={path.startsWith('/register') ?
                    'active' : null}>Register</Link></li>
                </ul>                         
            </nav>
        )
}
export default NavBar
