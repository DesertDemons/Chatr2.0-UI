import React, {Component} from 'react';
import Typist from 'react-typist';

export default class Welcome extends Component {
  constructor(props){
  	super(props);
  }
  
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    const docs = '//github.com/DesertDemons/Chatr2.0-UI';
    return (
      <div className="container message-list TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={20}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          <a className="" target="_blank" href={docs}>Welcome to Chatr version 2.1</a>
        </Typist>
        <div className="ml-5 TypistExample-content">
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              <Typist.Delay ms={1250} />
              
              Built by CODED 
              <Typist.Delay ms={750} />
              <br />abused by Hamza<Typist.Delay ms={500} />
              <Typist.Backspace count={15} delay={1000} />
              
              <Typist.Delay ms={1250} />
              Features :- <br />
              <Typist.Delay ms={750} />
              - You can create username or <a href={docs} className="flash" data-toggle="modal"
          data-target="#loginModal">login</a>
              <Typist.Delay ms={1250} />
              <br />
              - Create a Channel
              <Typist.Delay ms={1250} />
              <br />
              - Choose a channel to chat!<Typist.Delay ms={500} />
              <Typist.Delay ms={1000} />
              <Typist.Delay ms={750} />
              
              <Typist.Delay ms={1250} />
              <br />
              <span>Start by clicking on  <a href={docs} className="flash" data-toggle="modal"
          data-target="#signupModal">Register!</a></span>
              
  
        
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    );
  }

}