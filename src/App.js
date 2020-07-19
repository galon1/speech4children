import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Home from './_components/Home.js';
import Header from './_components/Header.js';
import Facility from './_components/Facility.js';
import Services from './_components/Services.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './_components/AboutPage.js';
import Testimonial from './_components/Testimonial.js';
function App() {
  return (
    <>
       <BrowserRouter>
        <div>
          <Header />
          <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={Services} />
            <Route path="/facility" component={Facility} />
            <Route path="/testimonial" component={Testimonial} />
          </Switch>
          </div>
          </div>
      </BrowserRouter>
      </>
      )
}

export default App;
