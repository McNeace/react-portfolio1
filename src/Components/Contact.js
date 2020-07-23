import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">

                    <Cell col={6}>
                        <h2>Contact Me</h2>


                        <div className="contact-list">

                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                      (804)-922-3260
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    mcneaceseth15@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                     McNeace
                                    </ListItemContent>
                                </ListItem>
                            </List>

                        </div>

                    </Cell>
                </Grid>
            </ div>
        )
    }
}

export default Contact;