import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'><h2 className='logo-name'>Logo</h2></div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/characters'>
                <a>Characters List</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </nav>
    )
}

export default Navbar