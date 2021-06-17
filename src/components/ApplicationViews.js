/* 
 import React from "react";
 import { Route } from "react-router-dom";
 import { FindWordProvider } from "./findWord/FindWordProvider";
 import { FindWordList } from "./findWord/FindWordList";
 import { FindWordForm } from "./findWord/FindWordForm";
 import { FindWordDetail } from "./findWord/FindWordDetail";
 import { QWordProvider } from "./qWord/QWordProvider";
 import { QWordList } from "./qWord/QWordList";
 import { QWordForm } from "./qWord/QWordForm";
 import { XWordProvider } from "./xWord/XWordProvider";
 import { XWordList } from "./xWord/XWordList";
 import { XWordForm } from "./xWord/QWordForm";
 import { ZWordProvider } from "./ZWord/ZWordProvider";
 import { ZWordList } from "./zWord/ZWordList";
 import { ZWordForm } from "./zWord/ZWordForm";
 ?? import { ZWordDetail } from "./zWord/ZWordDetail";
 import logo from "./auth/Qlogo.png";

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
              <Route path="/locations/create">
                <FindWordForm />
              </Route>
              <Route path="/qWords">
                <QWordList />
              </Route>
              <Route path="/qWords/save">
                <QWordForm />
              </Route>
              <Route path="/qWords/detail/:qWordId(\d+)">
                <QWordDetail />
              </Route>
              <Route path="/qWords/edit/:qWordId(\d+)">
                <QwordForm />
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
              <Route path="/zWords/save">
                <ZWordForm />
              </Route>
              <Route path="/zWords/edit/:zWordId(\d+)">
                <ZWordForm />
              </Route>
            </XWordProvider>
          </ZWordProvider>
        </QWordProvider>
      </FindWordProvider>
    </>
  );
}; */
