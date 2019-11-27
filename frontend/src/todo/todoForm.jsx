import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component{

    componentWillMount(){
        this.props.search()
    }

    render(){
        const { add, search, description, clear } = this.props

        const keyHandler = e => {
            if (e.key === 'Enter') {
                e.shiftKey ? search() : add(description)
            } else if (e.key === 'Escape') {
                clear()
            }
        }
        return (
            <div className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' 
                        className='form-control'
                        placeholder='Add a task'
                        onChange={this.props.changeDescription}
                        onKeyUp={keyHandler}
                        value={description}
                        ></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton type='primary' icon='plus' onClick={() => add(description)}/>
                    <IconButton type='info' icon='search' onClick={search}/>
                    <IconButton type='default' icon='close' onClick={clear}/>
                </Grid>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    changeDescription,
    search,
    add,
    clear
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)