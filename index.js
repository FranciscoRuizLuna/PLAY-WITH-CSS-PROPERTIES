//Devuele una Nodelist con todos los elementos con la clase controls del tipo input que se almacena en esta variable
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
	//Esto es por los data-sizing en los inputs de HTML
	const suffix = this.dataset.sizing || '';

	/* Aquí, --${this.name} es el nombre de la variable CSS personalizada que se está estableciendo, y se compone de dos partes:

--: El prefijo -- indica que se trata de una variable CSS personalizada.
${this.name}: Esta parte del nombre de la variable se obtiene del valor del atributo name del elemento que ha cambiado 
(esto es this).
En la parte derecha de la línea, this.value es el valor actual del elemento que ha cambiado (por ejemplo, el valor de un control deslizante), 
y suffix es una cadena vacía o el valor del atributo data-sizing del elemento.

Por lo tanto, si el elemento tiene un atributo data-sizing con un valor de px, por ejemplo, entonces suffix contendrá la cadena 'px'. 
Esto se agrega al final del valor del elemento para que el resultado final sea una cadena que puede ser interpretada por CSS como un valor 
de longitud, como 50px o 2em.*/
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}
/*Estas dos líneas de código establecen un evento de escucha en
cada uno de los elementos de entrada en la página web, y se
ejecuta una función llamada handleUpdate cuando se produce un
cambio o movimiento del mouse sobre el elemento. 

inputs: es una lista de todos los elementos de entrada de la página, que se han seleccionado mediante 
el método document.querySelectorAll.

forEach: es un método que se llama en la lista inputs. Este método recorre cada uno de los elementos de 
la lista y ejecuta una función para cada uno de ellos.



addEventListener:es un método que se llama en cada elemento de entrada. Este método permite agregar un evento
de escucha a un elemento, para que se ejecute una función cuando se produce un determinado evento en el elemento.

En este caso, se están agregando dos eventos de escucha a cada elemento de entrada:

'change': Se produce cuando el valor del elemento de entrada cambia.
'mousemove': Se produce cuando el mouse se mueve sobre el elemento de entrada.
Cuando se produce cualquiera de estos eventos en un elemento de entrada, se llama a la función handleUpdate.
Esta función actualiza los valores de las variables CSS personalizadas en la página, lo que puede usarse para actualizar 
el estilo de la página en tiempo real.
	 
	 */
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));