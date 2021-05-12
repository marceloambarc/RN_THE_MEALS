import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italiana', '#f5428d'),
  new Category('c2', 'Rápida e Fácil', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'Alemã', '#f5d142'),
  new Category('c5', 'Light', '#368dff'),
  new Category('c6', 'Exoticas', '#41d95d'),
  new Category('c7', 'Café da Manhã', '#9eecff'),
  new Category('c8', 'Asiática', '#b9ffb0'),
  new Category('c9', 'Francesa', '#ffc7ff'),
  new Category('c10', 'Verão', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Espaguete com Molho de Tomate',
    'acessível',
    'simples',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomates',
      '1 Colher de Sopa de Azeite',
      '1 Cebola',
      '250g Espaguete',
      'Pimentas',
      'Queijo (opcional)'
    ],
    [
      'Corte os tomates e a cebola em pequenos pedaços.',
      'Ferva um pouco de água - adicione sal quando ferver.',
      'Coloque o espaguete na água fervente - deve ser feito em cerca de 10 a 12 minutos.',
      'Enquanto isso, aqueça um pouco de azeite e adicione a cebola cortada.',
      'Após 2 minutos, adicione os pedaços de tomate, sal, pimenta e outras especiarias.',
      'O molho estará pronto assim que o espaguete estiver.',
      'Sinta-se à vontade para adicionar um pouco de queijo em cima do prato acabado.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Torrada Havaiana',
    'acessível',
    'simples',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Fatia de Pão Branco',
      '1 Fatia de Presunto',
      '1 Fatia de Abacaxi',
      '1-2 Fatias de Queijo',
      'Manteiga'
    ],
    [
      'Passe manteiga em um lado do pão branco',
      'Camada de presunto, o abacaxi e o queijo no pão branco',
      'Asse a torrada por cerca de 10 minutos no forno a 200 ° C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Hambúrger Clássico',
    'caro',
    'simples',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Corte de Gado',
      '1 Tomate',
      '1 Pepino',
      '1 Cebola',
      'Ketchup',
      '2 Pães de Hambúrguer'
    ],
    [
      'Forme 2 hambúrgueres',
      'Frite os hambúrgueres para cozinhar 4 minutos de cada lado ',
      'Frite rapidamente os pães para cozinhar 1 minuto de cada lado ',
      'Pincele os Pãezinhos com ketchup',
      'Sirva o hambúrguer com tomate, pepino e cebola'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Schnitzel de Viena',
    'luxuoso',
    'desafiador',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Costeletas de Vitela',
      '4 Ovos',
      '200g Migalhas de pão',
      '100g Farinha',
      '300ml Manteiga',
      '100g Óleo Vegetal',
      'Sal',
      'Fatias de Limão'
    ],
    [
      'Amaciar a vitela para cerca de 2–4 mm, e sal em ambos os lados.',
      'Em um prato raso, mexa os ovos brevemente com um garfo.',
      'Cubra levemente as costeletas com farinha, mergulhe no ovo e, por fim, cubra com a farinha de rosca.',
      'Aqueça a manteiga e o óleo em uma panela grande (deixe a gordura ficar bem quente) e frite os schnitzels até dourar de ambos os lados.',
      'Certifique-se de jogar a panela regularmente para que os schnitzels fiquem rodeados de óleo e o farelo se torne fofo .',
      'Retire e escorra em papel de cozinha. Frite a salsa no óleo restante e escorra. ',
      'Coloque os schnitzels em um prato aquecido e sirva guarnecido com salsa e rodelas de limão.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salada com Salmão Defumado',
    'luxuoso',
    'simples',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Rúcula',
      "Alface-de-cordeiro",
      'Salsa',
      'Funcho',
      '200g Salmão Defumado',
      'Mostarda',
      'Vinagre Balsâmico',
      'Azeite de Oliva',
      'Sal e Pimenta'
    ],
    [
      'Lave e corte salada e ervas',
      'Corte o salmão em cubos',
      'Transforme a mostarda, o vinagre e o azeite em uma pasta',
      'Prepare a salada',
      'Adicione cubos de salmão e molho'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicioso Mousse De Laranja',
    'acessível',
    'difícil',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Gelatinas em Folhas',
      '150ml Suco de Laranja',
      '80g Açúcar',
      '300g Yogurt',
      '200g Creme',
      'Casca de Laranja'
    ],
    [
      'Dissolva a gelatina na panela',
      'Adicione suco de laranja e açúcar',
      'Tire a panela do fogão',
      'Adicione 2 colheres de sopa de iogurte',
      'Misture a gelatina sob o iogurte restante',
      'Esfrie tudo na geladeira',
      'Bata o creme e levante-o sob a massa de laranja',
      'Resfrie novamente por pelo menos 4 horas',
      'Sirva com casca de laranja'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Panquecas',
    'acessível',
    'simples',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Xícaras de farinha de trigo',
      '3 1/2 Colher de chá de fermento em pó',
      '1 Colher de chá de sal',
      '1 Colher de chá de Açúcar branco',
      '1 1/4 copos de Leite',
      '1 Ovo',
      '3 Colheres de sopa de manteiga derretida'
    ],
    [
      'Em uma tigela grande, peneire a farinha, o fermento, o sal e o açúcar.',
      'Faça um buraco no centro e deite o leite, o ovo e a manteiga derretida; misture até ficar homogêneo. ',
      'Aqueça uma frigideira ou frigideira levemente untada com óleo em fogo médio-alto.',
      'Despeje ou despeje a massa na frigideira, usando aproximadamente 1/4 de xícara para cada panqueca. Marrom em ambos os lados e servir quente.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Chicken Curry Indiano Cremoso',
    'caro',
    'desafiador',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Peitos de Frango',
      '1 cebola',
      '2 dentes de alho',
      '1 Pedaço de Gengibre',
      '4 colheres de sopa de amêndoas',
      '1 colher de chá de pimenta caiena',
      '500ml de leite de coco'
    ],
    [
      'Fatiar e fritar o peito de frango',
      'Transforme a cebola, o alho e o gengibre na pasta e refogue tudo',
      'Adicione especiarias e frite',
      'Adicione o peito de frango + 250ml de água e cozinhe tudo por 10 minutos',
      'Adicionar leite de coco',
      'Sirva com arroz'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'acessível',
    'difícil',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 colher de chá de manteiga derretida',
      '2 colheres de sopa de açúcar branco',
      '2 onças 70% chocolate amargo, quebrado em pedaços',
      '1 colher de sopa de manteiga',
      '1 colher de sopa de farinha multiuso',
      '4 1/3 colheres de sopa de leite frio',
      '1 pitada de sal',
      '1 Pinch Cayenne Pepper',
      '1 Gema de Ovo Grande',
      '2 grandes claras de ovo',
      '1 pitada de creme de tártaro',
      '1 colher de sopa de açúcar branco'
    ],
    [
      'Pré-aqueça o forno a 190 ° C. Forre uma assadeira com bordas com papel manteiga. ',
      'Pincele o fundo e as laterais de 2 ramequins levemente com 1 colher de chá de manteiga derretida; cubra a parte inferior e as laterais até a borda. ',
      'Adicione 1 colher de sopa de açúcar branco aos ramequins. Gire os ramequins até que o açúcar cubra todas as superfícies. ',
      'Coloque os pedaços de chocolate em uma tigela de metal.',
      'Coloque a tigela sobre uma panela com cerca de 3 xícaras de água quente em fogo baixo.',
      'Derreta 1 colher de sopa de manteiga em uma frigideira em fogo médio. Polvilhe com farinha. Bata até que a farinha esteja incorporada na manteiga e a mistura engrosse. ',
      'Bata no leite frio até a mistura ficar lisa e espessa. Transfira a mistura para uma tigela com o chocolate derretido. ',
      'Adicione sal e pimenta-de-caiena. Misture bem. Adicione a gema de ovo e misture bem. ',
      'Deixe a tigela acima da água quente (não fervendo) para manter o chocolate quente enquanto bate as claras em neve.',
      'Coloque 2 claras de ovo em uma tigela; adicione creme de tártaro. Bata até a mistura começar a engrossar e um fiozinho do batedor ficar na superfície cerca de 1 segundo antes de desaparecer na mistura. ',
      'Adicione 1/3 do açúcar e bata. Bata um pouco mais de açúcar por cerca de 15 segundos.',
      'misture o resto do açúcar. Continue mexendo até a mistura ficar tão espessa quanto creme de barbear e manter picos suaves, 3 a 5 minutos. ',
      'Transfira um pouco menos da metade das claras para o chocolate.',
      'Misture até que as claras estejam completamente incorporadas ao chocolate.',
      'Adicione o resto das claras; Dobre suavemente no chocolate com uma espátula, levantando do fundo e dobrando. ',
      'Pare de misturar depois que a clara do ovo desaparecer. Divida a mistura entre 2 ramequins preparados. Coloque os ramequins na assadeira preparada. ',
      'Asse em forno pré-aquecido até que os restos estejam estufados e tenham subido acima das bordas, 12 a 15 minutos.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Salada de Espargos com Tomate Cereja',
    'luxuoso',
    'simples',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'Espargos brancos e verdes',
      '30g Pinhões',
      '300g de tomate cereja',
      'Salada',
      'Sal, Pimenta e Azeite'
    ],
    [
      'Lave, descasque e corte os aspargos',
      'Cozinhe em água salgada',
      'Salgue e apimente os aspargos',
      'Asse os pinhões',
      'Corte os tomates pela metade',
      'Misture com espargos, salada e molho',
      'Sirva com Baguette'
    ],
    true,
    true,
    true,
    true
  )
];
