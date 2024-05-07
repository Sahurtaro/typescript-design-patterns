class User {
  constructor(name: string, emai: string) {}

  userAuth() {} //esto debería ser una clase diferente ya que implica una responsabilidad adicional
} //esta clase maneja el usuario, no debería hacer nada más a parte de manejar las propiedades de un usuario

class UserAuth {
  constructor(user: User) {}
  authenticate(password:string){
    //implementation logic
  }
} //solo sería responsable por la autenticación del user y nada más
