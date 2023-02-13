__path = process.cwd()
var fs = require('fs')
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.sendFile(__path + '/views/kumpulan.html'))
router.get('/covid.php', (req, res) => res.sendFile(__path + '/covid/covid19.html'))
router.get('/about', (req, res) => res.sendFile(__path + '/views/about.html'))
router.get('/api', (req, res) => res.sendFile(__path + '/views/index.html'))
router.all('/status', (req, res) => {
  var hit = JSON.parse(fs.readFileSync('database/apikey.json'))

  const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*`
    config = {
        status: true,
        info: {
        memory: ram,
        totalhit: hit.length
        }
    }
    res.json(config)
})

module.exports = router
