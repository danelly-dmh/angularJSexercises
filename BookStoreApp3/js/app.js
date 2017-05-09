(function(){
	var app = angular.module('store',[]);
	var books = [
	{
		titulo:'El Juego de Ender',
		id: 1,
    autor: 'Orson Scott Card' ,
    editorial: 'Ediciones B / Zeta' ,
    descripcion: 'La Tierra está amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.',
    images: [
			{full: 'public/img/harry2.jpg',
			thumb: 'public/img/harry2.jpg'
		}
	],
	reviews: [
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
			]
	},
	{
		titulo:'Juego de Tronos',
		id: 2,
    autor: 'George R. R. Martin' ,
    editorial: 'Gigamesh' ,
    descripcion: 'Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos.',
    images: [
			{full: 'public/img/harry3.jpg',
			thumb: 'public/img/harry3.jpg'
		}
	],
	reviews: [
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
			]
	},
  {
		titulo:'I robot',
		id: 3,
    autor: 'Isaac Asimov' ,
    editorial: 'Edhasa' ,
    descripcion: 'Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de conducta humana. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los programas.',
    images: [
			{full: 'public/img/harry4.png',
			thumb: 'public/img/harry4.png'
		}
	],
	reviews: [
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
			]
		},
    {
  		titulo:'Harry Potter y El Caliz de Fuego',
  		id: 4,
      autor: 'Isaac Asimov' ,
      editorial: 'Edhasa' ,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      images: [
  			{full: 'public/img/harry5.jpg',
  			thumb: 'public/img/harry5.jpg'
  		}
  	],
  	reviews: [
  				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
  				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
  			]
  		}
	];
	
	app.controller('StoreController', function(){
		this.products = books;
	});


})();
