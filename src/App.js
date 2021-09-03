import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header.component";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import SignUp from "./pages/signup/Signup";

const App = () => {
  const { currentUser } = useAuth();
  if (currentUser)
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  else
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
};

export default App;
