import Animali from "./animali.js"

export default class Fattoria {
    constructor() {

        if(document.getElementById("btGa")!= null){

            document.getElementById("btGa").addEventListener('click', this.cGallo);
        }
        
        if(document.getElementById("btAn") != null){
            document.getElementById("btAn").addEventListener('click', this.cAnatra);
        }

        if(document.getElementById("btMa") != null){
            document.getElementById("btMa").addEventListener('click', this.cMaiale);
        }

        if(document.getElementById("btMu") != null){
            document.getElementById("btMu").addEventListener('click', this.cMucca);
        }
    }

    cAnatra(){
        var anatra = new Animali("Anatra", "Germano", "2 zampe")
        document.getElementById("idTipo").innerHTML = anatra.tipo;
        document.getElementById("idRazza").innerHTML = anatra.razza;
        document.getElementById("idZampe").innerHTML = anatra.nzampe;
    }

    cGallo(){
        var gallo = new Animali("Gallo", "Andalusa", "2 zampe")
        document.getElementById("idTipo").innerHTML = gallo.tipo;
        document.getElementById("idRazza").innerHTML = gallo.razza;
        document.getElementById("idZampe").innerHTML = gallo.nzampe;
    }
  
    cMaiale(){
        var maiale = new Animali("Maiale", "Duroc", "4 zampe")
        document.getElementById("idTipo").innerHTML = maiale.tipo;
        document.getElementById("idRazza").innerHTML = maiale.razza;
        document.getElementById("idZampe").innerHTML = maiale.nzampe;
    }

    cMucca(){
        var mucca = new Animali("Mucca", " simmental", "4 zampe")
        document.getElementById("idTipo").innerHTML = mucca.tipo;
        document.getElementById("idRazza").innerHTML = mucca.razza;
        document.getElementById("idZampe").innerHTML = mucca.nzampe;
    }
}