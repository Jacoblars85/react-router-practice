import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Nav from './Nav.jsx';

function App() {
    return (
        <div className="App">
            <Router>
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>

            <Nav />
            
            <br/>

            <Route exact path="/home">
                <StudentForm />
            </Route>


            <p>Student list:</p>

            <Route exact path="/allStudents">
                <StudentList />
            </Route>

            </Router>
        </div>
    );
}

export default App;
