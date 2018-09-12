import path from 'path'
import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'

import Html from './Html'

const app = express()

app.set('port', (process.env.PORT_WEBSERVER || 3000))

if (process.env.NODE_ENV === 'production') {
    app.use('/public', express.static(path.join(__dirname, '../')))
} else {
    const webpack = require('webpack') // eslint-disable-line
    const webpackDevMiddleware = require('webpack-dev-middleware') // eslint-disable-line
    const webpackConfig = require('./webpack.config') // eslint-disable-line
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/public/'
    }))
}

app.get('/', (req, res) => {
    const document = renderToString(<Html />) // eslint-disable-line
    res.status(200).send(`<!DOCTYPE html>${document}`)
})

app.listen(app.get('port'), () => {
    console.log(`Server started: http://localhost:${app.get('port')}/`)
})
