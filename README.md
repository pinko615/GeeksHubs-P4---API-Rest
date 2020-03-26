# BackendMovie

## Firsts steps 🚀

_You can download or clone this project to see the code of the entire website._
```
git clone https://github.com/pinko615/GeeksHubs-P4---BackendMovie.git
```

## Version 🖥

_v1.0_

## Developed with 🛠️

* [JavaScript]
* [Express]
* [Node]
* [Sequelize-cli]
* [SQL]
* [Postman]

## Settings ⚙️

_To download and install all the dependencies you have to run the following commands._
```
npm init
```
```
npm install
```

## Code Demo 🤓

_Search by "?q=movieTitle"_
```
const { Op } = Sequelize;
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
        res.status(500).send({message:'error'})
    });
});
```

_1 cinema = many movies._
```
  Cinema.associate = function(models) {
    Cinema.hasMany(models.Movie)
  };
```

## Author ✒️

* **Martín Pinto Hoffman** - *Full Stack Designer & Developer* - [pinko615](https://github.com/pinko615)

---
Made with ❤️ by [Pinko615](https://github.com/pinko615) 😊
