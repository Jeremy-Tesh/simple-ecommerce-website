import React from "react";

import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header.component";
import { useAuth, AuthProvider } from "./contexts/AuthContext";

const App = () => {
  // const { currentUser } = useAuth();
  console.log(useAuth());
  return (
    <div>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AuthProvider>
    </div>
  );
};

export default App;
