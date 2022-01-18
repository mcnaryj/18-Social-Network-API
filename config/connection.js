const { connect, connection } = require('mongoose');


connect("mongodb://localhost:27017/socialNetworkAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = connection;