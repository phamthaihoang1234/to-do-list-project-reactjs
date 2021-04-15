import './App.css';
import {Component} from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Task Manager</h1><hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*Form*/}
                        <TaskForm/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div>
                            <button type="button" className="btn btn-primary">
                                <span className="fa fa-plus mr-5"></span>Add Task
                            </button>
                        </div>
                        <br/>
                        {/*Search and sort*/}
                            <TaskControl/>
                            <br/>
                        {/*list*/}
                        <TaskList/>
                    </div>
                </div>
            </div>
        );
    }


}

export default App;
