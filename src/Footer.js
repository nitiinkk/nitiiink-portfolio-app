import React from "react";
import "./styles/Footer.css";

const Footer = () => {
    return (<>
        <footer id="footer">
         <ul>
            <li><a href="https://www.linkedin.com/in/nitiinkk/" target="_blank">  
               <i class="fa-brands fa-linkedin" aria-hidden="true"></i> <span class="sr-only">LinkedIn</span></a>
            </li>
            <li><a href="https://github.com/nitiinkk"><i class="fa-brands fa-github" aria-hidden="true"></i><span class="sr-only">Github</span></a></li>
         </ul>
         <p><small>&copy; 2023 Nitin Kumar. All rights reserved</small></p>
      </footer>
    </>)
}

export default Footer;