const { Service: ServiceModel } = require('../models/Service');

const serviceController = {
    create: async (req, res) => {
        try {
            //recebendo dados do body:
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            //criando registro no banco de dados:
            const response = await ServiceModel.create(service);
            res.status(201).json({ response, message: 'Serviço criado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            if (services.length === 0) {
                return res.status(404).json({ message: 'Não foram encontrados serviços.' });
            }

            res.json(services)
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await ServiceModel.findById(id);

            if (!service) {
                return res.status(404).json({ message: 'Serviço não encontrado.' });
            }

            res.json(service);
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await ServiceModel.findById(id);
            
            if (!service) return res.status(404).json({ message: 'Serviço não encontrado.' });

            const deletedService = await ServiceModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, message: 'Serviço excluído com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, price, image } = req.body;
            const service = {
                name,
                description,
                price,
                image
            };

            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
            if (!updatedService) return res.status(404).json({ message: 'Serviço não encontrado.' });

            if (!name && !description && !price && !image) {
                return res.status(400).json({ message: 'Deve ser informado ao menos uma propriedade válida para ser atualizada.' });
            }

            res.status(200).json({ service, message: 'Serviço atualizado com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message, message: 'Erro do Servidor.' });
        }
    }
};

module.exports = serviceController;