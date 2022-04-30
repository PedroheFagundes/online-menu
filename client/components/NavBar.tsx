import type { NextPage } from 'next'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'

const NavBar: NextPage = () => {

  const [openedNavBar, setOpenedNavBar] = useState(false);
  const [chosenPage, setChosenPage] = useState("Home");

  const setPage = (pageName: string) => {
    setChosenPage(pageName);
    toggleNavBar();
  }

  const toggleNavBar = () => {
    openedNavBar ? setOpenedNavBar(false) : setOpenedNavBar(true);
  }

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center p-0 || bg-standart-dark w414 h55 '>
        <div className="col-11 d-flex align-items-center justify-content-between">
            <Link href="/" passHref>
            <div id='nav-bar-logo' className="position-relative || w152 h40">
                <Image
                src={logo}
                className='cursor'
                alt="logo"
                layout="fill"
                objectFit="cover"
                />
            </div>
            </Link>
            <div onClick={() => toggleNavBar()} className='m-0 d-flex row || w40 h40'><div className='bg-white rounded mt-1 || h7'></div><div className='bg-white rounded || h7'></div><div className='bg-white rounded || h7'></div></div>
        </div>
    </div>
  )
}

export default NavBar
