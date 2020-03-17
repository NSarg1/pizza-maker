import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../react-dnd/ItemTypes';

const Ingredient = ({ ingredient }) => {
    const { imgUrl } = ingredient;

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.INGREDIENT, ingredient },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className="ingredient"
            style={{
                backgroundImage: `url(${imgUrl})`,
                opacity: isDragging ? 0.5 : 1,
            }}
        />
    );
};

export default Ingredient;
