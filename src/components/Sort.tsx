import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setActiveSort} from "../redux/reducers/sortSlice";
import {fetchProducts} from "../redux/asyncActions/Products";

const Sort:FC = () => {
    const [isOpened, setIsOpened] = useState(false)

    const active = useAppSelector(state => state.sortSlice.active)
    const sortArray = useAppSelector(state => state.sortSlice.sortArray)

    const activeSort = sortArray[active]
    const activeCategory = useAppSelector(state => state.categorySlice.active)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts(activeSort.name, activeCategory))
    }, [active])
    return (
        <div className='sort' onClick={() => setIsOpened(!isOpened)}>
            Сортировка по: <span>{activeSort.title}</span>
            {isOpened &&
                <div className="popup">
                    {sortArray.map((sort, index) => (
                        <p
                            key={index}
                            className={activeSort.id === index ? 'active' : ''}
                            onClick={() => {
                                dispatch(setActiveSort(index))
                            }}
                        >{sort.title}</p>
                    ))}
                </div>
            }

        </div>
    );
};

export default Sort;