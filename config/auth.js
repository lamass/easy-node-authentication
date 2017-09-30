// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '2008933269387756', // your App ID
        'clientSecret'    : '5e8dee302048d3d0973da524b27358f4', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'      : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'l0xQIPdQ6z77apkdBLNI7JqvL',
        'consumerSecret'     : 'wD5GD2HfJx1cGqT7ZeGOV2iuz71cJPqf5vPP3sHC5pCIPCOaUl',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '25633325714-kl1m1qg4m83fcb516dc20aovrfftgfom.apps.googleusercontent.com',
        'clientSecret'     : 'kckB9Cc8N2l1-vOWD9lqeyfn',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
