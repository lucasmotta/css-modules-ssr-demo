const React = require('react')
const style = require('./text.css')

const Text = ({ type = 'normal', children }) => (
  <p className={style.text}>{children}</p>
)

module.exports = Text
