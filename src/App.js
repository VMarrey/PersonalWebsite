import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Home from "./components/Home/Home"
import BasicExample from "./components/Nav/NavbarComp"
import Articles from "./components/Articles/Articles.js"
import ArticleOne from "./components/Articles/PlaceHolderArticle/Article1.js"
import ProjectsPage from "./components/Projects/Project.js"

import { HashRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  
   
  return (
    <div className="App1">
      <BasicExample className = "nav"/> 
      <Router>
        <Routes>  
         <Route path = "/" element = {<Home className = "home"/>} />
         <Route path = "/Articles" element = {<Articles className = "articlespage"/>} /> 
        <Route path = "/Article1" element = { <ArticleOne className = "a1hp"/>} /> 
        <Route path = "/Projects" element = {<ProjectsPage />} /> 
        </Routes> 
       
      </Router> 
    </div>
  );
}

export default App;
