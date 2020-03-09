import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render () {
    return (
      <div>
        Select a Language:
        <i className="flag us" onClick={ () => this.context.onLangChange('us') } />
        <i className="flag nl" onClick={ () => this.context.onLangChange('nl') } />
      </div>
    );
  }
}

export default LanguageSelector;