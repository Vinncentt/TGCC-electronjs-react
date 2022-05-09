const express = require('express');
const app = express();
const mongoose = require('mongoose');

const filialeModel = require('./models/Filiales');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TGCC', {
    useNewUrlParser: true,
}).then(console.log('connected succesfully'));

app.get('/insert', async (req, res) => {
    const filialeTitle = req.body.filialeTitle;
    const filialeDescription = req.body.filialeDescription;
    const filiale = new filialeModel({ 
        filialeTitle: "OXYREVET",
        filialeDesc: "Créée en 2019, Oxyrevet met au service des particuliers et des entreprises privées ou publiques"
    });

    try{
        await filiale.save();
    } catch(err){
        console.log(err);
    }
    res.send('Data inserted!');
})

app.listen(3001, () => {
    console.log('Server started at port 3001');
});