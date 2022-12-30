import express from 'express'
const app = express()
const PORT = 8080

app.listen(
   PORT,
   () => console.log(`api-service is alive on http://localhost:${PORT}`)
)


app.get('/asisten',(req,res)=>{
    res.status(200).send({
        nama:'arif',
        email:'arif@gmail.com',
        alamat:'sini'
    })
})