class HelloController {
   async index(req, res) {
      return res.json({hello: 'eee deu certo mano'});
   }
}

export default new HelloController();