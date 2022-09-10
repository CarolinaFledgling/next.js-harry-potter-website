import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Image src="/logo.png" width={218} height={55} alt="harry potter logo"></Image>
            </div>

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