//NOMBRE:Daniel felipe sanchez guevara
//ultima modificacion 22/06/2022

//multiplicacion

//es una estructura de control de la mayoría de los lenguajes de programación estructurados cuyo propósito es ejecutar un bloque de código y repetir la ejecución mientras se cumpla cierta condición expresada en la cláusula while.
var valid,num,i;
do {
    do {
//se guarda multi para que quede como una variable
        multi='tabla de multiplicar';
        num=prompt('digite tabla')
        if(num==""){
            num=1;
        }
    } while (isNaN(num)||num<1);
//for se utiliza para multiplicar
    for(i=1; i<=10; i++){
    multi=multi+'\n'+(num+' x '+i+' = '+num*i)
    }
    alert(multi)
    dato=confirm('desea otra tabla')
} while (dato===true);
