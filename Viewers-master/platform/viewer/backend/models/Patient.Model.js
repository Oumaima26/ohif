const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//cree schema
const PatientSchema = new Schema({
  nom: { 
    type: String,
    match: /^[a-zA-Z0-9- _]+$/,
    required: true 
  },
  prenom: { 
    type: String,
    match: /^[a-zA-Z0-9-_]+$/,
    required: true 
  },
  tel: { 
    type: Number,
    required: true ,
    maxlength:8
  },
  email: { 
    type: String,
    lowercase: true,
    unique: true,
    required: true 
  },
  password: { 
    type: String
  },
}, {timestamps: { createdAt: "created_at" }});



const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;