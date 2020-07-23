import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://miro.medium.com/max/1000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover" }}></CardTitle>
                        <CardText>
                            This is a portfolio was made by using react.
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://miro.medium.com/max/1000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover" }}> </CardTitle>
                        <CardText>
                            This is a description of my 2nd project for REACT
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://miro.medium.com/max/1000/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover" }}></CardTitle>
                        <CardText>
                            This is a description of my 3rd project for REACT
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover" }}> </CardTitle>
                        <CardText>
                            This is a description of my 1st project for MongoDB/MySQL
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover" }}> </CardTitle>
                        <CardText>
                            This is a description of my 2nd project for MongoDB/SQL
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover" }}> </CardTitle>
                        <CardText>
                            This is a description of my 3rd project for MongoDB/MySQL
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png) center / cover" }}> </CardTitle>
                        <CardText>
                            This is a description of my 1st project for JavaScript
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png) center / cover" }}></CardTitle>
                        <CardText>
                            This is a description of my 2nd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>

                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png) center / cover" }}></CardTitle>
                        <CardText>
                            This is a description of my 3rd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>

                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB/MySQL</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div >
        )
    }
}

export default Projects;