let caughtArr = []

module.exports = {
    getCaughtPokemon: (req, res) => {
        res.status(200).send(caughtArr)
    } ,
    catch: (req, res) => {
        caughtArr.push(req.data)
        res.status(200).send(caughtArr);
    }
}