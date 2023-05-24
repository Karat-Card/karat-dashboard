

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../pages/Dashboard.jsx";
import Account from "../pages/Account.jsx";


function RO() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/account" element={<Account/>} />
        
      </Routes>
  </Router>
  );
}

export default RO;
