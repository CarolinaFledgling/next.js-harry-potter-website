import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>
                &copy;{new Date().getFullYear()} Made with ❤️ by
                <a href="https://github.com/CarolinaFledgling" className="footer__link"> Karolina Kulinska</a>
            </p>
        </footer>
    )
}

export default Footer