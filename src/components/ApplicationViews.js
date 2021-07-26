
 import React from "react";
 import { Route } from "react-router-dom";
 import { FindWordProvider } from "./FindWord/FindWordProvider";
 import { FindWordList } from "./FindWord/FindWordList";
 import { FindWord } from "./FindWord/FindWord";
 import { FindWordSearch } from "./FindWord/FindWordSearch";
//  import { LibraryProvider } from "./Library/LibraryProvider";
 import { UserProvider } from "./user/UserProvider"; 
 import logo from "./auth/Qlogo.png";

 /* +++++++ PSEUDO-CODE ++++++++  
 create these routes: "Starts With Q" view (FindWord.js) ui main page,
 FindWordForm (StartsWithQ search form),
 FindWordList (Starts WithQ search results and save feature)
 {chosenLetter}Library (user's word library by letter)
*/



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
          {/* <LibraryProvider> */}
              <Route exact path="/">
                <FindWord />
              </Route>
              <Route path="/words/search">
                <FindWordSearch />
              </Route>
              <Route path="/words/list">
                <FindWordList />
              </Route>
              {/* <Route path="/${chosenLetter}library">
                <Library />
              </Route> */}
          {/* </LibraryProvider> */}
        </UserProvider>
      </FindWordProvider>
    </>
  );
};

//  <Route path="/zWords/edit/:zWordId(\d+)">
//                 <ZWordForm />
//                 </Route>
//                 */
