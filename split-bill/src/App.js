import API from './api/api';
import Header from './parts/header/header';
import AddFriend from './components/friend/addFriend';
import Receipt from './components/receipt/receipt';
import SplitButton from './components/splitbutton/splitbutton';
import Select from './components/select/select';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  const [receipt, setReceipt] = useState([]);

  const GetReceipt = async () => {
    const {status, data} = await API.get('/receipt');
    console.log("Status", status);
    console.log("Data", data);
    if (status === 200) {
      setReceipt(data);
    }
  }

  useEffect(() => {
    GetReceipt();
  }, []);
  
  return (
    <div className="App">
      <Header />
      <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Receipt receipt={receipt} />
            <AddFriend />
            <Link to='/select'><SplitButton /></Link>
          </Route>
          <Route path='/select'>
            <Select />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
