const { Router } = require('express');
const router = Router();
const { dbApiDetail } = require('../../controllers/getDetail.js');

router.get('/videogame/:id', async (req, res) => {
    const { id } = req.params;
    let game = await dbApiDetail(id);
    try {
        game ? res.status(200).send(game) : res.status(404).send('Not id found.')
    }catch (error){
        res.status(404).send('Game not found');
    }
});

module.exports = router;