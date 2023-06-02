import express from 'express'
import path from 'path'

const app = express()

app.get('/oshi-no-ko.csv', async (req, res) => {
    res.header('Content-Disposition', 'attachement; filename="oshi-no-ko.csv"')
    res.sendFile(path.join(__dirname, '../data.txt'))
})

app.listen(9090)