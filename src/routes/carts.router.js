import { Router } from "express";
import { cartManager } from "../main.js"


const cartsRouter = Router()

cartsRouter.post('/', async (req, res) => {
    try {
        const response = await cartManager.newCart()
        res.json(response)
    } catch (error) {
        console.log('Error al crear carrito');
    }
})

cartsRouter.get('/:cid', async (req, res) => {
    const {cid} = req.params;

    try {
      const response = await cartManager.getCartProducts(cid)
      res.json(response)
    } catch (error) {
        console.log(error);
    }
})

cartsRouter.post('/:cid/product/:pid', async (req, res) => {
    const {cid, pid} = req.params;

    try {
        await cartManager.addProductToCart(cid, pid)
        res.send('Producto agregado exitosamente')
    } catch (error) {
        console.log(error);
    }
})

export {cartsRouter}