const express = require('express')
const app = express()
const port = 3000

//parse JSON using experss to clear up formatting issues 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let movies = [{
  id: '1',
  title: 'Fight Club',
  director: 'David Fincher',
  release_date: '1999-10-15',
},
{
  id: '2',
  title: 'Stardust',
  director: 'Matthew Vaughn',
  release_date: '2007-11-22',
},
{
  id: '3',
  title: 'Assassins Creed',
  director: 'Justin Kurzel',
  release_date: '2016-12-12',
},
];

//get the movie list in the form 
app.get('/movie', (req,res)=> {
  res.json(movies)
})

//add a movie to our array
app.post('/movie', (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send('Movie is added to the list');
});

//search for a movie in the list
app.get('/movie/:id', (req, res) => {
  const id = req.params.id

  for(let movie of movies) {
    if ( movie.id === id){
      res.json(movie)
      return
    }
  }
  res.status(404).send('Movie is not found');
});

//delete a movie from the list
app.delete('/movie/:id', (req, res)=> {
  const id = req.params.id

  movies = movies.filter(movie => {
    if(movie.id !== id){
      return true;
    }
    return fasle;
  })
  res.send('Movie is deleted')
});

// set the server listen at port 
app.listen(port, () => console.log(`Server is listening at port ${port}`));