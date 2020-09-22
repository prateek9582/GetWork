// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Image from './company.png'
import Home from './components/Home';


class Menu extends Component {
  state = { 
    List:["Home","Create Job","Invite Companies","Jobs","Open Jobs","Closed Jobs","Applicant status","Notices","Inbox","Outbox","Connections","Companies","Students","Reports"]
   }
  render() { 
      return ( 
          <React.Fragment>
              <MenuList list = {this.state.List}></MenuList>
          </React.Fragment>
       );
  }
}
function MenuList(props){
  let { list } = props;
  return(<div className="menu-list">
    <div className="comapany">
    <img className= "logo" src = {Image} alt="comapny"/>
    <div className="box"></div>
    </div>
    <ul className ="group">
      {
        list.map((name) => {
          return (<li className="item" onClick="">{name}</li>)
        })
      }   
    </ul>
    <div className="last">Contact GetWork</div>
    
  </div>) 
}
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.Fragment>
      <div className="app">
      <Menu></Menu>
      <Home></Home>
      </div>
  </React.Fragment>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
