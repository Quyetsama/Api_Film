const adminRouter = require('./admin')
const filmsRouter = require('./fims')
// mongodb+srv://nhom7:<password>@webfilm.qhvsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


function route(app){
    app.use('/admin', adminRouter)
    app.use('/films', filmsRouter)
    app.use('/', (req, res, next) => {
        return res.status(200).json({ success: true })
    })
}

module.exports = route