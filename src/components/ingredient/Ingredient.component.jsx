import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

import { ItemTypes } from '../../react-dnd/ItemTypes';


const Ingredient = ({ ingredient }) => {
    const { pieceImg } = ingredient;

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.INGREDIENT, ingredient },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImg} />
            <div
                ref={drag}
                className="ingredient"
                style={{
                    backgroundImage: `url(${pieceImg})`,
                    opacity: isDragging ? 0.3 : 1,
                }}
            />
        </>
    );
};

export default Ingredient;
