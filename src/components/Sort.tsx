import React from 'react';

const Sort = () => {
    return (
        <div className='sort'>
            Сортировка по: <span>популярности</span>
            <div className="popup">
                <p className='active'>популярности</p>
                <p>цене</p>
                <p>алфавиту</p>
            </div>
        </div>
    );
};

export default Sort;