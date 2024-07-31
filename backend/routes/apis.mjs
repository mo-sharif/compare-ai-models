import express from 'express';
import { queryAPI } from '../services/apiRequest.mjs';
import { apiConfigs } from '../config/apis.mjs';

const router = express.Router();

apiConfigs.forEach(api => {
    router.post(`/${api.name}`, async (req, res) => {

        try {
            const result = await queryAPI(api.url, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
});

export default router;