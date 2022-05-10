import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'
import home from '../public/home.png'
import { useState } from 'react';

const NavBar: NextPage = () => {
	
	const [showMenu, setShowMenu] = useState(false);
	const toogleBurgerMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<div className={`position-fixed container-fluid d-flex align-items-center justify-content-between p-0 flex-column || z-front bg-neutral-dark w414 ${showMenu ? 'h460' : 'h55'}`}>
			<div className="col-11 mt-2 d-flex align-items-center justify-content-between">
				<Link href="/" passHref>
					<div className="position-relative || w30 h30">
						<Image
						src={home}
						className='cursor'
						alt="home"
						layout="fill"
						objectFit="cover"
						/>
					</div>
				</Link>
				<Link href="/" passHref>
					<div className="position-relative || w152 h40">
						<Image
						src={logo}
						className='cursor'
						alt="logo"
						layout="fill"
						objectFit="cover"
						/>
					</div>
				</Link>
				<div onClick={() => toogleBurgerMenu()} className='m-0 d-flex row || cursor w40 h40'><div className='bg-standart rounded mt-1 || h7'></div><div className='bg-standart rounded || h7'></div><div className='bg-standart rounded || h7'></div></div>
			</div>
				{showMenu ?
					<div className="d-flex text-center row text-white fs-2 fw-bold || font-inknut">
						<Link href="/" passHref>
							<div onClick={() => toogleBurgerMenu()} className="mb-5 || cursor">Página Inicial</div>
						</Link>
						<Link href="/starters" passHref>
							<div onClick={() => toogleBurgerMenu()} className="mb-2 || cursor">Entradas</div>
						</Link>
						<Link href="/main-dishes" passHref>
							<div onClick={() => toogleBurgerMenu()} className="mb-2 || cursor">Pratos Principais</div>
						</Link>
						<Link href="/desserts" passHref>
							<div onClick={() => toogleBurgerMenu()} className="mb-2 || cursor">Sobremesas</div>
						</Link>
						<Link href="/drinks" passHref>
							<div onClick={() => toogleBurgerMenu()} className="mb-2 || cursor">Bebidas</div>
						</Link>
						<div className="fs-5 fw-normal mt-5 mb-3 || font-poppins">
							<div>Criado e desenvolvido por Pedro Fagundes</div>
							<a href="https://www.pedrofagundes.com/" target="_blank">
								<div className="color-standart">pedrofagundes.com</div>
							</a>
						</div>
					</div>
				: null}
		</div>
	)
}

export default NavBar
