import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const todoForm = props =>{
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return(
        <div className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' 
                    className='form-control'
                    placeholder='Add a task'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}
                    ></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton type='primary' icon='plus' onClick={props.handleAdd}/>
                <IconButton type='info' icon='search' onClick={props.handleSearch}/>
                <IconButton type='default' icon='close' onClick={props.handleClear}/>
            </Grid>
        </div>
    )
}

export default todoForm