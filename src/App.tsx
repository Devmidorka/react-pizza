import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Error from './pages/Error'
const App:FC = () => {
    return (
        <div className='app container'>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Catalog/>}/>
                    <Route path={'/cart'} element={<Cart products={[]}/>}/>
                    <Route path={'*'} element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;