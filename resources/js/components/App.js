import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// BrowserRouter as Router,
import {  Switch, Route, Link} from "react-router-dom";
import Header from './header/index.js';
import Nav from './nav/index.js';
import MenuMiddle from './menuMiddle/index.js';
import About from './aboutUs/index.js';
import Content from './content/index.js';
import Footer from './footer/index.js';


import Options from './options/index.js';
import Contact from './contactUs/index.js';
import Complaint from './complaint/index.js';
import Order from './order/index.js';
// import EndAddOrder from './order/endAddOrder.js';
import HeadPages from './headPages/headPages.js';
import NavPages from './navPages/navPages.js';
import Shop from './shop/index.js';
import ScrollBack from './scrollBack/index.js';
import EndAddOrder from './order/endAddOrder.js';
import EndAddShop from './shop/endAddShop.js';
import SocialNetwork from './socialNetwork/index.js';
import EndRegisterSocialNetwork from './socialNetwork/endRegisterSocialNetwork.js';


// import TestForm from './testForm';



class App extends Component {
    

    
    render() {
        
        const gh=[<Header key='1' /> ,<Nav key='2'/>,
            <MenuMiddle key='3'/> ]
    return (
            
            <div className="container2">
                <ScrollBack />
                <Switch>
                    <Route exact path="/">
                       {gh}
                        <Home />
                        <Content />
                    </Route>
                    <Route path="/aboutUs">
                        <About />
                    </Route>
                    <Route path="/contactUs">
                        <Contact />
                    </Route>
                    <Route path="/complaint">
                        <Complaint />
                    </Route>
                    <Route path="/order" >
                        <Order  />
                    </Route>
                    <Route path="/endAddOrder"  >
                        <EndAddOrder /> 
                    </Route>
                    <Route path="/endAddShop"  >
                        <EndAddShop /> 
                    </Route>
                    <Route path="/shop" >
                        <Shop />
                    </Route>
                    <Route path="/socialNetwork" >
                        <SocialNetwork />
                    </Route>
                    <Route path="/endRegisterSocialNetwork" >
                        <EndRegisterSocialNetwork />
                    </Route>
                    {/* <Route path="/options">
                        <Users />
                    </Route>
                    
                    <Route path="*">
                        <NoMatch />
                    </Route> */}
                    <Route path="*" component={NotFound} />
                </Switch>
                {/* <TestForm/> */}
                {/* <EndAddOrder /> */}
                
                


                {/* <About /> */}
               
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
                
                    {/* <Footer /> */}
            </div>
        
    )
    }

}
// function About() {
//     return <h2>About</h2>;
// }

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

  function Status({ code, children }) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = code;
          return children;
        }}
      />
    );
  }
  const NotFound=()=> {
    return (
        <div>rttt</div>
    //   <Status code={404}>
    //     <div>
    //       <h1>Sorry, can’t find that.</h1>
    //     </div>
    //   </Status>
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
// export default App;
function Home() {
    return <h2>Home</h2>;
}



export default App;