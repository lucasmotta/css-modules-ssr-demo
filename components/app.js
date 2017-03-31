const React = require('react')
const { Component } = React

const style = require('./app.css')
const Text = require('./text')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClient: false
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    const { isClient } = this.state
    return (
      <div className={style.app}>
        <h1 className={isClient ? style.titleBlue : style.title}>
          {isClient ? 'Client Side Stuff' : 'Server Side Stuff'}
        </h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Tenetur soluta deleniti, inventore labore dicta neque repellendus deserunt illum quae
          perferendis impedit fuga qui consequatur minus adipisci, dolores, modi! Dolor sit amet,
          consectetur adipisicing elit. Consequuntur consectetur labore eligendi repellat temporibus
          esse expedita itaque voluptatem doloremque dolorem, excepturi eius at similique vitae
          cumque illo modi quasi? Amet.
        </Text>
      </div>
    )
  }
}

module.exports = App
