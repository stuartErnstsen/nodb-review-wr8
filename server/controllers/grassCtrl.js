//Controllers contain the handler functions for endpoints. When building a controller,
//you need to use module.exports to export your functions. You should export an object of
//methods (seen below), so that you can create as many handler functions as you need.
const axios = require('axios');

module.exports = {
    getWildPokemon: (req, res) => {
        let pokemonArr = [];
        let promises = [];
        for(let i=0;i<3; i++){
            let num = Math.ceil(Math.random() * 151) 
            promises.push(
                axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
                    .then(response => {
                        pokemonArr.push(response.data);
                    })
                    .catch(err => res.status(500).send(err))
            )
        }
        Promise.all(promises).then(() => res.status(200).send(pokemonArr))
        

        // const rand1 = Math.ceil(Math.random() * 151),
        //       rand2 = Math.ceil(Math.random() * 151),
        //       rand3 = Math.ceil(Math.random() * 151)
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
        //     .then(response => {
        //         pokemonArr.push(response.data);
        //         axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
        //             .then(response => {
        //                 pokemonArr.push(response.data);
        //                 axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
        //                     .then(response => {
        //                     pokemonArr.push(response.data);
        //                     res.status(200).send(pokemonArr)
        //             })
        //         })
        //     })
        //     .catch(err => res.status(500).send(err))        
    }
}