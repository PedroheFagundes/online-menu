import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Starters: NextPage = () => {

  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    getProducts();
  }, []);

  const productShow = allProducts.map((val: any, key: number, subSection: any) => {

    let previousSubSection = subSection[key - 1];
    const currentSubSection = subSection[key];
    let nextSubSection = subSection[key + 1];
    
    return (
      <div key={key}>{val.name}</div> 
    )
  });

  return (
    <div className='container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc'>
      <div className="col-10 d-flex flex-column || w414 h100pc">
        <div className="fs-1 mt-4 fw-bold m-0 || font-inknut">Queijos</div>
        <div className="m-0 col-12 || styled-border">
          <div>{productShow}</div>
        </div>
      </div>
    </div>
  )
}

export default Starters
