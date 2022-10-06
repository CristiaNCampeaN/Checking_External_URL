
module.exports = {
    domain: 'https://www.emag.ro',
    name: 'homePage',
    route: '',
    locator: {
        link: {
            facebook: '[href="https://www.facebook.com/eMAG.ro"]',
            twitter: '[href="https://twitter.com/emag"]',
            youtube: '[href="https://www.youtube.com/user/wwweMAGro"]'
        },
        button: {
            acceptCookie: '.col-sm-5 > .btn-primary',
            cross: '.js-dismiss-login-notice-btn > .em',
        }
    },
}

