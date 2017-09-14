/* eslint-disable global-require */
const express = require('express')
const path = require('path')
const request = require('request')
const compression = require('compression')
const pkg = require(path.resolve(process.cwd(), 'package.json'))
const
    sitemap = require('sitemap')
sm = sitemap.createSitemap({
    hostname: 'http://swoo.tv',
    cacheTime: 1000 * 60 * 24,  // keep the sitemap cached for 24 hours
}),
    addBroadcastsToSitemap = (posts) => {
        posts.forEach((post) => {
            sm.add({
                url: post.slug,
                changefreq: 'daily',
            })
        })
    },
    findBroadcastsToSitemap = (fn) => {
        const urls = [
            {type: 'static', slug: '/home'},
            {type: 'static', slug: '/search'},
            {type: 'static', slug: '/privacy-policy'},
            {type: 'static', slug: '/terms-of-service'},
            {type: 'static', slug: '/profile/?'},
            {video: 'static', slug: '/broadcast/?'},
        ]
/*
sitemap todo code
        const images = [
            {
                url: '/img1.jpg',
                caption: 'An image',
                title: 'The Title of Image One',
                geoLocation: 'London, United Kingdom',
                license: 'https://creativecommons.org/licenses/by/4.0/',
            },
        ]

        const video = [
          {thumbnail_loc: '/tmbn2.jpg', title: 'Another video title', description: 'This is another video'},
        ]
*/
        fn(false, urls)
    }

// Dev middleware
const addDevMiddlewares = (app, webpackConfig) => {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const compiler = webpack(webpackConfig)
    const middleware = webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        silent: true,
        stats: 'errors-only',
    })

    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
    const fs = middleware.fileSystem

    if (pkg.dllPlugin) {
        app.get(/\.dll\.js$/, (req, res) => {
            const filename = req.path.replace(/^\//, '')
            res.sendFile(path.join(process.cwd(), pkg.dllPlugin.path, filename))
        })
    }

    app.get('/apple-app-site-association', function(req, res) {
        res.send(JSON.stringify({
            'applinks': {
                'apps': [],
                'details': [{
                    'appID': '69X527K7GA.com.kryptolabs.ios.speakerswire',
                    'paths': ['*'],
                }],
            },
        }))
    })

    app.get('/sitemap.xml', function(req, res) {
        const url = `https://s3-ap-southeast-1.amazonaws.com/swoo-prod-sitemap/sitemap_index.xml`
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.header('Content-Type', 'application/xml')
                res.header('Access-Control-Allow-Origin', '*')
                res.send(body)
            }
        })
    })

    app.get('/rss.xml', function(req, res) {
        const url = `https://s3-ap-southeast-1.amazonaws.com/swoo-prod-sitemap/rss.xml`
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.header('Content-Type', 'application/xml')
                res.header('Access-Control-Allow-Origin', '*')
                res.send(body)
            }
        })
    })

    app.get('/google57bc37d67be62406.html', function(req, res) {
        res.header('Content-Type', 'application/xml')
        res.header('Access-Control-Allow-Origin', '*')
        res.send('google-site-verification: google57bc37d67be62406.html')
    })

    app.get('/.well-known/assetlinks.json', function(req, res) {
        res.send(JSON.stringify([{
            'relation': ['delegate_permission/common.handle_all_urls'],
            'target': {
                'namespace': 'android_app',
                'package_name': 'com.kryptolabs.android.speakerswire',
                'sha256_cert_fingerprints':
        ['7F:51:20:5C:0B:96:FA:D8:D4:DF:70:78:6D:1D:61:0C:30:DF:45:97:5F:A1:46:34:FD:D5:3D:3F:01:4E:5F:D1'],
            },
        }]))
    })

    app.get('/robots.txt', function(req, res) {
        res.send('User-agent: * \nDisallow: /')
    })

    app.get('/livevideo/:videoStream/playlist.m3u8', function(req, res) {
    // download the m3u8 file and replace the domain name to https
    // http://vid-129002.hls.chinanetcenter.broadcastapp.agoraio.cn/live/ => https://d3brajx9cd3f8r.cloudfront.net/
        const url = `https://d3brajx9cd3f8r.cloudfront.net/${ req.params.videoStream }/playlist.m3u8`
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.header('Content-Type', 'application/x-mpegURL')
                res.header('Access-Control-Allow-Origin', '*')
                res.send(body.replace('http://vid-129002.hls.chinanetcenter.broadcastapp.agoraio.cn/live/', 'https://d3brajx9cd3f8r.cloudfront.net/'))
            }
        })
    })

    app.get('/sitemap.xml', function(req, res, next) {
    // only update the sitemap if the cache is expired
        if (sm.isCacheValid()) {
            sm.toXML(function(error, xml) {
                res.header('Content-Type', 'application/xml')
                res.send(xml)
            })
        } else {
        // remove every page from the expired sitemap
            sm.urls = []

        // get every post from the database
            findBroadcastsToSitemap(function(err, posts) {
            // if some error occurs, generate an empty sitemap instead of aborting
                if (err) {
                    console.log(err)
                }	else {
                    addBroadcastsToSitemap(posts)
                }

                sm.toXML(function(error, xml) {
                    res.header('Content-Type', 'application/xml')
                    res.send(xml)
                })
            })
        }
    })

    app.get('*', (req, res) => {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(file.toString())
            }
        })
    })
}

// Production middlewares
const addProdMiddlewares = (app, options) => {
    const publicPath = options.publicPath || '/static/'
    const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression())
    app.use(publicPath, express.static(outputPath))

    app.use(require('prerender-node').set('host', 'swoo.tv'))

    app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))
}

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
    const isProd = process.env.NODE_ENV === 'production'

    if (isProd) {
        addProdMiddlewares(app, options)
    } else {
        const webpackConfig = require('../../internals/webpack/webpack.dev.babel')
        addDevMiddlewares(app, webpackConfig)
    }

    return app
}
