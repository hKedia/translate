import React from 'react';

const Context = React.createContext('us');

export class LanguageStore extends React.Component {
  state = {
    lang: 'us'
  };

  onLangChange = lang => {
    this.setState({ lang });
  };

  render () {
    return (
      <Context.Provider value={ { ...this.state, onLangChange: this.onLangChange } }>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default Context;