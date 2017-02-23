let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//book schema definition
let TipSchema = new Schema(
  {
    body: { type: String, required: true },
    category: { type: String, required: true }    
  }, 
  { 
    versionKey: false
  }
);

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('tip', TipSchema);
