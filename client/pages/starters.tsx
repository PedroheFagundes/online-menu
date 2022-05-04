import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Starters: NextPage = () => {
	const [products, setProducts] = useState([]);
	let sameSubSection: any = [];

	const allProducts = products.filter((val: any) => {
		return val;
	});

	const getProducts = async () => {
		try {
		const response = await fetch(
			"https://online-menu-pedro-fagundes.herokuapp.com/products/get"
		);
		const jsonData = await response.json();

		setProducts(jsonData);
		} catch (err: any) {
		console.error(err.message);
		}
	};

	const productShow = allProducts.map(
		(val: any, key: number, subSection: any) => {

			let previousSubSection = subSection[key - 1];
			const currentSubSection = subSection[key];
			let nextSubSection = subSection[key + 1];

			if (previousSubSection === undefined) {
				previousSubSection = {};
			}

			if (nextSubSection === undefined) {
				nextSubSection = {};
			}

			return (
				<>
				{
					nextSubSection.sub_section == currentSubSection.sub_section
					? 
						<>
						<div className="fs-1 mt-4 fw-bold m-0 || font-inknut">{val.sub_section}</div>
						<div className="m-0 col-12 || styled-border" />
						</>					
					: null
				}

				<div key={key}>
					<div className="fs-5 d-flex direction-column justify-content-between">
						<div className="fw-bold">
							{val.name}
						</div>
						<div>
							{`€ ${val.price}`}
						</div>
					</div>
					<div className="mb-2 || mtn5">
						{val.description}
					</div>
				</div>
				</>
			);
		}
	);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc">
			<div className="col-10 d-flex flex-column || w414 h100pc">
					<div> {productShow} </div>
			</div>
		</div>
	);
};

export default Starters;
