import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
	constructor(props){
		super(props);
		this.state = { activeTab: 0};
	}
	toggleCategories(){

		if(this.state.activeTab === 0){
		return(

<div className="projects-grid">
	{/*Project 1*/}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#111', height: '176px', background: 'URL(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}>React Project</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: ' #111'}}>
					<IconButton name="share"/>
				</CardMenu>
			</Card>

			{/*Project 2*/}
			<Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
				<CardTitle style={{color: '#111', height: '176px', background: 'URL(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}>React Project</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: ' #111'}}>
					<IconButton name="share"/>
				</CardMenu>
			</Card>

		{/*Project 3*/}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#111', height: '176px', background: 'URL(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}>React Project</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: ' #111'}}>
					<IconButton name="share"/>
				</CardMenu>
			</Card>
	</div>

			)
		}
		else if(this.state.activeTab === 1){
		return(
				<div>
				<h1>This is Angular Project</h1>
				</div>
			)
		}
		else if(this.state.activeTab === 2){
		return(
				<div>
				<h1>This is VueJs Project</h1>
				</div>
			)
		}
		else if(this.state.activeTab === 3){
		return(
				<div>
				<h1>This is MongoDB Project</h1>
				</div>
			)
		}

	}
	
  render(){
  	return(
  			<div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
               		<Tab>React</Tab>
               		<Tab>Angular</Tab>
               		<Tab>VueJs</Tab>
               		<Tab>MongoDB</Tab>
               </Tabs> 

               
               <Grid >
               		<Cell col={12}>
               			<div className="content">
               				{this.toggleCategories()}
               			</div>
               		</Cell>
               </Grid>
               		
            </div>    
  		);
  }
}
export default Projects;