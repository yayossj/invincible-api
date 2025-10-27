const express = require('express');
const app = express();

const characters = require('../data/characters.json');
const quotes = require('../data/quotes.json');
const episodes = require('../data/episodes.json');

app.get('/', (req, res) => {
  res.send({ message: 'Bienvenido a la API de Invincible' });
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/episodes', (req, res) => {
  res.json(episodes);
});

module.exports = app;
