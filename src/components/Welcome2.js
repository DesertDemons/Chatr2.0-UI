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
      <div className="container ml-5 mt-5 message-list TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={20}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          <a className="" target="_blank" href={docs}>Welcome</a> {this.props.authStore.currentUser? this.props.authStore.currentUser: ""} <a className="" target="_blank" href={docs}>to Chatr version 2.1</a>
        </Typist>
        <div className="ml-5 TypistExample-content">
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              <Typist.Delay ms={1250} />
              
              Now that you are loggedin {this.props.authStore.currentUser}
              <Typist.Delay ms={750} />
              <br />You can go crazy!<Typist.Delay ms={500} /> or try to choose a channel
              <Typist.Backspace count={17} delay={1000} />
              
              <br />
              <Typist.Delay ms={750} />
              - You can Create a Channel by clicking<a href={docs} className="flash" data-toggle="modal"
          data-target="/createChannel">here!</a>
              <Typist.Delay ms={1250} />
              <br />
              or
              <Typist.Delay ms={1250} />
              <br />
              - Choose a channel to chat!<Typist.Delay ms={500} />
              <Typist.Delay ms={1000} />
              <Typist.Delay ms={750} />
              
              <Typist.Delay ms={1250} />
              <br />
              
              
  
        
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    );
  }

}