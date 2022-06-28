//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022

//es una estructura de control de la mayoría de los lenguajes de programación estructurados cuyo propósito es ejecutar un bloque de código y repetir la ejecución mientras se cumpla cierta condición expresada en la cláusula while.
do{
    valid=confirm("la tabla por defecto es 5")
    var tabla_pre=(5)
    for (var tabla_i=1; tabla_i<11; tabla_i++){
        document.write(tabla_pre+"x" + tabla_i + "=" +(tabla_pre* tabla_i)+"<br>");
    }   
}
while(valid===false)
//write() Escribe una cadena de texto dentro del hilo de un document abierto por document
document.write("------------------------------"+"<br>")
    do{
        do{
    let i = prompt ("que tabla de multiplicar")
        var tabla=i
}while(isNaN(tabla)|| tabla <-1)
    for (var i=1; i<11; i++){
            document.write(tabla+"x" + i + "=" +(tabla* i)+"<br>");
        }   
    fin= confirm("desea otra tabla")
}while(fin===true)
