// Hook for Babel and CSS-Modules
require('babel-register')
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})

const path = require('path')
const React = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')

const App = require('./components/app')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  const markup = renderToString(React.createElement(App))

  res.render('index', { markup })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
