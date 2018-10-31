const tabletop = require('tabletop');

tabletop.init({
    key: '1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc',
    callback: showInfo,
    simpleSheet: true
});

function showInfo(data, tabletop){
    console.log(data);
}