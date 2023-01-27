import { DragEvent, FC, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './EntryCard.css'

export const EntryCard= ({ entry }) => {


    let startDragging=useSelector((state)=>state.rootReducer.startDragging)
    let endDragging=useSelector((state)=>state.rootReducer.endDragging)
    
    const onDragStart = ( event ) => {
        event.dataTransfer.setData('text', entry._id );

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    const onClick=()=>{
    }


  return (
    <div
    onClick={onClick}
        // Eventos de drag
        draggable
        //onDragStart={ onDragStart }
        //onDragEnd={ onDragEnd }
    >
        <div className='EntryCard'>
            <div>
                <h2>Nombre:</h2>
                <h1>{ entry.name }</h1>
            </div>

            <div >
                <h2>Teléfono:</h2>
                <h1>{ entry.tel }</h1>
            </div>
        </div>
    </div>
    
  )
};