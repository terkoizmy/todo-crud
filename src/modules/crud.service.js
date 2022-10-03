import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllMission = async (req, res, next) => {
    try{
        let users = await prisma.Todo.findMany()
        res.json(users);
    }catch(error){
        next(error)
    }
}

export const inputMission = async (req, res, next) => {
    try{
        let {
            mission,
            description,
        } = req.body;
        let input = await prisma.Todo.create({
            data: {
                mission: mission,
                description: description
            }
        })
        if(input){
            res.status(201).json({
                status: "success",
                message: "mission has been update",
            })
        }else{
            res.status(500).json({
                status: "error",
                message: "mission failed to update",
            })
        }
    }catch(error){
        next(error)
    }
}

export const deleteMission = async (req, res, next) => {
    try{
        let {
            id
        } = req.body
        const deleteTask = await prisma.Todo.delete({
            where: {
              id: id,
            },
          })
        console.log(deleteTask)
        if(deleteTask){
            res.status(201).json({
                status: "success",
                message: "Mission has been delete",
            })
        }else{
            res.status(500).json({
                status: "error",
                message: "foto failed to delete",
            })
        }
    }catch(error){
        next(error)
    }
}

export const updateMission = async (req, res, next) => {
    try{
        let {
            id,
            mission,
            description
        } = req.body
        const updateTask = await prisma.Todo.update({
            where: {
                id: id,
            },
            update: {
                mission: mission,
                description: description
            }
          })
        if(updateTask){
            res.status(201).json({
                status: "success",
                message: "Mission has been delete",
            })
        }else{
            res.status(500).json({
                status: "error",
                message: "foto failed to delete",
            })
        }
    }catch(error){
        next(error)
    }
}