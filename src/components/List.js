
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
import "../styles/List.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function List({ exerciseList,
    setExerciseList,
    exerciseId,
    setExerciseId,
    setTimeRemaining,
    setExerciseInProgress,
    exerciseIndex,
    startButtonHidden,
    dragDisabled }) {

    const updateArray = (result) => {
        const arrayToEdit = [...exerciseList]
        const [itemToMove] = arrayToEdit.splice(result.source.index, 1)
        arrayToEdit.splice(result.destination.index, 0, itemToMove)
        setExerciseList(arrayToEdit)
        window.localStorage.setItem("workout builder list", JSON.stringify(arrayToEdit))
        console.log(arrayToEdit)
    }
    const startExercise = () => {
        window.location.href = "/WorkoutPage"
        // setExerciseId(exerciseList[0].id)
        // setTimeRemaining(30)
        // setExerciseInProgress(true)
    }
const warning = () => {
    toast("you must add at least one exercise")
}
    return (
        <div className="text-center listContainer">
            <button onClick={()=> {   
                if (exerciseList.length !== 0) {
                    startExercise()
                } else {
                    warning()
                }
                
                }} className={`btn btn-primary border-0 btn-lg startButton ${startButtonHidden ? 'd-none' : ''}`} href="#" type="button">START</button>
            <ToastContainer></ToastContainer>
            
            <div>
                <DragDropContext onDragEnd={updateArray}>
                    <Droppable droppableId='exercises'>
                        {(provided) => {
                            return (
                                <ul className='exercises' {...provided.droppableProps} ref={provided.innerRef}>
                                    {exerciseList.map((item, index) => {
                                        return (
                                            <Draggable isDragDisabled={dragDisabled} key={index} draggableId={String(index)} index={index}>
                                                {(provided) => {
                                                    return (
                                                        <li className="exerciseList" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className={`exerciseListItem ${exerciseIndex === exerciseList.findIndex((listItem) => {
                                                                return listItem.id === item.id
                                                            }) ? 'inProgress' : ''}`}>{item.name}</div>
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