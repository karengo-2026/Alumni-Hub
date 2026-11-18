import express from 'express'
import * as Path from 'node:path'

import lessonsRoutes from './routes/lessons.ts'
import resourcesRoutes from './routes/resources.ts'
import unitsRoutes from './routes/units.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/lessons', lessonsRoutes)
server.use('/api/v1/resources', resourcesRoutes)
server.use('/api/v1/units', unitsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
