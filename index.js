//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022
//V0

var nombre = prompt ("escribe tu nombre")
alert ("Que compraras hoy "+nombre)
//La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

//La sentencia var declara una variable, opcionalmente inicializándola con un valor.
var myproducto={
    pre_camisa:1200,
    pre_pantalon:4000,
    pre_medias:6000,
}
do{
    var valor;
    do{
    producto=prompt('(1)camisa, (2)pantalon, (3)medias','');
    }while(isNaN(producto)||producto<=1)
    //el document.write funciona para escribir una cadena de texto dentro del hilo de un documento abierto por document.
    
    producto=parseInt(producto);
    //La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
    switch(producto){
    case 1:
        do{
    compra_cami= prompt ('cuantas camisas compras');
        }while(isNaN(compra_cami) || compra_cami<1);
    camisa=compra_cami*myproducto.pre_camisa
    break;
    case 2:
        do{
    compra_pan=prompt('cuantos pantalones compras');
        }while(isNaN(compra_pan) || compra_pan<1);
    pantalon=compra_pan*myproducto.pre_pantalon
    break;
    case 3:
        do{
    compra_med= prompt ('cuantas medias compras');
        }while(isNaN(compra_med) || compra_med<1);
    medias=compra_med*myproducto.pre_medias
    break;
    default:alert('digite un numero valio para poder comprar algo')
}   

//La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
    switch (producto) {
    case 1: 
    document.write('<br>');
    document.write('TIENDAS Carrito')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El valor de la camisa es: $1200')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El total de la  camisa es:',' ','$',camisa,' ')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    break;
    case 2: 
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('TIENDAS carrito')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El valor del pantalon es: $4000',' ')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El total del pantalon es:',' ','$',pantalon,' ')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    break;
    case 3: 
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('TIENDAS carrito')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El valor de las medias es: $4000',' ')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    document.write('El total de las medias es:',' ','$',medias,' ')
    document.write('<br>');
    document.write('---------------------------------------')
    document.write('<br>');
    break;
    default:document.write('ingrese el numero del producto Señor',' '+nombre);
    }
}
while(valid=confirm('¿quiere comprar algo mas?'))
alert('Tu recibo es este')

