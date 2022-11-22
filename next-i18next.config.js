const path = require('path')
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'lad', 'zh-Hans'],
        localePath: path.resolve('./public/locales')
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development'
}