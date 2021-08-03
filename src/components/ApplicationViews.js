
 import React from "react";
 import { Route } from "react-router-dom";
 import { FindWord } from "./FindWord/FindWord";
 import { FindWordList } from "./FindWord/FindWordList";
 import { FindWordProvider } from "./FindWord/FindWordProvider";
 import { LibraryList } from "./Library/LibraryList";
 import { UserProvider } from "./user/UserProvider"; 
 import logo from "./auth/Qlogo.png";



export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <div className="header">
          <img src={logo} alt="Starts With Q logo" />
        </div>
      </Route>
      
      <FindWordProvider>
        <UserProvider>

          <Route exact path="/">
            <FindWord />
          </Route>

          <Route path="/words/list">
            <FindWordList />
          </Route>

          <Route path="/library/:letter">
            <LibraryList />
          </Route> 

        </UserProvider>
      </FindWordProvider>
    </>
  );
};


