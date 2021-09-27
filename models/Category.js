const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')




const CategorySchema = new Schema(
    {
        name: {
            type: String
        },
        slug: {
            type: String,
            slug: 'name', 
            unique: true
        }
    }
)


mongoose.plugin(slug)


const Category = mongoose.model('Category', CategorySchema)
module.exports = Category