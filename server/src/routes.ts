import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: "Eae, galera "});
});

export default routes;

