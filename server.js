import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/users', async(req, res)=>{
  const users = await prisma.user.findMany()
  res.send(users)
})

app.post('/users', async(req, res)=>{
  try {
    
    await prisma.user.create({
      data:{
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })
    res.status(201)
    res.send("User created")

  } catch (error) {
    res.status(error)
  }
})


app.put('/users/:id', async(req, res)=>{
  try {
    
    await prisma.user.update({
      where:{
        id: req.params.id
      },
      data:{
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })

  } catch (error) {
    res.status(error)
  }
})

app.delete('/users/:id', async(req, res)=>{
  try {
    
    await prisma.user.delete({
      where:{
        id: req.params.id
      },
    })
    res.send("User deleted")

  } catch (error) {
    res.status(error)
  }
})


const port = 3001
app.listen(port, console.log('server running👌'))