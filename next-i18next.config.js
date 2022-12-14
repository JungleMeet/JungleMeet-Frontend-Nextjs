const path = require('path')
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'lad', 'zh-Hans'],
        localePath: path.resolve('./public/locales'),
        localeDetection: false
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development'
}