import type { NextPage } from 'next'
import Image from 'next/image'
import SectionCard from '../components/SectionCard'
import ptImage from '../public/pt.png'
import enImage from '../public/en.png'
import Link from 'next/link'
import { serverSideTranslations} from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const Home: NextPage = () => {

	const { t } = useTranslation();
	const router = useRouter();
	const [ping, setPing] = useState([]);


	const getPing = async () => {
		try {
		const response = await fetch(
			"https://online-menu-pedro-fagundes.herokuapp.com/products/ping"
		);
		const jsonData = await response.json();

		setPing(jsonData);
		} catch (err: any) {
		console.error(err.message);
		}
	};

	useEffect(() => {
		getPing();
	}, []);
	
	console.log(ping[0]);

	return (
		<div className='container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc'>
			<div className="col-11 d-flex flex-column || h100pc">
				<div className="h55" />
				<div className='justify-content-center fw-bold d-flex align-items-center mt-2 || h60'>
					<Link href={router.pathname} locale="pt" passHref>
						<div className="bg-neutral px-2 py-1 d-flex rounded10 align-items-center text-white me-3 || cursor">
							<div className='fs-2 fw-bold me-1'>PT</div>
							<div className="position-relative rounded || w40 h30">
								<Image
									src={ptImage}
									className='cursor'
									alt="português"
									layout="fill"
									objectFit="cover"
									/>
							</div>
						</div>
					</Link>
					<Link href={router.pathname} locale="en" passHref>
						<div className="bg-neutral px-2 py-1 d-flex rounded10 align-items-center text-white  || cursor">
							<div className='fs-2 fw-bold me-1'>EN</div>
							<div className="position-relative rounded || w40 h30">
								<Image
									src={enImage}
									className='cursor'
									alt="português"
									layout="fill"
									objectFit="cover"
									/>
							</div>
						</div>
					</Link>
				</div>
				<div className="flex-column d-flex justify-content-around || htotal">
					<SectionCard section='starters' position='start' name={`${t('common:starters')}`}/>
					<SectionCard section='main-dishes' position='end' name='Pratos Principais'/>
					<SectionCard section='desserts' position='start' name='Sobremesas'/>
					<SectionCard section='drinks' position='end' name='Bebidas'/>
				</div>
			</div>
		</div>
	)
}

export default Home
