const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const apellido = Joi.string().min(3).max(30)
const text = Joi.string().min(5).max(30);
const date = Joi.string();
const email = Joi.string();
const telefono = Joi.number();


const createProductSchema = Joi.object({
  name:  name.required(),
  apellido: apellido.required(),
  text: text.required(),
  date: date.required(),
  email: email.required(),
  telefono: telefono.required()
});

const updateProductSchema = Joi.object({
  name:  name,
  text: text,
  date: date
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
