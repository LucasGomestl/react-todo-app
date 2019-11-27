import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'


function TodoList(props) {
    const { markAsDone, markAsPending, remove } = props

    const renderRows = () => {
        const list = props.list
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton type='success' hide={todo.done} icon='check' 
                        onClick={() => markAsDone(todo)}/>
                    <IconButton type='warning' hide={!todo.done} icon='undo' 
                        onClick={() => markAsPending(todo)}/>
                    <IconButton type='danger' hide={!todo.done} icon='trash-o'
                        onClick={() => remove(todo)}/>
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

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { 
        markAsDone, 
        markAsPending, 
        remove 
    },dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)