import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { serverSideTranslations} from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { i18n } from "next-i18next";

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const MainDishes: NextPage = () => {

	const { t } = useTranslation();
	const [products, setProducts] = useState([]);
	const mainDishes = products.filter((val: any) => {
		return val;
	});

	const getProducts = async () => {
		try {
		const response = await fetch(
			`https://online-menu-pedro-fagundes.herokuapp.com/products/main-dishes-${i18n?.language}`
		);
		const jsonData = await response.json();

		setProducts(jsonData);
		} catch (err: any) {
		console.error(err.message);
		}
	};

	const productShow = mainDishes.map(
		(val: any, key: number, subSection: any) => {

			let previousSubSection = subSection[key - 1];
			const currentSubSection = subSection[key];
			let nextSubSection = subSection[key + 1];

			if (previousSubSection === undefined) {
				previousSubSection = {};
			}

			if (nextSubSection === undefined) {
				nextSubSection = { subSection: ""};
			}

			return (
				<div key={key}>
					{
						previousSubSection.sub_section != currentSubSection.sub_section
						? 
							<>
							<div className="lh-2 fs-1 mt-4 fw-bold m-0 || font-inknut">{val.sub_section}</div>
							<div className="m-0 mb-2 col-12 || styled-border"/>
							</>					
						: null
					}

					<div>
						<div className="lh-1 fs-5 d-flex direction-column justify-content-between">
							<div className="fw-bold col-9">
								{val.name}
							</div>
							<div className="col-3 text-end">
								{`€ ${val.price}`}
							</div>
						</div>
						<div className="lh-1 col-9 mb-3">
							{val.description}
						</div>
					</div>
				</div>
			);
		}
	);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="container-fluid p-0 || bg w414 h100pc">
			<div className=" d-flex justify-content-center row">
				<div className="col-12 d-flex fw-bold text-center align-items-center fs-1 position-fixed justify-content-center || w414 top55 color-standart bg-neutral-dark h45 font-inknut">
					<div>{t('common:main-dishes')}</div>	
				</div>
			<div className="h100" />
				<div className="col-11 d-flex flex-column || w414 h100pc">
					<div> {productShow} </div>
				</div>
			</div>
		</div>
	);
};

export default MainDishes;
