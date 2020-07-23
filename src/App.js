import React, { Component } from 'react';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Seth McNeace">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header> 
          <Content className="content-color">
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
