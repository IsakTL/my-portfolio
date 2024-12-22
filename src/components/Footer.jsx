import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import netlifyLogo from '../assets/netlify.svg'

export default function Footer() {
    return (
        <>
            <h3>Built with Vite, React, and Netlify.</h3>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://netlify.com" target="_blank">
                <img src={netlifyLogo} className="logo netlify" alt="Netlify logo" />
            </a>
        </>
    )
}