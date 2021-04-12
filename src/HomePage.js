import React from "react"; 
import "./App.css";



function HomePage() {
    return (
        <div className = "homepage">
            <ToDoList/>
        </div>
    )
}
//https://www.youtube.com/watch?v=e_ZibOe77yo
//https://www.pluralsight.com/guides/how-to-pass-props-object-from-child-component-to-parent-component
class ToDoList extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            newTask:"",
            list:[]
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    addTask() {
        //create task
        const newTask={
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        }
        //copy of current to do list items 
        const list = [...this.state.list];

        //add new task to list
        list.push(newTask);

        //update state with new list and reset newTask input
        this.setState({
            list,
            newTask:""
        }) 
    }

    deleteTask(id) {
        //copy over current list of items
        const list=[...this.state.list];
        const updatedList = list.filter(task => task.id !== id)
        this.setState({list: updatedList});
    }
    render() {
        return (
            <div className="todo">
                <div>
                    <h2>To-Do List</h2>
                    <br/>
                    <input
                    type="text"
                    placeholder="Add task here..."
                    value= {this.state.newTask}
                    onChange={e => this.updateInput("newTask",e.target.value)}
                    style={{ width: "400px" }}>
                    </input>
                    <button 
                      onClick={()=> this.addTask()}
                    >
                        Add 
                    </button>
                    <ul>
                        {this.state.list.map(task => {
                            return (
                                <li key={task.id}>
                                    {task.value}
                                    <button
                                        onClick={()=> this.deleteTask(task.id)}
                                        > Completed!
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePage;
