import React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'

const LanguageContext = React.createContext()

export default class LanguageProvider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      language: props.value
    }
  }

  componentDidUpdate (prevProps) {
    const prevTheme = prevProps.value.themeColor
    const { themeColor } = this.props.value
    if (prevTheme.key !== themeColor.key) {
      const updateTheme = { ...this.props.value, themeColor }
      this.setState({
        language: updateTheme
      })
    }
  }

  render () {
    return (
      <LanguageContext.Provider
        value={{
          value: this.state.language
          // updateTheme: this.updateTheme,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

LanguageProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.node.isRequired
}

LanguageProvider.defaultProps = {
  value: {}
}

export const LanguageConsumer = LanguageContext.Consumer
export const Context = LanguageContext
