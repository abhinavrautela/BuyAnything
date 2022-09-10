import React, { useState } from 'react';
import PageNotFound from './PageNotFound';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import MainLayout from './MainLayout';
import ProductDetail from './ProductDetail';

function App() {
    const [cart, setCart] = useState({})
   const  handleAddToCart = (productId, count) => {
    let oldcount = cart[productId] || 0
    setCart({...cart, [productId]: oldcount + count  })
   }
    const totalCount = Object.keys(cart).reduce((previous, current) => previous + cart[current], 0)
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainLayout totalProduts={totalCount}/>}>
					<Route index element={<FrontPage />} />
					<Route path="/product/:id/" element={<ProductDetail onClick={handleAddToCart}/>} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
