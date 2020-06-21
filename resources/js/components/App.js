import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import Header from './header/index.js';
import Nav from './nav/index.js';
import Options from './options/index.js';
import Content from './content/index.js';
import Footer from './footer/index.js';

class App extends Component {
    componentDidMount() {
        Pusher.logToConsole = true;
    }
    render() {
    return (
        <Router>
            <div className="container2">
                <Header />
                <Nav />
                {/* <About /> */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/options">
                        <Users />
                    </Route>
                    
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
                {/* <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/options">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch> */}
                <Content />
                    <Footer />
            </div>
        </Router>
    )
    }

}
function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
// export default function App() {
//     return (
//       <Router>
//         <div>
//           {/* <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav> */}
//           <Nav />

//           {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
export default App;
function Home() {
    return <h2>Home</h2>;
}




if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
