import React, { Component, Fragment } from 'react';

class QuoteBox extends Component {

  constructor() {
    super();
    this.quoteURL= 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
    this.state = {
      quote: {
        content: '',
        title: ''
      },
      name: '',
      isQuote: false
    }
  }

  setName = pass => {
    
    if(pass === '') {
      pass = 'Guest';
      return pass;
    }
    return pass;
  }

  changeName = event => {
    /*
    Because we named the inputs to match their
    corresponding values in state, it's
    super easy to update the state
    */

    this.setState({ name: event.target.value });
  }

  getQuote = e => {
    fetch(this.quoteURL)
    .then(res => res.json())
    .then(data => {
      if(data[0].content && data[0].title) {
        let { quote } = this.state;
        let quoteData = data[0];
        quote.content = quoteData.content;
        quote.title = quoteData.title;
        this.setState({ quote }, () => {
          if(this.state.isQuote === false) {
            this.setState({ isQuote: true })
          }
        })
      } else {
        return console.error(
          '404 Can not retrieve quote'
        )
      }
    })
  }

  displayQuote = () => {
    const { content, title } = this.state.quote;
    return (
      <div>
        <p> {content} </p>
        <h3> {title} </h3>
      </div>
    )
  }

  render() {
    const  { isQuote, name, quote } = this.state;
    let qStr = JSON.stringify(quote.content);
    let titleStr = JSON.stringify(quote.title);
    let trimStr = qStr.substr(16).slice(0, -26);
    let cutStr = titleStr.substr(13).slice(0, -2);
    
    return (
      <Fragment>
      <form>
        <label class="name-lbl">Enter your name:</label><br/>
        <input type="text" name="name" class="name-input" onChange={this.changeName.bind(this)} />
      </form><br/><br/>
      <button type="button" onClick={this.getQuote}> GET QUOTE? </button>
      <h2 id="quote"> Hi {this.setName(name)}, This is your API quote: </h2>
      <br/>
      { isQuote === true ? (`${trimStr} \n - ${cutStr}`) : 'no quote yet...'}
    </Fragment>
    )
  }
}

export default QuoteBox;
