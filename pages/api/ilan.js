// pages/api/ilan.js

import connect from '../../lib/mongoDB';
import mongoose from 'mongoose';

connect();

const Ilan = mongoose.model('Ilan', new mongoose.Schema({
  title: String,
  description: String,
  city: String,
  price: Number,
  color: String,
  marka: String,
  screen: String,
  image: String,
  category: String,
}));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, description, city, price, color, marka, screen, image, category } = req.body;
      console.log("reqBody: ", req.body);

      const yeniIlan = new Ilan({
        title,
        description,
        city,
        price,
        color,
        marka,
        screen,
        image,
        category,
      });

      await yeniIlan.save();

      res.status(201).json(yeniIlan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Veri kaydedilemedi.' });
    }
  } else if (req.method === 'GET') {
    try {
      const ilanlar = await Ilan.find();
      res.json(ilanlar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Veriler alınamadı.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
