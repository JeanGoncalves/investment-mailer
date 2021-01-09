module.exports = app => {
    const controller = {
        main: (req, res) => res.status(200).send('Api init')
    }

    return controller
}