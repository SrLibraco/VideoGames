const { Router } = require('express');
const router = Router();
const getDetail = require('../../controllers/getDetail.js');

router.get('/videogame/:id', async (req, res) => {
    
    try {
        const { id } = req.params;
        getDetail(id);
        const game = await getDetail(id);
        res.status(200).send(game);
    }catch (error){
        res.status(404).send('Game not found');
    }
});

module.exports = router;