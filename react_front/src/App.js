// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import List from './Components/List';
import New from './Components/New';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="App">
        <Header />
          <Switch>
            <Route exact path='/' component={ List }/>
            <Route exact path='/new' component={ New } />
          </Switch>
      </div>
    </Router>
  );
}
const Header = () => (
  <nav>
    <div>
      <Link to="/">SampleTodo</Link>
      <Link to="/new">新規投稿</Link>
    </div>
  </nav>
)

export default App;