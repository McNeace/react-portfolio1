import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Cell col={12}>
                        <div style={{ textAlign: 'center' }}>
                            <img className='avatar-img' src='https://pickaface.net/gallery/avatar/unr_seth_200718_0823_8h2w5q.png' />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Seth McNeace</h2>

                        <div class="resume-link">
                        <a href="https://docs.google.com/document/d/1eumCwWKSza9kT81AObb9E_2pJeHV4iEDn51QGPkaT08/edit?usp=sharing">Click Here To Go My Resume!</a>
                        </div>

                        <p>Full Stack Developer from RVA. Learned to code at the University of Richmond.</p>

                        <h5>Phone</h5>
                        <p>(804)-922-3260</p>
                        <h5>E-mail</h5>
                        <p>mcneaceseth15@gmail.com</p>


                    </Cell>
                    


                </Grid>

            </div>
        )
    }
}

export default Resume;