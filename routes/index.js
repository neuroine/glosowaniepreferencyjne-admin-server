var SessionHandler = require('./session')
, ContentHandler = require('./content')
, ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {

    var sessionHandler = new SessionHandler(db);
    var contentHandler = new ContentHandler(db);

    // Middleware to see if a user is logged in
//    app.use(sessionHandler.isLoggedInMiddleware);

    // The main page of the blog
    app.get('/', contentHandler.showMainPage);

    app.get('/api/stats', contentHandler.insertEntry);

    app.post('/api/stats', contentHandler.insertEntry);

}