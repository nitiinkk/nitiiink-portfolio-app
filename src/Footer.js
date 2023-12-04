import React from "react";
import "./styles/Footer.css";
import { redirectDocument, NavLink, Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="footer">
         <hr></hr>
         <div className="footer-element">
            <div className="footer-element-div1">
               <ul>
                  <li>
                     <NavLink to="https://github.com/nitiinkk">github</NavLink>
                  </li>
                  <li>
                     <NavLink to="mailto:nitinkumar21038@gmail.com">email</NavLink>
                  </li>
               </ul>
            </div>
            <div className="footer-element-div2">
               <ul>
                  <li>
                     <NavLink to="https://twitter.com/nitiinkk">twitter</NavLink>
                  </li>
                  <li>
                  <NavLink to="https://drive.google.com/file/d/1za-4oRyyTiqkmK90yntlbKCc36Ss5Eoo/view?usp=drive_link">read.cv</NavLink>
                  </li>
               </ul>
            </div>
            <div className="footer-element-div3">
               <ul>
                  <li>
                     <NavLink to="https://www.linkedin.com/in/nitiinkk/">linkedIn</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

const promptForPassCode = () => {
   var passcode = prompt("enter passcode ?");
   if (passcode == "123") {
     return true;
   }
   return false;
}

const subComponent = () => {
   return (<div>Hello World</div>);
 }

// const ProtectedComponent = () => {
//    if (authFails)
//      return <Redirect to='/login'  />
//    }
//    return <div> My Protected Component </div>
//  }

export default Footer;