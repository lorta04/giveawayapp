const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GWSchema = new Schema({
  giveawayname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  giveaway_room: String,
  giveaway_givername: String,
  giveaway_status: Number,
  giveaway_place: String,
  giveaway_detail: String,
  giveaway_amount: Intl,
  giveaway_date: String,
  giveaway_time: String,
  giveaway_pic: String,
  giveaway_userannounce: Array
});

const giveaway = mongoose.model('giveaway', GWSchema);
module.exports = giveaway;