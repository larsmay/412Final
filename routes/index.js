var express = require('express');
var router = express.Router();
var userName;
var itemModel = require('../models/item');
var store;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start', { title: 'Shopping List App' });
});

router.get('/newItem', function(req,res,next) {
    res.render('index', {title: 'Add Item'});
});
router.get('/inputSuccess', function(req, res, next) {
  res.render('items', { title: 'Item Added!' });
});

router.post('/newItem', async (req, res, next) => {
    // If it's not showing up, just use req.body to see what is actually being passed.
    userName = req.body.userName;
    var item = req.body.itemName;
    var quantity = req.body.quantity;
    var type = req.body.itemType;
    var store = req.body.store;
    itemModel.addToList(userName, item, quantity, type, store);
    res.redirect('/inputSuccess');
});

router.get('/list', function(req,res,next) {
    res.render('list', {title: 'Search List'});
});

router.post('/list', async (req, res, next) => {
    // If it's not showing up, just use req.body to see what is actually being passed.
    userName = req.body.userName;
    store = req.body.store;
    res.redirect('/listPop');
});

router.get('/listPop', async(req, res,next) =>{
    try {
        const shopping = await itemModel.shoppingList(userName, store);

        res.render('listPop', {items: shopping, store: store});
    } catch(e) {
        res.send("Can't find the list");
    }
});
 
module.exports = router;
