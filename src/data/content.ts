export const VIDEOS = [
	{
		id: 'teaser',
		title: 'Teaser Tráiler',
		base: 'galeria-ninjas-01',
		alt: 'Placeholder del teaser tráiler de Spider-Man: Brand New Day'
	},
	{
		id: 'trailer-oficial',
		title: 'Tráiler Oficial',
		base: 'galeria-reflection',
		alt: 'Placeholder del tráiler oficial de Spider-Man: Brand New Day'
	},
	{
		id: 'featurette',
		title: 'Featurette',
		base: 'galeria-ninjas-02',
		alt: 'Placeholder del featurette de Spider-Man: Brand New Day'
	}
] as const;

export const GALLERY_IMAGES = [
	{
		id: 'ninjas-01',
		base: 'galeria-ninjas-01',
		alt: 'Spider-Man salta sobre un grupo de ninjas vestidos de rojo en los tejados de Nueva York'
	},
	{
		id: 'reflection',
		base: 'galeria-reflection',
		alt: 'Primer plano de la máscara de Spider-Man con el skyline de Nueva York reflejado en sus ojos'
	},
	{
		id: 'ninjas-02',
		base: 'galeria-ninjas-02',
		alt: 'Spider-Man se lanza entre rascacielos al atardecer con el título Brand New Day'
	}
] as const;

export const SINOPSIS = `Tras el gran éxito global de Spider-Man: No Way Home, Spider-Man: Brand New Day marca una etapa completamente nueva para Peter Parker y Spider-Man. Han pasado cuatro años desde los acontecimientos de No Way Home, y Peter Parker ahora es un adulto que vive completamente solo, ha desaparecido voluntariamente de las vidas y recuerdos de quienes ama. Combatiendo el crimen en una Nueva York que ya no conoce su nombre, se ha dedicado por completo a proteger su ciudad—un Spider-Man a tiempo completo—, pero a medida que aumentan las exigencias sobre él, la presión desencadena una sorprendente evolución física que amenaza su existencia, al mismo tiempo que un extraño nuevo patrón de crímenes da lugar a una de las amenazas más poderosas a las que se ha enfrentado.`;

export const FICHA = [
	{ titulo: 'Directed by', valor: 'Destin Daniel Cretton' },
	{ titulo: 'Written by', valor: 'Destin Daniel Cretton' }
] as const;

export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w300';

export const CAST = [
	{ name: 'Tom Holland', role: 'Peter Parker / Spider-Man', profilePath: '/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg' },
	{ name: 'Zendaya', role: 'MJ', profilePath: '/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg' },
	{ name: 'Mark Ruffalo', role: 'Bruce Banner / Hulk', profilePath: '/5GilHMOt5PAQh6rlUKZzGmaKEI7.jpg' },
	{ name: 'Jon Bernthal', role: 'Frank Castle / Punisher', profilePath: '/o0t6EVkJOrFAjESDilZUlf46IbQ.jpg' },
	{ name: 'Jacob Batalon', role: 'Ned Leeds', profilePath: '/53YhaL4xw4Sb1ssoHkeSSBaO29c.jpg' },
	{ name: 'Sadie Sink', role: 'Jean Grey', profilePath: '/92FddzBfK50XOUbtwjqHPraoGHy.jpg' },
	{ name: 'Florence Pugh', role: 'Yelena Belova / Black Widow', profilePath: '/1Uvfh7xL4U2evkhs0M3C7BbBYFf.jpg' },
	{ name: 'Liza Colón-Zayas', role: 'Detective Jean DeWolff', profilePath: '/q2gHcef0wckji0AS8ZEO6cYx065.jpg' },
	{ name: 'Tramell Tillman', role: "William 'Bill' Metzger", profilePath: '/bEA15zMnkcXlRroYjKrFUWiiK7y.jpg' },
	{ name: 'Marisa Tomei', role: 'May Parker', profilePath: '/1cT8wWwGX5jEeGAgjydjb5EwnZF.jpg' },
	{ name: 'Naomi Watts', role: 'E.V. (voz)', profilePath: '/7ysvff7ZhW388SIh2YjQ0XIryOn.jpg' },
	{ name: 'Michael Mando', role: 'Mac Gargan / Scorpion', profilePath: '/gvM2wG66bjEpiirdeQdyG9EzUfv.jpg' }
] as const;

export const CREW = [
	{ name: 'Destin Daniel Cretton', role: 'Director', profilePath: '/s8uAUG9egZlRIU0PKNkTkIz9E6g.jpg' },
	{ name: 'Erik Sommers', role: 'Guionista', profilePath: '/fvg1OA7xdYu7z44HdY5IA9lSqYl.jpg' },
	{ name: 'Chris McKenna', role: 'Guionista', profilePath: '/2yzbdhnpLdJg8NIh4SWqy6wGbZV.jpg' },
	{ name: 'Kevin Feige', role: 'Productor', profilePath: '/vbCNOAGNqox21Q462rY4w2WL9Eo.jpg' },
	{ name: 'Amy Pascal', role: 'Productora', profilePath: '/texxoBV4naFHyuSii6jyxlfuEvK.jpg' },
	{ name: 'Avi Arad', role: 'Productor', profilePath: '/cxmqw0anGfxC7RwUNQj3EwhX9pP.jpg' },
	{ name: 'Brett Pawlak', role: 'Director de fotografía', profilePath: '/xniQZetW2xYTmI655h4HPAV6412.jpg' },
	{ name: 'Michael Giacchino', role: 'Compositor', profilePath: '/xgurVFMLVgtgz9f5bgrrCppm4xq.jpg' },
	{ name: 'Nat Sanders', role: 'Montador', profilePath: '/erZSVbLo8xLFjg6YEYeuyXxAPLr.jpg' },
	{ name: 'Charles Wood', role: 'Diseño de producción', profilePath: '/rBXvMNH2JYHqxeYgCidddrJpAlZ.jpg' },
	{ name: 'Sanja Milkovic Hays', role: 'Diseño de vestuario', profilePath: '/ystveLUUhvvKyH3M53WxCNNx2Ri.jpg' },
	{ name: 'Jerome Chen', role: 'Supervisor de efectos visuales', profilePath: '/5GxCJnnT90OYX5nKDBrsBVpDB0h.jpg' }
] as const;
