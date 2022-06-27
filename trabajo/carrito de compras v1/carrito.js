//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022
//V1

//la clase encapsula datos y funciones que manipulan informacion y son una mejora sintactica sobre la herencia basada en prototipos de js
class CompraTienda {
    //propiedades :: Atributos son una variable que existe en una clase mientras que en un atributo siempre contendra valores de tipo string.
    #nombreCliente;
    #productoCompra;
    #cantidadCompra;
    #precioCompra;
//metodo constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
constructor() {
    this.#nombreCliente = "";
    this.#productoCompra = "";
    this.#cantidadCompra = 0;
    this.#precioCompra = 0;
}
calculaValorCompra() {
    //return funciona para la ejecucion de la funcion y especifica un valor para ser devuelto a quien llama a la funcion.
  return this.#cantidadCompra * this.#precioCompra;
}
capturaDato(mensaje){
    let valor = prompt(mensaje);
    return valor;
}
get getNombreCliente() {
    return this.#nombreCliente;
}
set setNombreCliente(value) {
    this.#nombreCliente = value;
}
get getProductoCompra() {
    return this.#productoCompra;
}
set setProductoCompra(value) {
    this.#productoCompra = value;
}
get getCantidadCompra() {
    return this.#cantidadCompra;
}
    set setCantidadCompra(value) {
    this.#cantidadCompra = value;
}
get getPrecioCompra() {
    return this.#precioCompra;
}
set setPrecioCompra(value) {
    this.#precioCompra = value;
}
}
// Esta función se le llama constructor en la terminología de la programación orientada a objetos. Eso era un constructor.
class CarritoTienda{
    #productos = [];
    constructor(){
        this.#productos = [];
}
nuevoProducto(nombre){
    let producto = new CompraTienda();
    producto.setNombreCliente = nombre;
    console.log('|camisa|pantalon|medias|')
    console.log('|  C   |   P    |  M   |')
    console.log('| 35000| 60000  | 5000 |')
    do{
        producto.setProductoCompra = producto.capturaDato('Digite el codigo de la comprar => ');

    }while(producto.getProductoCompra !='c' && producto.getProductoCompra!="p" && producto.getProductoCompra !="m" &&producto.getProductoCompra !="C" && producto.getProductoCompra !="P" && producto.getProductoCompra !="M")
    
    do {
        producto.setCantidadCompra = producto.capturaDato('Digite numero de unidades => ');    
    } while (isNaN(producto.getCantidadCompra) || producto.getCantidadCompra<1);

    this.#productos.push(producto);
    switch (producto.getProductoCompra) {
        case 'c':
            case 'C':
            console.log("---------------------------")
            console.log("|cantidad|producto|precio |")
            console.log("|    "+producto.getCantidadCompra+"   |"+" camisa"+" |"+"$35.000|")
            console.log("su total es:",35000*producto.getCantidadCompra +" "+ nombre)
        break;
        case 'p':
            case 'P':
                console.log("------------------------")
            console.log("|cantidad|producto|precio")
            console.log("|"+producto.getCantidadCompra+"|"+"pantalon"+"|"+"$60.000")
            console.log("su total es:",60000*producto.getCantidadCompra +" "+ nombre)
        break;
        case 'm':
            case 'M':
                console.log("------------------------")
            console.log("|cantidad|producto|precio")
            console.log("|"+producto.getCantidadCompra+"|"+"medias"+"|"+"5.000")
            console.log("su total es:",5000*producto.getCantidadCompra +" "+ nombre)
            break;
        default:
            valid=confirm('el codigo esta en error puede digitar de nuevo el codigo?');
        break; 
    }
    return producto; 
}
get carritoCompra(){
    return this.#productos;
}
get numeroProductos(){
    return this.#productos.length;
}
}
    function capturaNombreCliente(){
let nombre = prompt('Nombre del Cliente');
return nombre;  
}
    let sw = true;
    let respuesta = true;
    let nombre = '';
    //do...while crea un bucle que ejecuta una sentencia especificada,hasta que la condicion de comprobacion se evalua como falsa
do{
    do{
        nombre = capturaNombreCliente();
        if (nombre === ""){
            sw = true;
        } else {
            sw = false;
        }
    } while (sw);
    let canasta = new CarritoTienda();
    do{
        canasta.nuevoProducto(nombre);
        respuesta = confirm('¿Desea un nuevo producto?');
    }while(respuesta);
    let i=0;
    let compra = 0;
        respuesta = confirm('¿Existe un nuevo Cliente?');
}while (respuesta);