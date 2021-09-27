const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')




const FilmSchema = new Schema(
    {
        name: {
            type: String
        },
        image: {
            type: String
        },
        category:{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        episodes: [
            {
                type: String
            }
        ],
        slug: {
            type: String,
            slug: 'name', 
            unique: true
        }
    }
)


mongoose.plugin(slug)


const Film = mongoose.model('Film', FilmSchema)
module.exports = Film