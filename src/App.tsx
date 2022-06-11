import React, {FC} from 'react';
import Cart from "./pages/Cart";

const App:FC = () => {
    return (
        <div className='app'>
            <Cart products={[]}/>
        </div>
    );
};

export default App;