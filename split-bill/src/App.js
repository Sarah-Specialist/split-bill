import API from './api/api';
import Header from './parts/header/header';
//import Friends from './components/friends/friends';
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
      <div className="friends">
        Friends
      </div>
      <div className="receipt">
        <Receipt receipt={receipt} />
      </div>
    </div>
  );
}

export default App;
