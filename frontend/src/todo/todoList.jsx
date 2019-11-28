import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

export default props =>{
    const list = useSelector(state => state.todo.list)
    const dispatch = useDispatch()

    const renderRows = () => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton type='success' hide={todo.done} icon='check' 
                        onClick={() => dispatch(markAsDone(todo))}/>
                    <IconButton type='warning' hide={!todo.done} icon='undo' 
                        onClick={() => dispatch(markAsPending(todo))}/>
                    <IconButton type='danger' hide={!todo.done} icon='trash-o'
                        onClick={() => dispatch(remove(todo))}/>
                </td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}