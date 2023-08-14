const TripModel = require('../models/Trip');
const { parse } = require('date-fns');

const checkTripBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);
    if (priceSum > budget) return false;

    return true;
}

const tripController = {
    create: async (req, res) => {
        try {
            //recebendo dados do body:
            const trip = {
                destination: req.body.destination,
                date: req.body.date,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };
            // budget < valor dos serviços não pode criar novo serviço
            if (trip.services && !checkTripBudget(trip.budget, trip.services)) return res.status(406).json({ message: 'Orçamento insuficiente.' });

            trip.date = parse(trip.date, 'dd/MM/yyyy', new Date());
            //criando registro no banco de dados:
            const response = await TripModel.create(trip);
            res.status(201).json({ response, message: 'Viagem criada com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    getAll: async (req, res) => {
        try {
            const trips = await TripModel.find();
            if (trips.length === 0) {
                return res.status(404).json({ message: 'Não foram encontradas Viagems.' });
            }
            res.status(200).json(trips)
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const trip = await TripModel.findById(id);

            if (!trip) return res.status(404).json({ message: 'Viagem não encontrada.' });

            res.status(200).json(trip);
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const trip = await TripModel.findById(id);

            if (!trip) return res.status(404).json({ message: 'Viagem não encontrada.' });

            const deletedTrip = await TripModel.findByIdAndDelete(id);

            res.status(200).json({ deletedTrip, message: 'Viagem excluída com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { destination, date, description, budget, image, services } = req.body;

            if (!destination && !date && !description && !budget && !image && !services) {
                return res.status(400).json({ message: 'Deve ser informado ao menos uma propriedade válida para ser atualizada.' });
            }

            const trip = {
                destination,
                date,
                description,
                budget,
                image,
                services
            };
            if(date) trip.date = parse(trip.date, 'dd/MM/yyyy', new Date());
            
            const updatedTrip = await TripModel.findByIdAndUpdate(id, trip);
            if (!updatedTrip) return res.status(404).json({ message: 'Viagem não encontrado.' });


            res.status(200).json({ trip, message: 'Viagem atualizada com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    }
};

module.exports = tripController;