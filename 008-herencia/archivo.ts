
interface eqpComputoInterface {
    color: String;
    tipo: String;

    setPrecio(precio): void;
    getPrecio();
}

class eqpComputo implements eqpComputoInterface{

    public color = "Rojo";
    public tipo = "Escritorio";
    private precio: number;
    private impuesto: number;

    constructor(color, tipo, precio, impuesto){
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
        this.impuesto = impuesto;
    }

    public setPrecio(precio){
        this.precio = precio;
    }

    public getPrecio(){
        return this.precio;
    }
}

// PASO 1 - aplicamos la herencia
class eqpTableta extends eqpComputo{
    public so: String;

    setSO(sistema: String){
        this.so = sistema;
    }

    getSO(){
        return this.so;
    }
}

var eqpObj = new eqpComputo("Rojo","Ensamblada",100.00,.16);
eqpObj.color = "Verde";

eqpObj.setPrecio(120.20);
eqpObj.getPrecio();

// PASO 1 - continuacion
var eqpObjTableta = new eqpTableta("Rojo","Ensamblada",100.00,.16);
console.log(eqpObjTableta);