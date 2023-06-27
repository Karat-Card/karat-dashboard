

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Account from "../pages/Account.jsx";
import Account_doc from "../pages/Account_documents.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Disclosures from "../pages/Disclosures.jsx";
import Login from "../pages/Login.jsx";
import Referral from "../pages/Referral.jsx";
import Stock_Reward from "../pages/Stock-rewards.jsx";
import Transaction from "../pages/Transaction.jsx";
import Sidebar from "../shared/Sidebar.jsx";


function RO() {
  return (
    <Router>
        <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/referral" element={<><Sidebar/><Referral /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<><Sidebar/><Dashboard/> </>} />
            <Route path="/account" element={<><Sidebar/><Account/></>} />
            <Route path="/transaction" element={<><Sidebar/><Transaction/></>} />
            <Route path="/stock-rewards" element={<><Sidebar/><Stock_Reward/></>} />
            <Route path="/disclosures" element={<><Sidebar/><Disclosures/></>} />
            <Route path="/account-documents" element={<><Sidebar/><Account_doc/></>} />
        </Routes>
      </>
  </Router>
  );
}

export default RO;
