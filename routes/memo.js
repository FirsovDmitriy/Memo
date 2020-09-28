const {Router} = require('express');
const Memo = require('../models/Memo');
const router = Router();

router.get('/', async (req, res) => {

    const memos = await Memo.find({}).lean()

    res.render('index', {
        title: 'My list',
        memos
    })
})

router.post('/', async (req, res) => {
    const memo = new Memo({
        title: req.body.title
    })

   await memo.save()
   res.redirect('/')
})

router.post('/complete', async (req, res) => {
    await Memo.findByIdAndDelete(req.body.id)

    res.redirect('/')


})



module.exports = router;