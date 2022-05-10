import type { NextPage } from 'next'
import Image from 'next/image'
import SectionCard from '../components/SectionCard'
import pt from '../public/pt.png'
import en from '../public/en.png'


const Home: NextPage = () => {

	return (
		<div className='container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc'>
			<div className="col-11 d-flex flex-column || h100pc">
				<div className="h55" />
				<div className='justify-content-center fw-bold d-flex align-items-center mt-3 || h60'>
					<div>PT</div>
					<div className="position-relative rounded || w40 h40">
						<Image
							src={pt}
							className='cursor'
							alt="português"
							layout="fill"
							objectFit="cover"
							/>
					</div>
					<div>EN</div>
					<div className="position-relative rounded || w40 h40">
						<Image
							src={en}
							className='cursor'
							alt="english"
							layout="fill"
							objectFit="cover"
							/>
					</div>
				</div>
				<div className="flex-column d-flex justify-content-around || htotal">
					<SectionCard section='starters' position='start' name='Entradas'/>
					<SectionCard section='main-dishes' position='end' name='Pratos Principais'/>
					<SectionCard section='desserts' position='start' name='Sobremesas'/>
					<SectionCard section='drinks' position='end' name='Bebidas'/>
				</div>
			</div>
		</div>
	)
}

export default Home
