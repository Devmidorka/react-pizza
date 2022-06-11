import React, {FC, useState} from 'react';

const Sort:FC = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [active, setActive] = useState(0);
    const sortNames = ['популярности', 'цене', 'алфавиту'];
    const activeName = sortNames[active]
    return (
        <div className='sort' onClick={() => setIsOpened(!isOpened)}>
            Сортировка по: <span>{activeName}</span>
            {isOpened &&
                <div className="popup">
                    {sortNames.map((name, index) => (
                        <p
                            key={index}
                            className={activeName === name ? 'active' : ''}
                            onClick={() => setActive(index)}
                        >{name}</p>
                    ))}
                </div>
            }

        </div>
    );
};

export default Sort;