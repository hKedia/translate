import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

  render () {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { ({ lang }) => lang === 'us' ? 'Submit' : 'Voorleggen' }
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;