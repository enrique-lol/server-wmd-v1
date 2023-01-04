const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  heading1: {
    type: String,
    required: false
  },
  imageUrl1: {
    type: String,
    required: false
  },
  body1: {
    type: String,
    required: false
  },
  //
  heading2: {
    type: String,
    required: false
  },
  imageUrl2: {
    type: String,
    required: false
  },
  body2: {
    type: String,
    required: false
  },
  heading3: {
    type: String,
    required: false
  },
  imageUrl3: {
    type: String,
    required: false
  },
  body3: {
    type: String,
    required: false
  },
  heading4: {
    type: String,
    required: false
  },
  imageUrl4: {
    type: String,
    required: false
  },
  body4: {
    type: String,
    required: false
  },
  heading5: {
    type: String,
    required: false
  },
  imageUrl5: {
    type: String,
    required: false
  },
  body5: {
    type: String,
    required: false
  },
  heading6: {
    type: String,
    required: false
  },
  imageUrl6: {
    type: String,
    required: false
  },
  body6: {
    type: String,
    required: false
  },
  heading7: {
    type: String,
    required: false
  },
  imageUrl7: {
    type: String,
    required: false
  },
  body7: {
    type: String,
    required: false
  },
  heading8: {
    type: String,
    required: false
  },
  imageUrl8: {
    type: String,
    required: false
  },
  body8: {
    type: String,
    required: false
  },
  heading9: {
    type: String,
    required: false
  },
  imageUrl9: {
    type: String,
    required: false
  },
  body9: {
    type: String,
    required: false
  },
  heading10: {
    type: String,
    required: false
  },
  imageUrl10: {
    type: String,
    required: false
  },
  body10: {
    type: String,
    required: false
  },
  outro: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)
// product: {
//   type: String,
//   required: false,
//   default: 2
// },
// source: {
//   String: String,
//   required: false,
//   default: "dn"
// }
// unitQuanitiy: {
//   type: String,
//   required: true
// },
// palletArea: {
//   type: Number,
//   required: false,
//   default: 2
// },
// // ////////////
// palletSpotPerShelf: {
//   type: Number,
//   required: false,
//   default: 2
// },
// variableBinShelfCount: {
//   type: String,
//   required: true
// },
