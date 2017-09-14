/* eslint-disable global-require */
const express = require('express')
const path = require('path')
const request = require('request')
const compression = require('compression')
const pkg = require(path.resolve(process.cwd(), 'package.json'))

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

const metaDataList = {
    'home': {
        title: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
        desc: 'Exclusive and powerful invite-only platform for influencers, experts, educators, reporters, artists, and performers, to broadcast live video to the world, monetize their live sessions and grow their tribe. Download Swoo App on AppStore & PlayStore.',
    },
    'privacy-and-policy': {
        title: 'Swoo Privacy Policy',
        desc: 'Read about how Swoo respects the privacy of community of Swoo audience and Swoo broadcasters.',
    },
    'terms-and-conditions': {
        title: 'Swoo Terms of Use',
        desc: 'Read about the terms of use you agree as audience and broadcaster when you use Swoo live broadcasting platform on mobile, web or desktop.',
    },
    'faq': {
        title: 'Swoo Frequently Asked Questions',
        desc: 'Looking for something? Browse through FAQs about Swoo to know more about us.',
    },
    'blog': {
        title: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
        desc: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
    },
    'search': {
        title: 'Discover interesting live video sessions • Swoo Live Video Sessions',
        desc: 'Discover live video broadcasts from well known personalities from all spheres of life. Interact with the broadcasters and viewers by instant comments, share the broadcasts and invite your friends and catch-up on missed live sessions.',
    },
    'profile': {
        title: 'Swoo Live Audience',
        desc: ' influencers on Swoo - Engage with broadcasters on Swoo live video sessions.',
    },
    'channels': {
        title: 'Discover interesting live video sessions • Swoo Live Video Sessions',
        desc: 'Discover live video broadcasts from well known personalities from all spheres of life. Interact with the broadcasters and viewers by instant comments, share the broadcasts and invite your friends and catch-up on missed live sessions.',
    },
    'support': {
        title: 'Swoo Support & Customer Care',
        desc: 'Need Help? Tell us about your problem, we at Swoo would be happy to educate, assist and support.',
    },
    'broadcast': {
        title: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
        desc: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
    },
    'broadcasters': {
        title: 'Swoo Live Audience',
        desc: ' influencers on Swoo - Engage with broadcasters on Swoo live video sessions.',
    },
}

// Production ~QA   
const addProdMiddlewares = (app, options) => {
    const fs = require('fs')
    const publicPath = options.publicPath || '/static/'
    const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression())
    app.use(publicPath, express.static(outputPath))

    app.use(require('prerender-node').set('host', 'swoo.tv').set('protocol', 'https'))

    // the dev custom paths are been moved to nginx config. refer /app/nginx.config file for the info

    app.get('*', (req, res) => {
        // res.sendFile(path.resolve(outputPath, 'index.html'))
        fs.readFile(path.resolve(outputPath, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.sendStatus(404)
            } else {
                let metsDataStr = "<meta charset=\"utf-8\">"
                let metaData = {
                    title: 'Experience the joy of being live with Swoo. Invite only live video broadcasting platform.',
                    desc: 'Exclusive and powerful invite-only platform for influencers, experts, educators, reporters, artists, and performers, to broadcast live video to the world, monetize their live sessions and grow their tribe. Download Swoo App on AppStore & PlayStore.',
                    url: 'https://swoo.tv/',
                    image: 'https://swoo.tv/favicon.ico',
                    site: 'https://swoo.tv/',
                }

                if (req.params[0]) {
                    metaData.url += req.params[0]
                    const key = req.params[0].split('/')
                    key.shift() // remove first element since it is empty

                    if (key.length >= 2) {
                        if (key[0] == 'profile') {
                            metaData.title = key[0] + " - " + key[1] + " : " + metaDataList[key[0]].title
                            metaData.desc = key[0] + " - " + key[1] + " : " + metaDataList[key[0]].desc
                        } else if (key[0] == 'blog') {
                            metaData.title = key[0] + " - " + metaDataList[key[0]].title + key[2]
                            metaData.desc = key[0] + " - " + metaDataList[key[0]].desc + key[2]
                        } else if (key[0] !== 'broadcast') {
                            metaData.title = key[0]
                            metaData.desc = key[0]
                        }
                    } else if (metaDataList[key]) {
                        metaData.title = key[0] + " - " + metaDataList[key[0]].title
                        metaData.desc = key[0] + " - " + metaDataList[key[0]].desc
                    }
                }

                const metaTags = [
                    {name: 'title', content: metaData.title},
                    {name: 'description', content: metaData.desc},

                    {property: 'og:title', content: metaData.title},
                    {property: 'og:description', content: metaData.desc},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:url', content: metaData.url},
                    {property: 'og:image', content: metaData.image},

                    {name: 'twitter:card', content: 'summary'},
                    {name: 'twitter:site', content: metaData.site},
                    {name: 'twitter:url', content: metaData.url},
                    {name: 'twitter:title', content: metaData.title},
                    {name: 'twitter:description', content: metaData.desc},
                    {name: 'twitter:image', content: metaData.image},

                    {name: 'al:web:url', content: metaData.site},
                    {name: 'al:ios:app_name', content: 'Swoo'},
                    {name: 'al:ios:app_store_id', content: '1201718019'},
                    {name: 'al:ios:url', content: metaData.site},
                    {name: 'al:android:app_name', content: 'Swoo'},
                    {name: 'al:android:package', content: 'com.kryptolabs.android.speakerswire'},
                    {name: 'al:android:url', content: metaData.site},
                ]

                metaTags.forEach((item) => {
                    if (item.name) {
                        metsDataStr += "<Meta name='" + item.name + "' content='" + item.content + "'>"
                    } else if (item.property) {
                        metsDataStr += "<Meta property='" + item.property + "' content='" + item.content + "'>"
                    }
                })
                data = data.replace("<title>Experience the joy of being live with Swoo. Invite only live video broadcasting platform.</title>", "<title>" + metaData.title + "</title>")
                res.send(data.replace("<meta charset=\"utf-8\">", metsDataStr))
            }
        })
    })
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
