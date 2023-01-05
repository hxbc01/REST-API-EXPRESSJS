const respons = (statuscode, message, res) => {
    
    res.send(statuscode, message)

}

module.exports = respons;