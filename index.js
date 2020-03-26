const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3000;

const { Movie,Actor,Cinema } = require('./models/index.js');

// Filter / No repetir tanto sqlz
const { Op } = Sequelize;

app.use(express.json());

// Peliculas
app.get('/movies', (request,response) => {
    Movie.findAll({
        include: [Actor]
    })
    .then(movies => response.send(movies))
    .catch(err =>{
        console.log(err)
        response.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Peliculas // Busqueda a traves de /search?q=
app.get('/movies/search', function (request, response) {
    let filter = {};
    let { q } = request.query;

    if (q) {
        filter = {
            where: {
                title: {
                    [Op.like]: `${q}%`
                }
            }
        };
    }

    Movie.findAll(filter)
    .then(movies => response.send(movies))
    .catch(err =>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Peliculas // Filtro por ID
app.get('/movies/:id', (request,response) => {
    let { id } = request.params;
    
    Movie.findByPk(id, {
        include: [Actor]
    })
    .then(movies => response.send(movies))
    .catch(err =>{
        console.log(err)
        response.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Actores
app.get('/actors', (req,res) => {
    Actor.findAll({
        include: [Movie]
    })
    .then(actors => res.send(actors))
    .catch(err =>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los actores'})
    });
});

// Actores // Filtro por ID
app.get('/actors/:id', (request,response) => {
    let { id } = request.params;
    
    Actor.findByPk(id, {
        include: [Movie]
    })
    .then(actors => response.send(actors))
    .catch(err =>{
        console.log(err)
        response.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Cines
app.get('/cinemas', (request,response) => {
    Cinema.findAll()
    .then(cinemas => response.send(cinemas))
    .catch(err =>{
        console.log(err)
        response.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Cines // Busqueda a traves de /search?q=
app.get('/cinemas/search', function (request, response) {
    let filter = {};
    let { q } = request.query;

    if (q) {
        filter = {
            where: {
                name: {
                    [Op.like]: `${q}%`
                }
            }
        };
    }

    Cinema.findAll(filter)
    .then(cinemas => response.send(cinemas))
    .catch(err =>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

// Cines // Filtro por ID
app.get('/cinemas/:id', (request,response) => {
    let { id } = request.params;
    
    Cinema.findByPk(id)
    .then(cinemas => response.send(cinemas))
    .catch(err =>{
        console.log(err)
        response.status(500).send({message:'Ha habido un problema al cargar las pelicula'})
    });
});

app.listen(PORT, () => {
    console.log(`El Servidor está inicializado en ${PORT}`);
});