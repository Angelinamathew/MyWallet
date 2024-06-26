import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Category from './Category';
import Home from './Home';
import Expsenses from './Expenses'; // Corrected import
import  Account from './Account'


class App extends Component {
    render() { 
        return ( 
            <Router>
                <div>
                <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/categories' element={<Category />} />
                     <Route path='/expenses' element={<Expsenses />} />
                     <Route path='/account' element={<Account />} />
                </Routes>
                </div>
            </Router>
        );
    }
}
 
export default App;
