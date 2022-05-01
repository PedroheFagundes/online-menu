import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Starters: NextPage = () => {

  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(true);


  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://preco-campeao.herokuapp.com/activeitems"
      );
      const jsonData = await response.json();

      setProducts(jsonData);
      setProductsLoaded(false);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc'>
      <div className="col-10 d-flex flex-column || w414 h100pc">
        <div className="fs-1 mt-4 fw-bold m-0 || font-inknut">Queijos</div>
        <div className="m-0 col-12 || styled-border">
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
      </div>
    </div>
  )
}

export default Starters
