import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'

export let teste: boolean = true;

const NavBar: NextPage = () => {
  
  return (
    <div className="position-fixed container-fluid d-flex align-items-center justify-content-between p-0 flex-column || z-front bg-neutral-dark w414 h55">
        <div className="col-11 mt-2 d-flex align-items-center justify-content-between">
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
            <div className='m-0 d-flex row || w40 h40'><div className='bg-standart rounded mt-1 || h7'></div><div className='bg-standart rounded || h7'></div><div className='bg-standart rounded || h7'></div></div>
        </div>
      </div>
  )
}

export default NavBar
