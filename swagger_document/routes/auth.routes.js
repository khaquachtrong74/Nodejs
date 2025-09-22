import express from 'express'
const router = express.Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Đăng nhập
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *       401:
 *         description: Sai thông tin đăng nhập
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'user@example.com' && password === '123456') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

export default router
