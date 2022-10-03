import express from 'express';
import {getAllMission, inputMission, deleteMission, updateMission} from './crud.service.js'

const taskRouter = express.Router()

taskRouter.get('/list-task', getAllMission)
taskRouter.post('/input-task', inputMission)
taskRouter.delete('/dlt-task', deleteMission)
taskRouter.put('/updt-task', updateMission)

export default taskRouter;