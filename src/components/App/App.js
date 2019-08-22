import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import About from '../about';
import Contact from '../contact';
import MyComponent from '../home';
import { Head } from '../head';

function App() {
  return (
    <Router>
      <div>

        <AuthButton />

        <Route exact path="/" component={MyComponent} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/contact" component={Contact} />
      </div>
    </Router>
  );
}


const fakeAuth = {
  isAuthenticated: localStorage.getItem("auth") ? !0 : !1,
  authenticate(cb) {
    this.isAuthenticated = !0;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = !1;
    setTimeout(cb, 100);
  }
};
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            localStorage.clear('auth')

            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>

      )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
class Login extends React.Component {
  state = { redirectToReferrer: !1 };

  login = () => {
    localStorage.setItem('auth', !0)
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: !0 });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <Head />
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>

      </div>

    );
  }
}

export default App;
