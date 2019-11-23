import React from 'react'
import IconButton from '../template/iconButton'

export default function todoList(props) {

    const renderRows = () => {
        const list = props.list
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton type='success' hide={todo.done} icon='check' 
                        onClick={() => props.handleMarkAsDone(todo)}/>
                    <IconButton type='warning' hide={!todo.done} icon='undo' 
                        onClick={() => props.handleMarkAsPending(todo)}/>
                    <IconButton type='danger' hide={!todo.done} icon='trash-o'
                        onClick={() => props.handleRemove(todo)}/>
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

