const express = require('express')
const cors = require('cors');
const exercisesRouter = require('./routes/exercisesRoutes');
const app = express()
const port = 9000

app.use(express.json());
app.use(cors());

app.use('/exercises', exercisesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

