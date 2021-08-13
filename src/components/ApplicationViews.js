
 import React from "react";
 import { Route } from "react-router-dom";
 import { FindWord } from "./FindWord/FindWord";
 import { FindWordList } from "./FindWord/FindWordList";
 import { FindWordProvider } from "./FindWord/FindWordProvider";
 import { LibraryList } from "./Library/LibraryList";
 import { UserProvider } from "./user/UserProvider"; 



export const ApplicationViews = () => {
  return (
    <>
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


