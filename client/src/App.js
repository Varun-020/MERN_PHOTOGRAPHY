import {BrowserRouter as Router , Route ,Switch} from "react-router-dom";
import "./main.scss";
import {Provider} from 'react-redux';
import Store from './store';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import RouteLinks from "./private/RouteLinks";
import NotFound from "./components/NotFound";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookingBar from "./components/BookingBar";
import Booking from "./components/Booking";
import SetOffer from './components/SetOffer';
import AdminGallery from "./components/AdminGallery";

function App() {
  return (
    <Provider store={Store}>
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/contactUs' exact component={Contact} />
        <Route path='/booking' exact component={Booking} />
        <RouteLinks path='/login' exact component={Login} />
        {/* <RouteLinks path='/signup' exact component={Register} /> */}
        <PrivateRoute path='/dashboard' exact component={Dashboard} />
        <PrivateRoute path='/setoffer' exact component={SetOffer} />
        <PrivateRoute path='/admingallery' exact component={AdminGallery} />
   
        <Route component={NotFound} />
      </Switch>
      <BookingBar />
    </Router>
    </Provider>
  );
}

export default App;
