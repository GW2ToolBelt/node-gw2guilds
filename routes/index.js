"use strict"


module.exports = function(app, express){
    var routes = this;

    app.get('/', require('./home.js'));
    // /0D8B74FC-F940-4314-8EAF-8F8C52C4C4EB
    app.get('/:guildId([A-Z0-9-]{36}):extension(.svg)?', require('./shortlink.js'));
    app.get('/guilds/:guildName/:size([0-9]+).svg', require('./emblem.js'));
    app.get('/guilds/:guildName', require('./guild.js'));
    
    return routes;
};