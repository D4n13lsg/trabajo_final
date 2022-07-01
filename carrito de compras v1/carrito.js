//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022
//V1
class alamcentienda{
    #codigoproducto;
    #nombreproducto;
    #almacenproducto;
    #precioproducto;

  costructor(){
    this.#codigoproducto='';
    this.#nombreproducto='';
    this.#almacenproducto=0;
    this.#precioproducto=0.0;
  }
    get getcodigoproducto(){
      return this.#codigoproducto;
    }
    set setcodigoproducto(value){
      this.#codigoproducto = value;
    }
    get getnombreproducto(){
      return this.#nombreproducto;
    }
    set setnombreproducto(value){
        this.#nombreproducto = value;
    }
    get getalmacenproducto(){
      return this.#almacenproducto;
    }
    set setalmacenproducto(value){
      this.#almacenproducto=value;
    }
    get getprecioproducto(){
      return this.#precioproducto;
    }
    set setprecioproducto(values){
      this.#precioproducto=values;
    }

}

    class carritoalmacen{

      #almacenproducto;

      constructor(){
        this.#almacenproducto = [];
      }
    getalmacenproductoscargados(){
        return this.#almacenproducto;
    }

    cargaalmacen(){
      let articulo="";
    
      while(confirm("Quiere digitar nuevos productos a la tienda")){
        let sw =true;
        let producto= new alamcentienda();

        do {
          do{
          articulo=this.datosproducto('digite el codigo del producto');
          }while(isNaN(articulo)||articulo<1)
          // sw=this.verificacodigoproductos(articulo);
        } while (this.verificacodigoproductos(articulo));

        producto.setcodigoproducto = articulo.toUpperCase();
        do {

          articulo=this.datosproducto('digite nombre del producto')
          //touppercase sirve para pasar el articulo a mayuscula
        } while (this.verificarnombreproducto(articulo.toUpperCase()));
        producto.setnombreproducto = articulo.toUpperCase();
        do{
        producto.setalmacenproducto=Number(this.datosproducto('digite cuantos productos va a ingresar'));
        }while(isNaN(producto.getalmacenproducto)|| producto.getalmacenproducto<1)
        do{
        producto.setprecioproducto= Number(this.datosproducto('digite el precio'));
      }while(isNaN(producto.getprecioproducto)|| producto.getprecioproducto<1)
      this.#almacenproducto.push(producto);
      }
    }

    datosproducto(mensaje){
      let valor=prompt(mensaje);
      return valor;
    }

  verificacodigoproductos(codigo){
    let sw =false;
    let breakexception ={};

      if(this.#almacenproducto.length<0){
        try{
          this.#almacenproducto.forEach(objeto=>{
            if(objeto.getcodigoproducto===codigo){
            sw=true;
            throw breakexception;
          };
          })
        }catch(e){
          if (e!== breakexception)throw e;
        };

      }else{
        sw=false;
      }
      return
  }
    verificarnombreproducto(nombre){
      let sw=false;
      let breakexception={};

      if (this.#almacenproducto.length>0){
        try {
          this.#almacenproducto.forEach(objeto=>{
            if(objeto.getnombreproducto===nombre){
              sw=true;
              throw breakexception;
            };
          })
        }catch (e){
          if(e!== breakexception)throw e;
        };
      }else{
        sw=false;
      }
    }
    mostrardatosalmacenados(datosproductos){
      let i=0
      console.log ("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
      console.log ('CODIGO'+"| PRODUCTO | INVENTARIO | P.V.P. |");

          datosproductos.forEach(producto=>{
          //tofixed sirve para pasar un cadena que no usa notacion exponencial y tiene exactamente degitos despues del decimal
          console.log('|'+producto.getcodigoproducto+'|'+producto.getnombreproducto+"|"+producto.getalmacenproducto+'|'+(producto.getprecioproducto)+'|')
      });
    console.log('');
  }
}
// segunda parte
class compratienda{
  #clientecompra;
  #productocompra;
  #cantidadcompra;
  #preciocompra;

    constructor(){
      this.#clientecompra='';
      this.#productocompra='';
      this.#cantidadcompra=0;
      this.#preciocompra=0.0;
    }

    calculavalorcompra(){
      return this.#cantidadcompra*this.#preciocompra;
    }
    datoscompra(mensaje){
      let valor=prompt(mensaje);
      return valor;
    }

    datocodigoproducto(datosproductos){
      let sw=true;
      let breakexception ={};
      let valor ="";
    do{
      valor = (prompt('digite codigo del producto'));
        try {
          datosproductos.forEach((objeto, index) => {
            if (objeto.getcodigoproducto === valor){
              this.setcantidadcompra = objeto.getalmacenproducto;
              this.setpreciocompra = objeto.getprecioproducto;
              valor = objeto.getnombreproducto;
              sw = false;
              throw breakexception;
         };
      });
        } catch (e) {
          if (e !== breakexception) throw e;
        };
        if (sw){
          console.log("Codigo no existe. ¡Verifique!");
     }
      }while(sw);
      return valor;
  } 
  datocantidadproducto(datosproductos){
    let sw = true;
          let valor = "";
          let breakexception = {};
          do {
               valor = Number(prompt("Digite Número de unidades ==>"));  
               if (valor <= this.getcantidadcompra){
                    this.setcantidadcompra = valor;
                    try {
                         datosproductos.forEach((objeto, index) => {
                              if (objeto.getnombreproducto === this.getproductocompra){
                                   objeto.setalmacenproducto = objeto.getalmacenproducto - this.getcantidadcompra;
                                   throw breakexception;
                              };
                         });
                    } catch (e) {
                         if (e !== breakexception) throw e;
                    };
                    sw = false;
               }else{
                    console.log ("Cantidad digitada excede las existencias. ¡Verifique!");
               };
          } while (sw);
          return valor;
     }
    
  
    get getclientecompra(){
      return this.#clientecompra;
    }
    set setclientecompra(value){
      this.#clientecompra=value;
    }
    get getproductocompra(){
      return this.#productocompra;
    }
    set setproductocompra(value){
      this.#productocompra=value
    }
    get getcantidadcompra(){
      return this.#cantidadcompra;
    }
    set setcantidadcompra(value){
      this.#cantidadcompra=value
    }
    get getpreciocompra(){
      return this.#preciocompra
    }
    set setpreciocompra(value){
      this.#preciocompra=value
    }
  }
class compracarrito{
  #productocarrito;
  constructor(){
    this.#productocarrito=[]

  }
  nuevoproducto (nombre,datosproductos){
    let producto = new compratienda();

    producto.setclientecompra = nombre;
    producto.setproductocompra = producto.datocodigoproducto(datosproductos);
    producto.setcantidadcompra= producto.datocantidadproducto(datosproductos);
    this.#productocarrito.push(producto);
  }

  mostrarcarrito(carrito){
    let i=0;
    let compra = 0;

        console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
        console.log (" |      PRODUCTO     |   CANTIDAD  |   SUBTOTAL   |");

        carrito.forEach(objeto=>{
          compra+= objeto.calculavalorcompra();
          console.log('|'+objeto.getproductocompra+'|'+objeto.getcantidadcompra+'|'+objeto.getpreciocompra);
        });
        console.log('')
        console.log('el total a pagar es',(compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
        console.log('gracias por su compra')
  }
  get carritocompra(){
    return this.#productocarrito
  }
  get numeroproductos(){
    return this.#productocarrito.length;
  }
}

function setNombreCliente(){
  let nombre=validdato("digite su nombre")
  function validdato(texto){
       do{
       let nombre=prompt(texto);
       if(nombre !=="" &&nombre !==" " && !(!/^[a-z-ñA-Z-Ñ ]*$/g.test(nombre)))
       return nombre;
       }while(true);
  }
return nombre;  
}

let sw=true;

let nombre ='';
let productotienda = new carritoalmacen();

productotienda.cargaalmacen();

let canasta= new compracarrito

while (confirm('existe un nuevo cliente')){
  do{
    nombre=setNombreCliente();
    if (nombre === ''){
        sw=true;
    }else{
        sw=false
    };
  }while(sw)
  do{ 
    productotienda.mostrardatosalmacenados(productotienda.getalmacenproductoscargados());
    canasta.nuevoproducto(nombre,productotienda.getalmacenproductoscargados());
  }while(confirm('desea nuevo producto'));
  console.log(canasta.numeroproductos);
  console.log(canasta.carritocompra);
  console.log('nombre del cliente'+ canasta.carritocompra[0].getclientecompra);
  canasta.mostrarcarrito(canasta.carritocompra)
}
