import API from './api/api';
import Header from './parts/header/header';
import AddFriend from './components/friend/addFriend';
import Receipt from './components/receipt/receipt';
import React, {useEffect, useState} from 'react';
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
      <div className="receipt">
        <Receipt receipt={receipt} />
      </div>
      <div className="friends">
        <AddFriend />
      </div>
      <button type="submit" className="submit">Split my bill!</button>
      </div>
    </div>
  );
}

export default App;
