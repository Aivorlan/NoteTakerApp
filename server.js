//Dependencies

var express = require('express');

var moment = require('moment');

var fs = require('fs');

var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function getDbData(filePath = `${__dirname}/db/db.json`) {
    let data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}


function writeDbData(data, filePath = `${__dirname}/db/db.json`) {
    fs.writeFile(filePath, JSON.stringify(data), err => {
        if (err) throw err;
    });
}


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/notes', (req, res) => {
    res.sendFile(`${__dirname}/public/notes.html`);
});


app.get('/api/notes', (req, res) => {
    dataArray = getDbData();
    return res.json(dataArray);
});

// Add a Note
app.post('/api/notes', (req, res) => {
    let dataArray = getDbData();
    let newData = req.body;

    // Use current timestamp as data id
    newData.id = moment().format('yyyyMMDDHHmmssSS');
    dataArray.push(newData);

    writeDbData(dataArray);
    return res.json(dataArray);
});

// Delete a Note
app.delete('/api/notes/:id', (req, res) => {
    let dataArray = getDbData();
    let { id } = req.params;

   
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].id == id) {
            dataArray.splice(i, 1);
        }
    }

    writeDbData(dataArray);
    res.json(dataArray);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});