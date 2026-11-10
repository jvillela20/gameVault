import express from 'express'

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render('home', { title: 'GameVault - Home'});
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
