'use client'; 

import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './components/nav.css';


import { SessionProvider } from "next-auth/react";

import "./globals.css";


export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
        <body>
        
          
          
          
          
        <SessionProvider> 
          
        <NavBar/>
         
         
           {children}   
           

           
           </SessionProvider>




        </body>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>
      </html>
   
  );
}
