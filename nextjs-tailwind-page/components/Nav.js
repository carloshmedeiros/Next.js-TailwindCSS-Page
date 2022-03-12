import { useState } from 'react'
import Image from 'next/image'

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-azul-escuro transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-700 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-azul-escuro h-20"> {/*logo container*/}
                <Image className="text-2xl font-semibold" src="/LogoBHTBranca.png" width={100} height={100}></Image>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl tracking-normal py-8 text-white font-bold" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    HOME
                </a>
                <a className="text-xl tracking-normal py-8 text-white font-bold" href="/Contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    CONTACT
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed bg-azul-padrao shadow-lg
          z-50 w-full px-5 flex justify-between items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex py-6 justify-between items-center px-8">
                <Image className={`${open ? "translate-x-80" : ""} hidden md:flex transition-all duration-700 filter drop-shadow-md mt`} src="/Logo.png" width={210} height={85}></Image>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-yellow-500 rounded-lg transform transition duration-700 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-yellow-500 rounded-lg transition-all duration-700 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-yellow-500 rounded-lg transform transition duration-700 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                    <li className="flex flex-col cursor-pointer text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none flex justify-center">
                            <span className="ml-2 font-bold">HOME</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Contact">
                        <li className="flex flex-col cursor-pointer text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none flex justify-center">
                            <span className="ml-2 font-bold">CONTATO</span>
                        </li>
                    </NavLink>
                    <div className="pl-40">
                        <button role="button" aria-label="live chat" className="focus:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 font-semibold rounded-full focus:outline-none">Baixar APP</button>
                    </div>

                </div>
            </div>
        </nav>

    )
}