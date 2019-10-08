import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

class Resume extends Component {
  render(){
  	return(
  			<div>
  			<Grid>
				  <Cell col={4}>
					<div style={{textAlign: 'center'}}>
						<img
  						src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
						alt="avatar"
						style={{height: '200px'}}
						/>
					</div>
					<div>
					<h2 style={{paddingTop: '1em'}}>Bundi Kevin</h2>
					<h4 style={{color: 'grey'}}>Front End Developer</h4>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%', textAlign: 'left'}}/>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%', textAlign: 'left'}}/>
					<h5>Address</h5>
					<p>Kimathi Street</p>
					<h5>Phone</h5>
					<p>254724127132</p>
					<h5>Email</h5>
					<p>bundikevin@gmail.com</p>
					<h5>Web</h5>
					<p>mywebsite.com</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%', textAlign: 'left'}}/>
					</div>

				  </Cell>
				  <Cell className="resume-right-col" col={8}>
					  <h1>Education</h1>
					  <Education
					  startYear={2012}
					  endYear={2016}
					  schoolName="Karatina University"
					  schoolDescription="Higher Learning Institution"
					/>
					<Education
						startYear={2012}
						endYear={2012}
						schoolName="Elgonview College"
						schoolDescription="College"
					/>
					<Education
						startYear={2008}
						endYear={2012}
						schoolName="Nyambaria Boys High"
						schoolDescription="High School"
					/>
					<Education
						startYear={2000}
						endYear={2007}
						schoolName="Kebirigo Primary School"
						schoolDescription="Primary School"
					/>
				  </Cell>
			  </Grid>
  			</div>
  		);
  }
}
export default Resume;