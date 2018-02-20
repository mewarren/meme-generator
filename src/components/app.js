import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      headline: 'This is the headline text',
      subhead: 'This is the subhead text'
    }

    this.changeHeadline = this.changeHeadline.bind(this);
    this.changeSubhead = this.changeSubhead.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  changeHeadline({ target }){
    this.setState({
      headline: target.value
    });
  }

  changeSubhead({ target }){
    this.setState({
      subhead: target.value
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
      this.setState({ background: reader.result });
    };
  }

  render() {
    const { background, headline, subhead } = this.state;

    return (
      <div>
        <h1>Meme Generator</h1>

        <p>
          <label>
            Headline Text:
            <input type="text" onChange={this.changeHeadline}/>
          </label>

          <label>
            Subhead Text:
            <input type="text" onChange={this.changeSubhead}/>
          </label>

          <label>
            Background Image:
            <input type="file" onChange={this.handleUpload}/>  
          </label>
        </p>

        <section style={{

          backgroundImage: background ? `url(${background}` : null
        }}>
          <p>{headline}</p>
          <p>{subhead}</p>
        </section>
      </div>

    );
  }
}
