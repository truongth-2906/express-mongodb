const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/express';
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(mongoose);
    db[model.modelName] = model;
  });

module.exports = db;
