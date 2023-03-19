
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
import "../styles/List.css"


function List({exerciseList, setExerciseList, exerciseId, setExerciseId, setTimeRemaining, setExerciseInProgress,exerciseIndex}) {

    const updateArray = (result) => {
        const arrayToEdit = [...exerciseList]
        const [itemToMove] = arrayToEdit.splice(result.source.index, 1)
        arrayToEdit.splice(result.destination.index, 0, itemToMove)
        setExerciseList(arrayToEdit)
        console.log(arrayToEdit)
    }
    const startExercise = () => {
        setExerciseId(exerciseList[0].id)
        setTimeRemaining(30)
        setExerciseInProgress(true)
    }
            
    return (
        <div className="text-center listContainer">
            <button onClick={startExercise} className="btn btn-primary border-0 btn-lg startButton" href="#" type="button">START</button>
            <div>
                <DragDropContext onDragEnd={updateArray}>
                    <Droppable droppableId='exercises'>
                        {(provided) => {
                            return (
                                <ul className='exercises' {...provided.droppableProps} ref={provided.innerRef}>
                                    {exerciseList.map((item, index) => {
                                        return (
                                            <Draggable key={index} draggableId={String(index)} index={index}>
                                                {(provided) => {
                                                    return (
                                                        <li className="exerciseList" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className={`exerciseListItem ${item.id === exerciseId ? 'inProgress' : ''}`}>{item.name}</div>
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