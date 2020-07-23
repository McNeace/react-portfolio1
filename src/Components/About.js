import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='aboutme-grid'>
                    <Cell col={12}>
                        <img className='avatar-img' src='https://pickaface.net/gallery/avatar/unr_seth_200718_0823_8h2w5q.png' />
                    </Cell>
                    <div className='banner-text'>
                        <h1>Web-Developer</h1>

                        <p>☯QuickLinks☯</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://www.linkedin.com/in/seth-mcneace-1232701a0/" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-linkedin-square' aria-hidden="true" />
                            </a>
                            {/* Github*/}
                            <a href="https://gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-envelope' aria-hidden="true" />
                            </a>
                            <a href="https://github.com/McNeace" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-github-square' aria-hidden="true" />
                            </a>
                            <a href="https://docs.google.com/document/d/1eumCwWKSza9kT81AObb9E_2pJeHV4iEDn51QGPkaT08/edit" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-file-text-o' aria-hidden="true" />
                            </a>
                            
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default About;