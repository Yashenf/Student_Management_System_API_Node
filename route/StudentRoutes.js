const express = require('express');
const studentContraller = require('../controller/StudentController');
const router = express.Router();

router.post('/save',studentContraller.save);
router.get('/find',studentContraller.get);
router.get('/findAll',studentContraller.getAll);
router.put('/update',studentContraller.update);
router.delete('/delete',studentContraller.deleteData);

module.exports = router;