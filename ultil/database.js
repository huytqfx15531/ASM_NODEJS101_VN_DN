const mongoose = require('mongoose');

exports.mongooseConnect = () => {
    return mongoose.connect('mongodb+srv://HUYFX15531:040199@cluster0.sbhujod.mongodb.net/?retryWrites=true&w=majority');
}
