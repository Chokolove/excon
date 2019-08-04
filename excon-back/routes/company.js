const express = require('express');
const router = express.Router();
const {Company} = require('../models')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/elese');

router.get('/', (req, res, next) => {
  res.json({
    status: "Lading on excon-company-back"
  })
});

router.get('/get-all', (req, res, next) => {
  Company.find()
    .then((doc) => {
      res.json(doc);
    })
});

router.post('/insert', (req, res, next) => {
  var item ={
    name: req.body.name,
    cell: req.body.cell,
    email: req.body.email,
    reason: req.body.reason,
    ruc: req.body.ruc,
    direction: req.body.direction,
    department: req.body.department,
    province: req.body.province,
    district: req.body.district,
    comment: req.body.comment
  }
  var data = new Company(item);
  data.save();

  res.json({
    status: "Saved.."
  })
});

router.put('/update/', (req, res, next) => {
  var item ={
    name: req.body.name,
    cell: req.body.cell,
    email: req.body.email,
    reason: req.body.reason,
    ruc: req.body.ruc,
    direction: req.body.direction,
    department: req.body.department,
    province: req.body.province,
    district: req.body.district,
    comment: req.body.comment
  };
  var id = req.body.id;

  Company.findByIdAndUpdate(id,item).exec();
  res.json({
    status: "Updated.."
  })
});

router.delete('/delete/', (req, res, next) => {
  var id = req.body.id ;
  
  Company.findByIdAndDelete(id).exec();
  res.json({
    status: "Deleted.."
  })
});


module.exports = router;