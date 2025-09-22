import express from 'express'
import heroRoutes from './hero.routes.js'
const router = express.Router()
/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Ping
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/ping', (req, res) => res.sendStatus(200))
/**
 * @openapi
 * /trace:
 *  get:
 *     tags:
 *     - Trace
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/trace',(req, res) => res.sendStatus(200))

router.use(heroRoutes)

export default router
