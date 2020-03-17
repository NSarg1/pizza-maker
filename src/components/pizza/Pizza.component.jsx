import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../react-dnd/ItemTypes';

const bgImgs = [
    { name: 'olive', img: require('../../assets/pizza/olive.png') },
    { name: 'tomato', img: require('../../assets/pizza/tomato.png') },
    { name: 'greens', img: require('../../assets/pizza/greens.png') },
    { name: 'mashrooms', img: require('../../assets/pizza/mashrooms.png') },
    { name: 'sausage', img: require('../../assets/pizza/sausage.png') },
];

const Pizza = () => {
    const [ingredientsState, setIngredientsState] = useState([]);
    const [, drop] = useDrop({
        accept: ItemTypes.INGREDIENT,
        drop: ({ ingredient }) => handleDrop(ingredient),
    });

    function handleDrop(ingredient) {
        
        setIngredientsState([...ingredientsState, ingredient.name]);
    }

    console.log(ingredientsState);

    return (
        <div className="pizza" ref={drop}>
            {bgImgs.map((item) => {
                const isInclude = ingredientsState.includes(item.name);
                if (isInclude) {
                    return (
                        <div
                            style={{ backgroundImage: `url(${item.img})` }}
                            className={`pizza__ingredient pizza__${item.name}`}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default Pizza;
