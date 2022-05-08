import type { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
import backArrow from '../public/back-arrow.png'

let sectionName: string;

const Starters: NextPage = () => {

	const mycontext = useAppContext();
	useEffect(() => {
		mycontext.backArrow = true;
	},[])

	const [products, setProducts] = useState([]);
	const starters = products.filter((val: any) => {
		return val;
	});

	const getProducts = async () => {
		try {
		const response = await fetch(
			"https://online-menu-pedro-fagundes.herokuapp.com/products/starters"
		);
		const jsonData = await response.json();

		setProducts(jsonData);
		} catch (err: any) {
		console.error(err.message);
		}
	};

	const productShow = starters.map(
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

			sectionName = val.section_name;


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
				<div className="col-12 d-flex fw-bold text-center align-items-center fs-1 position-fixed || top55 color-standart bg-neutral-dark h45 font-inknut">
					{/* <Link href="/" passHref>
						<div id='nav-bar-logo' className=" position-relative || w38 h30">
							<Image
							src={backArrow}
							className='cursor'
							alt="backArrow"
							layout="fill"
							objectFit="cover"
							/>
						</div>
					</Link> */}
					<div className="col-12">
						{sectionName}
					</div>	
				</div>
			<div className="h100" />
				<div className="col-11 d-flex flex-column || w414 h100pc">
					<div> {productShow} </div>
				</div>
			</div>
		</div>
	);
};

export default Starters;
