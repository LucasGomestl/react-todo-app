import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:80/api/todo'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? '&description__regex='+description : ''
        axios.get(URL+'?sort=-createdAt'+search)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    render(){
        const handleAdd = () => {
            const description = this.state.description
            axios.post(URL, { description })
                .then(resp => this.refresh())
            
        }

        const handleSearch = () => {
            this.refresh(this.state.description)
        }

        const handleChange = e => {
            this.setState({...this.state, description: e.target.value})
        }

        const handleMarkAsDone = todo => {
            axios.put(URL+'/'+todo._id, {...todo, done: true})
                .then(resp => this.refresh(this.state.description))
        }

        const handleMarkAsPending = todo =>{
            axios.put(URL+'/'+todo._id, {...todo, done: false})
                .then(resp => this.refresh(this.state.description))
        }

        const handleRemove = todo =>{
            axios.delete(URL+'/'+todo._id )
                .then(resp => this.refresh(this.state.description))
        }

        const handleClear = () =>{
            this.refresh()
        }


        return (
            <div>
                <PageHeader name="Tasks" small="register" />
                <TodoForm  
                    handleAdd={handleAdd}
                    handleSearch={handleSearch}
                    handleChange={handleChange}
                    handleClear={handleClear}
                    description={this.state.description}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={handleRemove} 
                    handleMarkAsDone={handleMarkAsDone}
                    handleMarkAsPending={handleMarkAsPending}/>
            </div>
        )
    }
}
