import LeftSideNavBar from "./components/LeftsideNavBar";
import ConversationsLinks from "./components/ConversationsLinks";
import Messages from "./components/Messages";
//import {Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LeftSideNavBar />
        <Router >
          <ConversationsLinks />
          <Routes >
              <Route path="app/:groupId" element={<Messages />}/>
              <Route path="/" element={<Messages />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
