import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
    < Switch >
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
    </Switch >
)

export default Main;