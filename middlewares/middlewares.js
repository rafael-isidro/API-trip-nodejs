const validateId = (req, res, next) => {
    const id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: 'Id Inválido.' });
    }
    next();
};

const validateDate = (req, res, next) => {
    const date = req.body.date;
    if (date && !date.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        return res.status(400).json({ message: 'Data Inválida. A data deve ser informada no formato dd/mm/aaaa' });
    }
    next();
};

module.exports = {
    validateId,
    validateDate
};