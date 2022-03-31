
const main = (req,res) => {
    res.json({
        message: 'Hello World',
        code: 200
    })
}

//export controller functions
module.exports = {
    main
}