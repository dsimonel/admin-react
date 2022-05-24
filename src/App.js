import React, { Suspense, useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { HashRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<div>Loading </div>}>
        <div className={darkMode ? "app dark" : "app"}>
          {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
          <HashRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={userInputs} title="Agregar Nuevo Usuario" />
                    }
                  />
                </Route>
                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New
                        inputs={productInputs}
                        title="Agregar Nuevo Producto"
                      />
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
