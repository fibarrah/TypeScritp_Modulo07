
// Creamos una clase

class eqpComputo {

    // Propiedades Publicas
    public color: String = "Rojo";
    public tipo: String = "Escritorio";
    // Propiedades Privadas
    private precio: number;
    private impuesto: number;

    // Constructor
    constructor(color, tipo, precio, impuesto){
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
        this.impuesto = impuesto;
    }

    // Metodos

    public setPrecio(precio){
        this.precio = precio;
    }

    public getPrecio(){
        return this.precio;
    }
}

var eqpObj = new eqpComputo("Rojo","Ensamblada","100.00",".16");
eqpObj.color = "Verde";

eqpObj.setPrecio(120.20);
eqpObj.getPrecio();