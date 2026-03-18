import express from 'express';
import controller from '../controllers/Libro';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Libros
 *     description: Endpoints CRUD de libros
 *
 * components:
 *   schemas:
 *     Libro:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ObjectId de MongoDB
 *         title:
 *           type: string
 *           example: "Clean Code"
 *         author:
 *           type: string
 *           example: "Robert C. Martin"
 *         description:
 *           type: string
 *           example: "A Handbook of Agile Software Craftsmanship"
 *         price:
 *           type: number
 *           example: 25.5
 *         type:
 *           type: string
 *           enum: [VENTA, ALQUILER]
 *           example: "VENTA"
 *         owner:
 *           type: string
 *           description: ID del usuario propietario
 *           example: "65f1c2a1b2c3d4e5f6789012"
 *         libreria:
 *           type: string
 *           description: ID de la librería (opcional)
 *           example: "65f1c2a1b2c3d4e5f6789013"
 *     LibroCreateUpdate:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - description
 *         - price
 *         - type
 *         - owner
 *       properties:
 *         title:
 *           type: string
 *           example: "Clean Code"
 *         author:
 *           type: string
 *           example: "Robert C. Martin"
 *         description:
 *           type: string
 *         price:
 *           type: number
 *           example: 25.5
 *         type:
 *           type: string
 *           enum: [VENTA, ALQUILER]
 *           example: "VENTA"
 *         owner:
 *           type: string
 *           example: "65f1c2a1b2c3d4e5f6789012"
 *         libreria:
 *           type: string
 *           example: "65f1c2a1b2c3d4e5f6789013"
 */

/**
 * @openapi
 * /libros:
 *   post:
 *     summary: Crea un libro
 *     tags: [Libros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LibroCreateUpdate'
 *     responses:
 *       201:
 *         description: Creado
 *       422:
 *         description: Validación fallida
 */
router.post('/', ValidateJoi(Schemas.libro.create), controller.createLibro);

/**
 * @openapi
 * /libros/{libroId}:
 *   get:
 *     summary: Obtiene un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: libroId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 */
router.get('/:libroId', controller.getLibro);

/**
 * @openapi
 * /libros:
 *   get:
 *     summary: Lista todos los libros
 *     tags: [Libros]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', controller.getAllLibros);

/**
 * @openapi
 * /libros/{libroId}:
 *   put:
 *     summary: Actualiza un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: libroId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LibroCreateUpdate'
 *     responses:
 *       201:
 *         description: Actualizado
 *       404:
 *         description: No encontrado
 */
router.put('/:libroId', ValidateJoi(Schemas.libro.update), controller.updateLibro);

/**
 * @openapi
 * /libros/{libroId}:
 *   delete:
 *     summary: Elimina un libro por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: libroId
 *         required: true
 *         schema:
 *           type: string
 *         description: ObjectId del libro
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 */
router.delete('/:libroId', controller.deleteLibro);

/**
 * @openapi
 * /libros/{libroId}/restore:
 *   put:
 *     summary: Restaura un libro eliminado por ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: libroId
 *         required: true
 *         schema:
 *           type: string
 *     description: ObjectId del libro
 *     responses:
 *       200:
 *         description: Restaurado
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:libroId/restore', controller.restoreLibro);
export default router;
