import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search, add, clear } from './todoActions'

export default function TodoForm() {
    const description = useSelector(state => state.todo.description)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(search())
    }, [dispatch])

    
    // const keyHandler = e => {
    //     if (e.key === 'Enter') {
    //         e.shiftKey ? dispatch(search()) : dispatch(add(description))
    //     } else if (e.key === 'Escape') {
    //         dispatch(clear())
    //     }
    // }

    return (
        <div className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' 
                    className='form-control'
                    placeholder='Add a task'
                    onChange={() => dispatch(changeDescription(window.event))}
                    //onKeyUp={keyHandler}
                    value={description}
                    ></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton type='primary' icon='plus' onClick={ () => dispatch(add(description))} />
                <IconButton type='info' icon='search' onClick={() => dispatch(search())}/>
                <IconButton type='default' icon='close' onClick={() => dispatch(clear())} />
            </Grid>
        </div>
        
    )

}