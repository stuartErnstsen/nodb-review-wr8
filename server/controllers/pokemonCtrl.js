const caughtPokemon = [];
let id = 1;

module.exports = {
    getCaughtPokemon: (req, res) => {
        res.status(200).send(caughtPokemon);
    },
    catchPokemon: (req, res) => {
        const {pokemon} = req.body;
        // console.log(req.body)

        pokemon.id = id;
        id++;

        caughtPokemon.push(pokemon);
        res.status(200).send(caughtPokemon);
    },
    editName: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        console.log(name)
        console.log(req.body)

        const index = caughtPokemon.findIndex(e => e.id === +id);
        caughtPokemon[index].name = name;
        res.status(200).send(caughtPokemon);
    },
    releasePokemon: (req, res) => {
        const {id} = req.params;

        const index = caughtPokemon.findIndex(e => e.id === +id);
        caughtPokemon.splice(index, 1);
        res.status(200).send(caughtPokemon);
    }
}