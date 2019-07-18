import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { NONAME } from 'dns';

function App() {
  return (
   <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color"title={<Link to="/" className="title"><span><strong>MY PORTFOLIO</strong></span></Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link> 
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="resume">Resume</Link>
                <Link to="aboutme">About Me</Link>
                <Link to="projects">Projects</Link>
                <Link to="contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
