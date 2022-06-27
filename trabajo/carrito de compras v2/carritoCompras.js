//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022
//V2

//usa para importar funciones que han sido exportadas desde un módulo externo. Por el momento, esta característica sólo está comenzando a ser implementada de forma nativa en los navegadores.
import datosArchivo from './datos.json' assert { type: 'json' };
// Clase que gestiona cada uno de los productos que se tienen para la venta
class ProductoTienda {

     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;
//El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
     constructor(){

          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;

     }

     get getCodigoProducto() {
          return this.#codigoProducto;
     }

     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }

     get getNombreProducto() {
          return this.#nombreProducto;
     }

     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }

     get getInventarioProducto() {
          return this.#inventarioProducto;
     }

     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }

     get getPrecioProducto() {
          return this.#precioProducto;
     }

     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }

}
//Clase que gestiona los productos que se tienen para la venta en la tienda
class GestionarProductosTienda {

     #cargaProductos;

     constructor(){

          this.#cargaProductos = [];

     }

     getDatosProductosCargados() {
          return this.#cargaProductos;
     }

     cargaManualProducto(){

          let dato = "";
          //let respuesta = confirm('¿Desea digitar un nuevo producto?');

          while (confirm('¿Desea digitar un nuevo producto?')){

               let sw = true;
               let producto = new ProductoTienda();

               do{
                    do{
                    dato = this.datosProducto("Digite Codigo del Producto ==> ");
                    }while(isNaN(dato)||dato<1)
                    //sw = this.verificarCodigoProducto(dato);
               } while (this.verificarCodigoProducto(dato));

               producto.setCodigoProducto = dato.toUpperCase();

               do{
                    dato = this.datosProducto("Digite Nombre del Producto ==> ");
               } while (this.verificarNombreProducto(dato.toUpperCase()));

               producto.setNombreProducto = dato.toUpperCase();
               do{
               producto.setInventarioProducto = Number(this.datosProducto("Digite Inventario del Producto ==> "));
               }while(isNaN( producto.getInventarioProducto)|| producto.getInventarioProducto<1)
               do{
               producto.setPrecioProducto = Number(this.datosProducto("Digite Precio del Producto ==> "));
               }while(isNaN( producto.getPrecioProducto)|| producto.getprecioProducto<1)
               this.#cargaProductos.push(producto);
     
               //respuesta = confirm('¿Desea grabar un nuevo producto?');

          }
     }

     cargaArchivoProductos(){
          
          let i=0;

          if (datosArchivo.length > 0){
          
               datosArchivo.forEach(objeto => {

                    i++;
                    let producto = new ProductoTienda();
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto; 
                    
                    this.#cargaProductos.push(producto);
     
               });  

          };

          console.log("Total de productos cargados ==> " + i);

     }

     almacenaProductos(datosClase){
          //console.log(datosClase);
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          let datosJson = localStorage.getItem("productosTienda");
          //console.log(JSON.parse(datosJson));
     }

     datosProducto(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }

     verificarCodigoProducto(codigo){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length < 0){

               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };

          } else{
               sw = false;
          }
          return sw;
     }
     
     verificarNombreProducto(nombre){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
               } catch (e) {
                    if ( e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }

     mostrarProductos(datosProductos){
          let i=0;
          console.log ("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");

          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     | " + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }

}
//clase que gestiona cada uno de los productos que el cliente tiene en el carrito de compras
class CompraProductoTienda {
     
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;

     //metodo constructor
     constructor() {

          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;

     }

     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }

     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }

     datoCodigoProducto(datosProductos){

          let sw = true;
          let BreakException = {};
          let valor = "";
          do {
               do{
               valor = prompt("Digite Codigo Producto ==> ");
          }while(isNaN(valor)|| valor<1)
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor){
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              valor = objeto.getNombreProducto;
                              sw = false;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               if (sw){
                    console.log("Codigo no existe. ¡Verifique!");
               }
          } while (sw);

          return valor;
     }

     datoCantidadProducto (datosProductos){

          let sw = true;
          let valor = "";
          let BreakException = {};
          
          do {
               do{
               valor = Number(prompt("Digite Número de unidades ==>"));
          }while(isNaN( valor)|| valor<-1)
               if (valor <= this.getCantidadCompra){
                    this.setCantidadCompra = valor;
                    try {
                         datosProductos.forEach((objeto, index) => {
                              if (objeto.getNombreProducto === this.getProductoCompra){
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   throw BreakException;
                              };
                         });
                    } catch (e) {
                         if (e !== BreakException) throw e;
                    };
     
                    sw = false;
               }else{
                    console.log ("Cantidad digitada excede las existencias. ¡Verifique!");
               };
          } while (sw);

          return valor;
     }

     get getClienteCompra() {
          return this.#clienteCompra;
     }

     set setClienteCompra(value) {
          this.#clienteCompra = value;
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
//. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript.
class CarritoCompra{
     
     #productosCarrito;

     constructor(){

          this.#productosCarrito = [];

     }

     nuevoProducto(nombre, datosProductos){

          let producto = new CompraProductoTienda();

          producto.setClienteCompra = nombre;
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);
          //producto.setPrecioCompra = producto.datoPrecioCompra();
          this.#productosCarrito.push(producto);
     }

     mostrarCompra(carrito){

          let i=0;
          let compra = 0;

          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");

          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Valor Total de la Factura ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }

     get carritoCompra(){
          return this.#productosCarrito;
     }

     get numeroProductos(){
          return this.#productosCarrito.length;
     }
}

function setNombreCliente(){
     let nombre = prompt('Nombre del Cliente');
     nombre = nombre.toUpperCase();
     return nombre;
}

let sw = true;
let respuesta = true;
let nombre = '';

let productosTienda = new GestionarProductosTienda();

productosTienda.cargaArchivoProductos();

productosTienda.cargaManualProducto();

//console.log(productosTienda.getDatosProductosCargados());

productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());

let canasta = new CarritoCompra();

while (confirm('¿Existe un nuevo Cliente?')){

     do{
          nombre = setNombreCliente();
          if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };
     } while (sw);  


     do{
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());

     } while (confirm('¿Desea un nuevo producto?'));

     console.log(canasta.numeroProductos);
     console.log(canasta.carritoCompra);
     console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getClienteCompra);
     canasta.mostrarCompra(canasta.carritoCompra);
}