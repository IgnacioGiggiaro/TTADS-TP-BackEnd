/*
const validator = require('validator');
const mongoose = require('mongoose');
const { Paciente, ObraSocial, Professional, Practica } = require('../models/index');
const { isValidLength } = require('../utils/isValidLength');

const verificacionTurno = async (req, res, next) => {
    try {
        const errors = {

            dia: null,
            paciente: null,
            obrasocial: null,
            professional: null,
            practica: null,
            hsDesde: null,
            hsHasta: null,
            };
        errors.dia = ((req.body.dia) <= 4 && (req.body.dia) >= 0) ? null : 'Tiene que seleccionar un dia de semana';

        if (!mongoose.isValidObjectId(req.body.paciente.toString())) {
            errors.paciente = 'Paciente no valido'
        } else {
            const paciente = await Paciente.findById(req.body.paciente);
            errors.paciente = paciente ? null : 'Paciente no existe';
        }

        if (!mongoose.isValidObjectId(req.body.obraSocial.toString())) {
            errors.obrasocial = 'Obra Social no valido'
        } else {
            const obrasocial = await ObraSocial.findById(req.body.obraSocial);
            errors.obrasocial = obrasocial ? null : 'ObraSocial no existe';
        }

        if (!mongoose.isValidObjectId(req.body.professional.toString())) {
            errors.professional = 'professional no valido'
        } else {
            const professional = await Professional.findById(req.body.professional);
            errors.professional = professional ? null : 'Professional no existe';
        }

        if (!mongoose.isValidObjectId(req.body.practica.toString())) {
            errors.practica = 'practica no valido'
        } else {
            const practica = await Practica.findById(req.body.practica);
            errors.practica = practica ? null : 'Practica no existe';
        }

        if (Object.entries(errors).some((e) => e[1] != null)) {
            return res.status(400).send(errors);
        }

        return next();
    } catch {
        return res.status(500).send({message: 'Error creando Turno'})
    }
};

module.exports = verificacionTurno;
*/
