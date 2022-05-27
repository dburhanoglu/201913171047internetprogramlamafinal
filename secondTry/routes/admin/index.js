const express = require('express')
const router = express.Router()
const Category = require('../../models/Category')

router.get(`/`, (req, res) => { // admin kısmının handlebarsına  yönlendiriyor(index handlebarsa)

    res.render('admin/index')
})

router.get(`/categories`, (req, res) => {

    Category.find({}).sort({$natural:-1}).lean().then(categories => { // categoriyi alıp categories e yönlendiriyor
        res.render('admin/categories', { categories: categories })
    })
})
router.post(`/categories`, (req, res) => {
    Category.create(req.body, (error, category) => {//db ye kategori ekliyor
        if (!error) {
            res.redirect('categories')
            console.log('ekle')
        }
    })

})

//sil kısmı
router.delete('/categories/:id', (req, res) => {//kategori sil
console.log('cıktı')
    Category.remove({ _id: req.params.id }).then(() => {
        res.redirect('/admin/categories')
        
    })
})
module.exports = router