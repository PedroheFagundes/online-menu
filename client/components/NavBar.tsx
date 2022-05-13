import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'
import home from '../public/home.png'
import { useState } from 'react';
import { useTranslation } from 'next-i18next'


const NavBar: NextPage = () => {
	
	const { t } = useTranslation();

	const [showMenu, setShowMenu] = useState(false);
	const toogleBurgerMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeBurgerMenu = () => {
		setShowMenu(false)
	}

	return (
		<div className={`position-fixed container-fluid d-flex align-items-center p-0 flex-column || z-front bg-neutral-dark w414 ${showMenu ? 'h100pc' : 'h55'}`}>
			<div className="col-11 mt-2 d-flex align-items-center justify-content-between">
				<Link href="/" passHref>
					<div onClick={() => closeBurgerMenu()} className="position-relative || w30 h30">
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
					<div onClick={() => closeBurgerMenu()} className="position-relative || w152 h40">
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
					<div className="d-flex text-center justify-content-between row text-white fs-1 fw-bold || h100pc">
						<div>
						<Link href="/" passHref>
							<div onClick={() => closeBurgerMenu()} className="mt-5 mb-4 || cursor">{t('common:home')}</div>
						</Link>
						<Link href="/starters" passHref>
							<div onClick={() => closeBurgerMenu()} className="mb-1 || cursor">{t('common:starters')}</div>
						</Link>
						<Link href="/main-dishes" passHref>
							<div onClick={() => closeBurgerMenu()} className="mb-1 || cursor">{t('common:main-dishes')}</div>
						</Link>
						<Link href="/desserts" passHref>
							<div onClick={() => closeBurgerMenu()} className="mb-1 || cursor">{t('common:desserts')}</div>
						</Link>
						<Link href="/drinks" passHref>
							<div onClick={() => closeBurgerMenu()} className="mb-1 || cursor">{t('common:drinks')}</div>
						</Link>
						</div>
						<div className="d-flex flex-column justify-content-end fs-5 fw-normal mb-3">
							<div>{t('common:about')}</div>
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
