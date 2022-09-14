import React from 'react';
import { LanguageConsumer } from './LanguageProvider';

const withLanguage = (WrappedComponent) => {
  class LanguageComponent extends React.Component {
    render() {
      const {  children , ...rest} = this.props;

      return (
        <LanguageConsumer>
          {context => {

            const { value } = context;
            // alert(value.theme)
            const props = {
              value,
              children,
              ...rest
            };
            return <WrappedComponent {...props} />;
          }}
        </LanguageConsumer>
      );
    }
  }
  return LanguageComponent;
};

export default withLanguage;
