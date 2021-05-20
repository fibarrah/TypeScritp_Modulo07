
// Creamos una clase

class eqpComputo {

    // Propiedades Publicas
    public color: String = "Rojo";
    public tipo: String = "Escritorio";
    // Propiedades Privadas
    private precio: number;
    private impuesto: number;

    // Metodos

    public setPrecio(precio){
        this.precio = precio;
    }

    public getPrecio(){
        return this.precio;
    }
}

var eqpObj = new eqpComputo();
eqpObj.color = "Verde";

eqpObj.setPrecio(120.20);
eqpObj.getPrecio();