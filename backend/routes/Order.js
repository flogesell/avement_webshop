const express = require("express");
const order = express.Router();
const db = require('../config/database');
const User = require('../models/e_user')
const Order = require('../models/e_order')

const jwt = require('jsonwebtoken');
const authentificate = require('../middleware/authentification.js')

const { SECRET } = process.env;

order.use(express.json());

async function main() {
  db.authenticate().then(() => console.log("Connected to database..."))
  await db.sync()
}

// SHOW ALL USER ORDERS
order.post('/all', authentificate, async function (req, res) {
    const { name } = req.body;
    const orders = await Order.findAll({ where: { u_id: req.user.id } });

    if(orders.length() > 0) res.status(200).json(orders);
    else res.status(200).json("no orders");

});

// RETURN SPECIFIC ORDER
order.post('/:id', authentificate, async function (req, res) {
    const id = req.params.id;
    const { name } = req.body;
    const order = await Order.findOne({ where: { id: id  } });

    if(orders.length() > 0) res.status(200).json(order);
    else res.status(200).json("no orders");

});

module.exports = order;