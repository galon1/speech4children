import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Home from './_components/Home.js';
import Facility from './_components/Facility.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './_components/About.js';
import Testimonial from './_components/Testimonial.js';
import Contact from './_components/Contact.js';

function App() {
  return (
    <>
       <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/facility" component={Facility} />
            <Route path="/testimonial" component={Testimonial} />
            <Route path="/contact" component={Contact} />

          </Switch>
          </div>
      </BrowserRouter>
      </>
      )
}

export default App;
