import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateShoe from './components/create-shoe';
import EditShoe from './components/edit-shoe';
import Landing from './components/landing';
import ShoesList from './components/shoes-list';
import Shoe from './components/shoe';

class App extends Component {
    render(){
        return (
          <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li className="name"><Link to="/">HOME</Link></li>
                        <li><Link to="/list"> SHOE LIST</Link></li>
                        <li><Link to="/create"> ADD SHOE</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/list" exact component={ShoesList} />
                    <Route path="/edit/:id" component={EditShoe} />
                    <Route path="/create" component={CreateShoe} />
                    <Route path="/:id" exact component={Shoe} />
                </Switch>
            </div>
        </Router>
      );
    }
}

export default App;
