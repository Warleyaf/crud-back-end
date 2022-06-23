class HelloController {
   async index(req, res) {
      return res.json({hello: 'world meu chapaaa'});
   }
}

export default new HelloController();