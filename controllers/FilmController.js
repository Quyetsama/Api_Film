const Film = require('../models/Film')
const Category = require('../models/Category')



class FilmController{
    // ['GET'] /films/
    async getFilms(req, res, next){
        const films = await Film.find({})
        return res.status(200).json({ films })
    }

    // ['GET'] /films/categories
    async getCategories(req, res, next){
        const categories = await Category.find({})
        return res.status(200).json({ categories })
    }

    // ['POST'] /admin/newfilm
    async newCategory(req, res, next){
        const newCategory = new Category(req.body)
        await newCategory.save()
        return res.status(201).json({ category: newCategory })
    }

    // ['POST'] /admin/newcategory
    async newFilm(req, res, next){
        const categoryID = req.body.category
        const newFilm = new Film(req.body)

        const category = await Category.findById(categoryID)

        newFilm.category = category

        await newFilm.save()
        return res.status(201).json({ film: newFilm })
    }
}

module.exports = new FilmController