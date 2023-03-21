
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
import "../styles/List.css"


function List({ objects, setObjects }) {

    
    const updateArray = (result) => {
        const arrayToEdit = [...objects]
        const [itemToMove] = arrayToEdit.splice(result.source.index, 1)
        arrayToEdit.splice(result.destination.index, 0, itemToMove)
        setObjects(arrayToEdit)
    }
    return (
        <div className="text-center">
            <button className="btn btn-primary border-0 btn-lg startButton" href="#" type="button">START</button>
            <div>
                <DragDropContext onDragEnd={updateArray}>
                    <Droppable droppableId='exercises'>
                        {(provided) => {
                            return (
                                <ul className='exercises' {...provided.droppableProps} ref={provided.innerRef}>
                                    {objects.map((item, index) => {
                                        return (
                                            <Draggable key={index} draggableId={String(index)} index={index}>
                                                {(provided) => {
                                                    return (
                                                        <li className="exerciseList" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            {item.name}
                                                        </li>
                                                    )
                                                }}

                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )
                        }}

                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )

}




export default List;