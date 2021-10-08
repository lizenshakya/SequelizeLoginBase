const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const path = require('./path');
module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...path
};