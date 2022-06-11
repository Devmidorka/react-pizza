import React, {FC} from 'react';
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";

const App:FC = () => {
    return (
        <div className='app'>
            <Catalog/>
            <Cart products={[]}/>
        </div>
    );
};

export default App;