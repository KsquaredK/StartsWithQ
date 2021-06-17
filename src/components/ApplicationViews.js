/* 
 import React from "react";
 import { Route } from "react-router-dom";
 import { FindWordProvider } from "./findWord/FindWordProvider";
 import { FindWordList } from "./findWord/FindWordList";
 import { FindWordForm } from "./findWord/FindWordForm";
 import { FindWordDetail } from "./findWord/FindWordDetail";
 import { QProvider } from "./qWord/QWordProvider";
 import { QList } from "./qWord/QWordList";
 import { XProvider } from "./xWord/XWordProvider";
 import { XList } from "./xWord/XWordList";
 import { ZProvider } from "./ZWord/ZWordProvider";
 import { ZList } from "./zWord/ZWordList";
 import { ZDetail } from "./zWord/ZWordDetail";
 import logo from "./auth/Qlogo.png";

 /* +++++++ PSEUDO-CODE ++++++++  
 create these routes: "Starts With Q" view (FindWord.js) ui main page,
 FindWordForm (StartsWithQ search form),
 FindWordList (Starts WithQ search results and save feature)
 QWordList (Q word library)
 QWordDetail (delete Q words)
*/


/*
export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/">
        <h1>Starts With Q</h1>
        <em>your wordgame superpower</em>
        <div className="logo">
          <img src={logo} />
        </div>
      </Route>
      <FindWordProvider>
        <QWordProvider>
          <XWordProvider>
            <ZWordProvider>
              <Route exact path="/">
                <FindWord />
              </Route>
              <Route path="/words/search">
                <FindWordForm />
              </Route>
              <Route path="/words/list">
                <FindWordList />
              </Route>
              <Route path="/qWords">
                <QWordList />
              </Route>
              <Route path="/qWords/detail/:qWordId(\d+)">
                <QWordDetail />
              </Route>
              <Route path="/xWords">
                <XWordList />
              </Route>
              <Route path="/xWords/detail/:xWordId(\d+)">
                <XWordDetail />
              </Route>
              <Route path="/zWords">
                <ZWordList />
              </Route>
              <Route path="/zWords/detail/:zWordId(\d+)">
                <ZWordDetail />
              </Route>
            </XWordProvider>
          </ZWordProvider>
        </QWordProvider>
      </FindWordProvider>
    </>
  );
};

 <Route path="/zWords/edit/:zWordId(\d+)">
                <ZWordForm />
                </Route>
                */
