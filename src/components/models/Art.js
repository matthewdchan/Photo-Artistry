const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false, // should be changed to true if we don't allow image uploads
    },
    artist: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

    }
);

module.exports = Art = mongoose.model('art', ArtSchema);
