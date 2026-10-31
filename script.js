// ============================================
// CHEF EM CASA — 84 RECEITAS E CARROSSEL 2x2
// ============================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}

// ============================================
// BANCO COM 84 RECEITAS
// ============================================

const recipes = {
  arroz: {
    title: "Arroz soltinho",
    category: "basicas almoco",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Arroz branco soltinho para acompanhar suas refeições.",
    seasoning: "Alho e cebola formam uma base saborosa. Uma folha de louro pode trazer um aroma especial.",
    ingredients: ["1 xícara de arroz", "2 xícaras de água", "2 dentes de alho", "1/2 cebola", "1 colher de óleo", "Sal a gosto"],
    steps: [
      ["Separe os ingredientes", "Lave o arroz, se desejar, e deixe escorrer. Separe alho, cebola e os demais ingredientes.", "Sem fogo", 120, "Organize tudo antes de começar."],
      ["Refogue os temperos", "Aqueça o óleo, refogue a cebola e acrescente o alho por alguns segundos.", "Fogo médio", 120, "Não deixe o alho queimar."],
      ["Acrescente o arroz", "Coloque o arroz e misture delicadamente para envolver os grãos no refogado.", "Fogo médio", 60, "Mexa por aproximadamente um minuto."],
      ["Cozinhe", "Adicione água e sal. Quando ferver, reduza o fogo, tampe parcialmente e cozinhe até ficar macio.", "Fogo baixo", 600, "O tempo varia conforme o arroz e a panela."],
      ["Descanse e sirva", "Desligue, tampe por alguns minutos e solte os grãos com um garfo.", "Fogo desligado", 300, "Deixe o arroz descansar antes de servir."]
    ]
  },

  feijao: {
    title: "Feijão caseiro",
    category: "basicas almoco",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Feijão bem temperado para acompanhar o almoço.",
    seasoning: "Alho, cebola, louro e cheiro-verde combinam muito bem com feijão.",
    ingredients: ["2 xícaras de feijão cozido", "2 dentes de alho", "1/2 cebola", "1 colher de óleo", "1 folha de louro", "Sal a gosto"],
    steps: [
      ["Separe os ingredientes", "Utilize feijão já cozido e separe os temperos. Se começar com grãos crus, cozinhe-os antes, seguindo as orientações da panela.", "Sem fogo", 120, "O tempo do feijão cru varia conforme o tipo e a panela."],
      ["Faça o refogado", "Aqueça o óleo, refogue a cebola e depois acrescente o alho.", "Fogo médio", 120, "Evite escurecer demais o alho."],
      ["Acrescente o feijão", "Coloque o feijão cozido e parte do caldo no refogado.", "Fogo médio", 120, "Misture delicadamente."],
      ["Tempere e apure", "Adicione louro e sal. Deixe ferver suavemente para misturar os sabores.", "Fogo baixo", 600, "Mexa de vez em quando."],
      ["Finalize", "Ajuste o sal, retire o louro e finalize com cheiro-verde, se desejar.", "Fogo desligado", 60, "Sirva quente."]
    ]
  },

  frango: {
    title: "Frango douradinho",
    category: "almoco rapidas",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    description: "Filés de frango bem temperados e dourados.",
    seasoning: "Alho, limão, páprica e pimenta-do-reino formam uma combinação saborosa.",
    ingredients: ["500 g de peito de frango em filés", "2 dentes de alho", "Suco de 1/2 limão", "Páprica", "Óleo", "Sal e pimenta"],
    steps: [
      ["Prepare os ingredientes", "Mantenha o frango refrigerado até o preparo. Separe os filés e os temperos. Não lave o frango cru.", "Sem fogo", 120, "Use utensílios separados para alimentos crus e prontos."],
      ["Tempere", "Misture alho, limão, páprica, sal e pimenta nos filés.", "Sem fogo", 180, "Lave as mãos e higienize os utensílios após manipular frango cru."],
      ["Aqueça a frigideira", "Coloque um pouco de óleo e aqueça sem deixar soltar fumaça.", "Fogo médio", 60, "Não superaqueça o óleo."],
      ["Doure os filés", "Coloque os filés sem amontoar e doure os dois lados.", "Fogo médio", 480, "O tempo depende da espessura dos filés."],
      ["Confira o cozimento", "Continue cozinhando até o centro da parte mais grossa atingir 74 °C, medidos com termômetro culinário.", "Médio ou médio-baixo", 180, "A cor externa não garante que o frango esteja seguro."]
    ]
  },

  macarrao: {
    title: "Macarrão ao molho",
    category: "massas rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Macarrão prático com molho de tomate.",
    seasoning: "Manjericão, orégano e alho deixam o molho mais aromático.",
    ingredients: ["250 g de macarrão", "Molho de tomate", "2 dentes de alho", "1/2 cebola", "Azeite", "Sal e orégano"],
    steps: [
      ["Separe os ingredientes", "Organize a massa, o molho, o alho, a cebola e os temperos.", "Sem fogo", 60, "Leia o tempo indicado na embalagem."],
      ["Ferva a água", "Coloque água em uma panela e aqueça até levantar fervura.", "Fogo alto", 300, "Use uma panela com espaço para a massa."],
      ["Cozinhe o macarrão", "Adicione sal e a massa. Mexa no início e cozinhe conforme a embalagem.", "Médio-alto", 480, "Experimente para conferir a textura."],
      ["Prepare o molho", "Refogue cebola e alho no azeite. Acrescente o molho de tomate e os temperos.", "Fogo médio", 240, "Deixe o molho apurar suavemente."],
      ["Misture e sirva", "Escorra a massa com cuidado, misture ao molho e finalize com ervas.", "Fogo baixo", 60, "Sirva logo após o preparo."]
    ]
  },

  omelete: {
    title: "Omelete simples",
    category: "basicas rapidas",
    time: "10 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    description: "Omelete macia e prática para qualquer refeição.",
    seasoning: "Cheiro-verde, pimenta-do-reino e uma pitada de páprica são boas opções.",
    ingredients: ["2 ovos", "1 colher de leite", "Sal", "Pimenta", "Cheiro-verde", "Um fio de óleo"],
    steps: [
      ["Quebre os ovos", "Quebre os ovos em uma tigela e confira se não há cascas.", "Sem fogo", 60, "Use uma tigela limpa."],
      ["Bata a mistura", "Bata os ovos com leite, sal, pimenta e cheiro-verde.", "Sem fogo", 60, "Misture até ficar uniforme."],
      ["Aqueça a frigideira", "Unte levemente uma frigideira antiaderente.", "Fogo baixo", 60, "O fogo baixo ajuda a cozinhar sem queimar."],
      ["Cozinhe a omelete", "Despeje os ovos e cozinhe até firmar. Vire com cuidado ou dobre ao meio.", "Fogo baixo", 180, "Cozinhe completamente os ovos."],
      ["Sirva", "Retire quando estiver firme e sirva imediatamente.", "Fogo desligado", 30, "Pode acrescentar queijo ou legumes."]
    ]
  },

  panqueca: {
    title: "Panqueca caseira",
    category: "basicas almoco",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    description: "Massa leve que pode receber recheios doces ou salgados.",
    seasoning: "Para a versão salgada, experimente orégano e uma pitada de pimenta.",
    ingredients: ["1 xícara de leite", "1 xícara de farinha", "1 ovo", "1 pitada de sal", "1 colher de óleo"],
    steps: [
      ["Separe os ingredientes", "Meça todos os ingredientes e coloque-os próximos ao liquidificador.", "Sem fogo", 60, "Medidas ajudam a manter a massa equilibrada."],
      ["Bata a massa", "Bata leite, farinha, ovo, sal e óleo até ficar homogêneo.", "Sem fogo", 60, "Se necessário, raspe as laterais do recipiente."],
      ["Aqueça a frigideira", "Unte uma frigideira e aqueça por alguns instantes.", "Fogo médio-baixo", 60, "Evite excesso de óleo."],
      ["Prepare os discos", "Coloque uma porção de massa, espalhe e doure dos dois lados.", "Fogo médio-baixo", 180, "Vire quando a superfície começar a firmar."],
      ["Recheie e sirva", "Recheie com a opção escolhida e sirva.", "Fogo desligado", 120, "Frango, queijo e legumes são boas opções."]
    ]
  },

  pure: {
    title: "Purê de batata",
    category: "basicas almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Purê cremoso para acompanhar carnes e legumes.",
    seasoning: "Noz-moscada e uma pequena quantidade de manteiga dão um toque especial.",
    ingredients: ["4 batatas", "1/2 xícara de leite", "1 colher de manteiga", "Sal", "Pimenta"],
    steps: [
      ["Prepare as batatas", "Lave, descasque e corte as batatas em pedaços semelhantes.", "Sem fogo", 180, "Pedaços parecidos cozinham por igual."],
      ["Cozinhe", "Coloque em água e cozinhe até ficarem macias.", "Fogo médio", 900, "Confira a maciez com um garfo."],
      ["Amasse", "Escorra com cuidado e amasse as batatas ainda quentes.", "Fogo desligado", 120, "Retire bem o excesso de água."],
      ["Misture", "Acrescente manteiga e leite aos poucos, mexendo até ficar cremoso.", "Fogo baixo", 120, "Ajuste o leite conforme a textura desejada."],
      ["Tempere", "Acerte o sal e a pimenta e sirva.", "Fogo desligado", 30, "Noz-moscada é opcional."]
    ]
  },

  carne: {
    title: "Carne de panela",
    category: "almoco",
    time: "60 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Carne cozida lentamente com temperos e legumes.",
    seasoning: "Alho, cebola, louro e cheiro-verde combinam com carne de panela.",
    ingredients: ["600 g de carne em cubos", "1 cebola", "2 dentes de alho", "1 tomate", "1 cenoura", "Sal e óleo"],
    steps: [
      ["Organize os ingredientes", "Corte a carne e os vegetais em pedaços. Separe os temperos.", "Sem fogo", 180, "Mantenha a carne refrigerada até o preparo."],
      ["Doure a carne", "Aqueça o óleo e doure a carne em porções.", "Fogo médio-alto", 300, "Não encha demais a panela."],
      ["Refogue", "Acrescente cebola, alho e tomate e mexa até formar uma base aromática.", "Fogo médio", 180, "Raspe o fundo para soltar os sabores."],
      ["Cozinhe", "Adicione líquido suficiente e cozinhe até a carne ficar macia. Se usar pressão, siga o manual do fabricante.", "Baixo ou pressão conforme equipamento", 1800, "Nunca abra a panela de pressão enquanto estiver pressurizada."],
      ["Finalize", "Acrescente cenoura no momento adequado, confira o cozimento e ajuste o tempero.", "Fogo baixo", 600, "Sirva quando os ingredientes estiverem macios."]
    ]
  },

  salada: {
    title: "Salada colorida",
    category: "rapidas basicas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Uma combinação fresca e colorida de vegetais.",
    seasoning: "Limão, azeite e ervas formam um molho simples.",
    ingredients: ["Alface", "2 tomates", "1 cenoura", "Pepino", "Limão", "Azeite e sal"],
    steps: [
      ["Higienize os vegetais", "Lave e higienize os vegetais conforme as orientações sanitárias para alimentos.", "Sem fogo", 300, "Use água potável e produtos adequados quando necessário."],
      ["Prepare os cortes", "Corte tomate e pepino e rale a cenoura.", "Sem fogo", 180, "Use uma tábua limpa."],
      ["Monte a salada", "Distribua as folhas e os demais vegetais em uma travessa.", "Sem fogo", 60, "Seque as folhas para melhorar a textura."],
      ["Prepare o molho", "Misture limão, azeite e sal em um recipiente pequeno.", "Sem fogo", 60, "Ajuste a acidez ao seu gosto."],
      ["Finalize", "Regue a salada pouco antes de servir.", "Sem fogo", 30, "Assim as folhas permanecem mais crocantes."]
    ]
  },

  legumes: {
    title: "Legumes refogados",
    category: "basicas rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    description: "Legumes coloridos preparados na frigideira.",
    seasoning: "Alho, azeite, ervas e pimenta valorizam os legumes.",
    ingredients: ["1 cenoura", "1 abobrinha", "1/2 brócolis", "2 dentes de alho", "Azeite", "Sal"],
    steps: [
      ["Higienize e corte", "Lave os vegetais e corte em pedaços de tamanho semelhante.", "Sem fogo", 240, "Cortes uniformes ajudam no cozimento."],
      ["Aqueça a frigideira", "Coloque azeite e alho em uma frigideira.", "Fogo médio", 60, "Não deixe o alho queimar."],
      ["Comece pelos mais firmes", "Adicione cenoura e brócolis e mexa.", "Fogo médio", 240, "Legumes mais duros precisam de mais tempo."],
      ["Adicione os demais", "Acrescente a abobrinha e cozinhe até atingir a textura desejada.", "Fogo médio", 180, "Evite cozinhar demais."],
      ["Tempere e sirva", "Ajuste o sal e finalize com ervas.", "Fogo desligado", 30, "Sirva como acompanhamento."]
    ]
  },

  sopa: {
    title: "Sopa de legumes",
    category: "almoco basicas",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
    description: "Sopa reconfortante com legumes e caldo saboroso.",
    seasoning: "Alho, cebola, louro e cheiro-verde são ótimas escolhas.",
    ingredients: ["2 batatas", "1 cenoura", "1 chuchu", "1/2 cebola", "Alho", "Água e sal"],
    steps: [
      ["Prepare os vegetais", "Lave, descasque quando necessário e corte os legumes.", "Sem fogo", 240, "Mantenha os cortes semelhantes."],
      ["Refogue os temperos", "Aqueça um fio de óleo e refogue cebola e alho.", "Fogo médio", 120, "Mexa para não queimar."],
      ["Adicione os legumes", "Coloque os legumes e misture no refogado.", "Fogo médio", 120, "Comece pelos pedaços mais firmes."],
      ["Cozinhe a sopa", "Cubra com água e cozinhe até os legumes ficarem macios.", "Fogo baixo", 1200, "Confira o nível de líquido durante o preparo."],
      ["Finalize", "Ajuste o sal e acrescente cheiro-verde.", "Fogo desligado", 60, "Sirva quente."]
    ]
  },

  farofa: {
    title: "Farofa simples",
    category: "basicas almoco",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Farofa douradinha para acompanhar o almoço.",
    seasoning: "Cebola, alho e cheiro-verde deixam a farofa aromática.",
    ingredients: ["2 xícaras de farinha de mandioca", "2 colheres de manteiga", "1/2 cebola", "Alho", "Sal", "Cheiro-verde"],
    steps: [
      ["Separe os ingredientes", "Pique cebola, alho e cheiro-verde.", "Sem fogo", 120, "Deixe tudo pronto antes de começar."],
      ["Derreta a manteiga", "Coloque a manteiga em uma frigideira.", "Fogo baixo", 60, "Evite aquecer demais."],
      ["Refogue", "Acrescente cebola e alho e mexa até ficarem macios.", "Fogo baixo", 120, "Não deixe o alho escurecer."],
      ["Adicione a farinha", "Coloque a farinha aos poucos, mexendo até dourar levemente.", "Fogo baixo", 180, "Mexa para não queimar."],
      ["Finalize", "Ajuste o sal e misture cheiro-verde.", "Fogo desligado", 30, "Sirva como acompanhamento."]
    ]
  },

  batata: {
    title: "Batata rústica",
    category: "rapidas",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=85",
    description: "Batatas assadas com casquinha dourada e temperos.",
    seasoning: "Alecrim, páprica, alho e azeite combinam muito bem.",
    ingredients: ["4 batatas", "Azeite", "Páprica", "Alecrim", "Sal", "Pimenta"],
    steps: [
      ["Aqueça o forno", "Preaqueça o forno e prepare uma assadeira.", "Forno", 600, "Siga a temperatura indicada na sua receita e no manual do forno."],
      ["Prepare as batatas", "Lave e corte as batatas em gomos semelhantes.", "Sem fogo", 180, "Você pode manter a casca após higienizar bem."],
      ["Tempere", "Misture batatas, azeite, páprica, alecrim, sal e pimenta.", "Sem fogo", 120, "Distribua o tempero por todos os pedaços."],
      ["Asse", "Espalhe na assadeira sem amontoar e asse até ficarem macias e douradas.", "Forno quente", 1500, "O tempo varia conforme o tamanho dos pedaços."],
      ["Sirva", "Retire com cuidado e sirva quente.", "Forno desligado", 60, "Use luvas térmicas."]
    ]
  },

  bolo: {
    title: "Bolo de cenoura",
    category: "sobremesas",
    time: "50 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
    description: "Bolo caseiro de cenoura para o café da tarde.",
    seasoning: "Uma cobertura de chocolate é uma combinação clássica.",
    ingredients: ["2 cenouras", "3 ovos", "1 xícara de óleo", "2 xícaras de açúcar", "2 xícaras de farinha", "Fermento"],
    steps: [
      ["Prepare a forma", "Unte e enfarinhe uma forma. Preaqueça o forno conforme sua receita.", "Forno", 600, "Deixe a forma pronta antes de bater a massa."],
      ["Bata os ingredientes líquidos", "Bata cenoura, ovos e óleo até obter uma mistura uniforme.", "Sem fogo", 180, "Corte a cenoura em pedaços menores."],
      ["Misture os secos", "Acrescente açúcar e farinha e misture até incorporar.", "Sem fogo", 120, "Não bata excessivamente depois de adicionar a farinha."],
      ["Adicione fermento", "Misture o fermento delicadamente e despeje na forma.", "Sem fogo", 60, "Distribua a massa de maneira uniforme."],
      ["Asse e confira", "Asse até crescer e ficar cozido no centro. Faça o teste do palito.", "Forno", 1800, "O tempo depende do forno e do tamanho da forma."]
    ]
  },

  brigadeiro: {
    title: "Brigadeiro tradicional",
    category: "sobremesas rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1548907040-4d42bfc1c20b?auto=format&fit=crop&w=900&q=85",
    description: "Doce brasileiro de chocolate, perfeito para compartilhar.",
    seasoning: "Granulado de chocolate é a finalização tradicional.",
    ingredients: ["1 lata de leite condensado", "2 colheres de chocolate em pó", "1 colher de manteiga", "Granulado"],
    steps: [
      ["Separe os ingredientes", "Meça os ingredientes e deixe uma panela de fundo grosso pronta.", "Sem fogo", 60, "Use chocolate em pó de sua preferência."],
      ["Misture na panela", "Coloque leite condensado, chocolate e manteiga e misture antes de aquecer.", "Sem fogo", 60, "Misture para desfazer os gruminhos."],
      ["Cozinhe", "Leve ao fogo baixo, mexendo continuamente e raspando o fundo e as laterais.", "Fogo baixo", 600, "A mistura pode queimar se ficar sem mexer."],
      ["Confira o ponto", "Quando engrossar e começar a desgrudar do fundo, desligue.", "Fogo baixo", 120, "Tenha cuidado com a mistura quente."],
      ["Finalize", "Espere esfriar antes de enrolar e passar no granulado.", "Fogo desligado", 900, "A mistura quente pode causar queimaduras."]
    ]
  },

  pudim: {
    title: "Pudim de leite",
    category: "sobremesas",
    time: "70 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    description: "Sobremesa cremosa com calda de caramelo.",
    seasoning: "Baunilha pode acrescentar aroma delicado ao pudim.",
    ingredients: ["1 lata de leite condensado", "2 medidas de leite", "3 ovos", "1 xícara de açúcar"],
    steps: [
      ["Prepare a calda", "Derreta o açúcar cuidadosamente até formar caramelo e espalhe na forma.", "Fogo baixo", 300, "Caramelo quente causa queimaduras graves. Não toque na calda."],
      ["Bata a mistura", "Bata leite condensado, leite e ovos até ficar uniforme.", "Sem fogo", 120, "Evite respingos."],
      ["Coloque na forma", "Despeje a mistura na forma caramelizada.", "Sem fogo", 60, "Use luvas se a forma ainda estiver morna."],
      ["Asse em banho-maria", "Asse em banho-maria até firmar, seguindo a receita e as características do forno.", "Forno", 2400, "Tenha cuidado ao retirar a forma com água quente."],
      ["Resfrie", "Deixe esfriar e leve à geladeira antes de desenformar.", "Geladeira", 14400, "O resfriamento ajuda a firmar o pudim."]
    ]
  },

  cuscuz: {
    title: "Cuscuz simples",
    category: "basicas rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Cuscuz de milho macio para o café da manhã.",
    seasoning: "Manteiga, queijo e cheiro-verde são acompanhamentos possíveis.",
    ingredients: ["1 xícara de flocão de milho", "1/2 xícara de água", "Sal", "Manteiga"],
    steps: [
      ["Misture o flocão", "Coloque o flocão em uma tigela e adicione sal.", "Sem fogo", 60, "Distribua o sal pela mistura."],
      ["Hidrate", "Acrescente água aos poucos e misture. Deixe descansar para hidratar.", "Sem fogo", 300, "A textura deve ficar úmida, não encharcada."],
      ["Prepare a cuscuzeira", "Coloque água na parte inferior da cuscuzeira sem ultrapassar o limite indicado.", "Sem fogo", 60, "Siga as instruções do utensílio."],
      ["Cozinhe no vapor", "Coloque o flocão hidratado no recipiente superior e cozinhe até ficar macio.", "Fogo médio", 600, "Cuidado com o vapor quente."],
      ["Sirva", "Desenforme com cuidado e finalize com manteiga.", "Fogo desligado", 60, "Sirva ainda quente."]
    ]
  },

  tapioca: {
    title: "Tapioca recheada",
    category: "rapidas basicas",
    time: "10 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    description: "Tapioca prática com recheio de sua preferência.",
    seasoning: "Queijo, tomate e ervas são uma opção salgada simples.",
    ingredients: ["3 colheres de goma de tapioca", "Queijo", "Tomate", "Orégano"],
    steps: [
      ["Prepare o recheio", "Corte o queijo e o tomate em pedaços ou fatias.", "Sem fogo", 60, "Separe o recheio antes de aquecer a frigideira."],
      ["Aqueça a frigideira", "Use uma frigideira limpa e antiaderente.", "Fogo baixo", 60, "Não é necessário colocar muito óleo."],
      ["Espalhe a goma", "Distribua a goma de tapioca em camada uniforme.", "Fogo baixo", 60, "Evite deixar buracos grandes."],
      ["Adicione o recheio", "Quando a goma unir, acrescente o recheio e dobre ao meio.", "Fogo baixo", 90, "Aqueça até o queijo derreter, se estiver usando."],
      ["Sirva", "Retire com cuidado e sirva.", "Fogo desligado", 30, "Cuidado com o recheio quente."]
    ]
  },

  peixe: {
    title: "Peixe na frigideira",
    category: "almoco rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    description: "Filé de peixe preparado com temperos simples.",
    seasoning: "Limão, alho, ervas e pimenta combinam com peixe.",
    ingredients: ["2 filés de peixe", "Limão", "Alho", "Azeite", "Sal", "Pimenta"],
    steps: [
      ["Prepare o peixe", "Mantenha refrigerado e seque os filés com papel próprio para alimentos.", "Sem fogo", 120, "Use utensílios limpos e separados dos alimentos prontos."],
      ["Tempere", "Tempere com alho, limão, sal e pimenta.", "Sem fogo", 120, "Não deixe marinando fora da geladeira."],
      ["Aqueça a frigideira", "Coloque azeite e aqueça em temperatura moderada.", "Fogo médio", 60, "Evite superaquecer o azeite."],
      ["Cozinhe os filés", "Coloque o peixe e cozinhe dos dois lados até ficar opaco e atingir cozimento seguro.", "Fogo médio", 360, "O tempo varia com a espessura e o tipo de peixe."],
      ["Sirva", "Retire com uma espátula e finalize com ervas e limão.", "Fogo desligado", 30, "Sirva em prato limpo."]
    ]
  },

  frangoForno: {
    title: "Frango assado",
    category: "almoco",
    time: "60 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=85",
    description: "Frango assado com temperos e pele dourada.",
    seasoning: "Alho, limão, páprica, alecrim e pimenta são boas opções.",
    ingredients: ["Pedaços de frango", "Alho", "Limão", "Páprica", "Azeite", "Sal"],
    steps: [
      ["Organize o preparo", "Mantenha o frango refrigerado e separe os temperos.", "Sem fogo", 120, "Não lave o frango cru."],
      ["Tempere", "Misture alho, limão, páprica, azeite e sal no frango.", "Sem fogo", 180, "Higienize as mãos e superfícies após manipular frango cru."],
      ["Preaqueça o forno", "Preaqueça conforme a temperatura indicada na receita e no manual do forno.", "Forno", 600, "Use uma assadeira adequada."],
      ["Asse", "Disponha os pedaços sem amontoar e asse até cozinhar completamente.", "Forno", 2400, "O tempo varia conforme tamanho e tipo de corte."],
      ["Confira a segurança", "Confira 74 °C no centro da parte mais grossa com termômetro culinário.", "Forno desligado", 60, "Não use apenas a cor externa para avaliar o cozimento."]
    ]
  },

  arrozLegumes: {
    title: "Arroz com legumes",
    category: "almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Arroz colorido com legumes para variar o acompanhamento.",
    seasoning: "Alho, cebola, cheiro-verde e cúrcuma podem trazer aroma e cor.",
    ingredients: ["1 xícara de arroz", "2 xícaras de água", "Cenoura", "Ervilha", "Milho", "Alho e sal"],
    steps: [
      ["Prepare os legumes", "Lave e corte a cenoura em cubinhos. Separe ervilha e milho.", "Sem fogo", 180, "Corte em tamanhos semelhantes."],
      ["Refogue", "Aqueça óleo e refogue alho e cebola.", "Fogo médio", 120, "Mexa para não queimar."],
      ["Acrescente o arroz", "Coloque o arroz e misture no refogado.", "Fogo médio", 60, "Envolva todos os grãos."],
      ["Cozinhe", "Acrescente água, sal e os legumes. Cozinhe até a água ser absorvida e o arroz ficar macio.", "Fogo baixo", 900, "Ajuste a água se necessário."],
      ["Finalize", "Desligue, deixe descansar e solte com um garfo.", "Fogo desligado", 180, "Finalize com cheiro-verde."]
    ]
  },

  boloChocolate: {
    title: "Bolo de chocolate",
    category: "sobremesas",
    time: "50 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Bolo de chocolate para compartilhar no café da tarde.",
    seasoning: "Uma cobertura de chocolate ou raspas pode finalizar o bolo.",
    ingredients: ["2 xícaras de farinha", "1 xícara de açúcar", "1 xícara de chocolate em pó", "2 ovos", "Leite", "Fermento"],
    steps: [
      ["Prepare a forma", "Unte e enfarinhe a forma e preaqueça o forno conforme a receita.", "Forno", 600, "Deixe a forma pronta."],
      ["Misture os ingredientes", "Misture ovos, açúcar, leite e óleo até incorporar.", "Sem fogo", 120, "Use uma tigela grande."],
      ["Adicione os secos", "Acrescente farinha e chocolate e misture até a massa ficar uniforme.", "Sem fogo", 120, "Evite bater demais."],
      ["Coloque o fermento", "Misture o fermento delicadamente e transfira para a forma.", "Sem fogo", 60, "Não encha a forma até a borda."],
      ["Asse", "Asse até crescer e o centro estar cozido. Confira com um palito.", "Forno", 1800, "O tempo varia conforme o forno."]
    ]
  },

  vitamina: {
    title: "Vitamina de banana",
    category: "rapidas",
    time: "5 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
    description: "Bebida cremosa e rápida para o café da manhã.",
    seasoning: "Canela combina muito bem com banana e leite.",
    ingredients: ["2 bananas", "300 ml de leite", "Aveia opcional", "Canela opcional"],
    steps: [
      ["Separe os ingredientes", "Separe as bananas, o leite e os complementos.", "Sem fogo", 30, "Use frutas em boas condições."],
      ["Descasque e corte", "Descasque as bananas e corte em pedaços.", "Sem fogo", 30, "Cuidado ao usar a faca."],
      ["Coloque no liquidificador", "Adicione banana, leite e aveia, se desejar.", "Sem fogo", 30, "Não ultrapasse o limite do copo."],
      ["Bata", "Bata até obter uma mistura cremosa e uniforme.", "Sem fogo", 60, "Feche a tampa antes de ligar."],
      ["Sirva", "Despeje em copos e finalize com canela, se desejar.", "Sem fogo", 30, "Consuma logo após preparar."]
    ]
  },

  paoQueijo: {
    title: "Pão de queijo",
    category: "basicas sobremesas",
    time: "35 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484d1?auto=format&fit=crop&w=900&q=85",
    description: "Pãezinhos de queijo para acompanhar o café.",
    seasoning: "Queijo meia-cura ou parmesão pode intensificar o sabor.",
    ingredients: ["2 xícaras de polvilho", "1 xícara de queijo ralado", "1 ovo", "Leite", "Óleo", "Sal"],
    steps: [
      ["Prepare os ingredientes", "Separe o polvilho, o queijo, o ovo e os líquidos.", "Sem fogo", 60, "Meça os ingredientes."],
      ["Misture a massa", "Misture os ingredientes até formar uma massa modelável.", "Sem fogo", 180, "Acrescente líquido aos poucos."],
      ["Modele", "Faça pequenas bolinhas com as mãos limpas.", "Sem fogo", 120, "Tente deixar tamanhos parecidos."],
      ["Asse", "Disponha em assadeira e asse em forno preaquecido até crescer e dourar.", "Forno", 1200, "Siga as instruções da receita e do forno."],
      ["Sirva", "Retire com cuidado e espere amornar um pouco.", "Forno desligado", 120, "A parte interna estará quente."]
    ]
  },

  frangoCremeMilho: {
    title: "Frango cremoso com milho",
    category: "almoco",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Frango macio em molho cremoso de milho, perfeito para o almoço.",
    seasoning: "Páprica, alho e cheiro-verde equilibram a cremosidade.",
    ingredients: ["500 g de peito de frango em cubos", "1 lata de milho escorrido", "1 caixa de creme de leite", "1/2 cebola picada", "2 dentes de alho", "1 colher de azeite", "Sal, páprica e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Doure o frango temperado", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue cebola e alho", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "bata metade do milho com creme de leite", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "junte o creme, o restante do milho e o frango", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe até aquecer e finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  frangoMostarda: {
    title: "Frango ao molho de mostarda",
    category: "almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    description: "Filés dourados envolvidos em molho suave de mostarda.",
    seasoning: "Mostarda, pimenta-do-reino e um toque de limão dão personalidade.",
    ingredients: ["500 g de filé de frango", "2 colheres de mostarda", "1/2 caixa de creme de leite", "1 dente de alho", "1/2 cebola", "1 colher de azeite", "Sal e pimenta"],
    steps: [
      ["Organize os ingredientes", "Tempere os filés", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "doure em frigideira com azeite", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "retire e refogue cebola e alho", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente mostarda e creme de leite", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "volte o frango e cozinhe até ficar completamente cozido.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  frangoParmegiana: {
    title: "Frango à parmegiana",
    category: "almoco",
    time: "50 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Filés empanados cobertos com molho de tomate e queijo gratinado.",
    seasoning: "Orégano e manjericão combinam com o molho de tomate.",
    ingredients: ["2 filés grandes de frango", "1 ovo", "1 xícara de farinha de rosca", "1/2 xícara de farinha de trigo", "1 xícara de molho de tomate", "150 g de muçarela", "Sal e orégano"],
    steps: [
      ["Organize os ingredientes", "Tempere e afine os filés", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "passe na farinha, no ovo batido e na farinha de rosca", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure em frigideira com pouco óleo", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "coloque em refratário com molho e muçarela", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "leve ao forno até gratinar e confira 74 °C no centro do frango.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  frangoXadrez: {
    title: "Frango xadrez",
    category: "almoco",
    time: "35 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Frango salteado com legumes crocantes e molho levemente encorpado.",
    seasoning: "Gengibre e gergelim são complementos opcionais.",
    ingredients: ["500 g de frango em cubos", "1 pimentão vermelho", "1 pimentão verde", "1 cebola", "1 cenoura", "3 colheres de shoyu", "1 colher de amido de milho", "1/2 xícara de água"],
    steps: [
      ["Organize os ingredientes", "Doure o frango em etapas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "reserve", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "salteie cebola, cenoura e pimentões", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "misture shoyu, água e amido; retorne o frango e despeje o molho", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe mexendo até encorpar e o frango atingir 74 °C.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  escondidinhoCarne: {
    title: "Escondidinho de carne moída",
    category: "almoco",
    time: "55 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Purê cremoso cobre um refogado bem temperado de carne moída.",
    seasoning: "Páprica e cheiro-verde deixam o recheio mais aromático.",
    ingredients: ["500 g de batata", "400 g de carne moída", "1/2 cebola", "2 dentes de alho", "1/2 xícara de leite", "1 colher de manteiga", "100 g de queijo ralado", "Sal e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Cozinhe e amasse as batatas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "prepare purê com leite e manteiga", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "refogue cebola e alho e cozinhe a carne até perder a cor crua", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "monte carne e purê em refratário", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cubra com queijo e gratine.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  carneMoidaBatata: {
    title: "Carne moída com batata",
    category: "almoco",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Refogado caseiro de carne moída com batatas macias.",
    seasoning: "Cominho, colorau e cheiro-verde são ótimos temperos.",
    ingredients: ["400 g de carne moída", "3 batatas em cubos", "1/2 cebola", "2 dentes de alho", "1 tomate", "1 colher de óleo", "1/2 xícara de água", "Sal e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Refogue cebola e alho", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente a carne e cozinhe até dourar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "junte tomate e batatas", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "tempere e adicione água", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "tampe e cozinhe até as batatas ficarem macias.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  bifeAcebolado: {
    title: "Bife acebolado",
    category: "almoco rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Bifes dourados com cebolas macias e saborosas.",
    seasoning: "Pimenta-do-reino e um pouco de vinagre realçam a carne.",
    ingredients: ["4 bifes de alcatra ou coxão mole", "1 cebola em rodelas", "2 dentes de alho", "1 colher de óleo", "1 colher de vinagre", "Sal e pimenta"],
    steps: [
      ["Organize os ingredientes", "Seque e tempere os bifes", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "aqueça bem a frigideira com óleo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure os bifes em pequenas porções", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "retire e refogue a cebola com alho", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "volte os bifes, junte vinagre e sirva.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  almondigasMolho: {
    title: "Almôndegas ao molho",
    category: "almoco",
    time: "45 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Bolinhas de carne macias cozidas em molho de tomate.",
    seasoning: "Salsinha, alho e orégano dão sabor clássico.",
    ingredients: ["500 g de carne moída", "1 ovo", "1/3 xícara de farinha de rosca", "2 dentes de alho", "1/2 cebola", "2 xícaras de molho de tomate", "Sal, pimenta e salsinha"],
    steps: [
      ["Organize os ingredientes", "Misture carne, ovo, farinha e temperos", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "modele bolinhas", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure em panela com um fio de óleo", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente o molho de tomate", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "tampe e cozinhe até o centro estar bem cozido.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  costelinhaForno: {
    title: "Costelinha suína assada",
    category: "almoco",
    time: "90 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Costelinha assada lentamente com superfície dourada.",
    seasoning: "Páprica, alho, limão e mel formam uma marinada equilibrada.",
    ingredients: ["1 kg de costelinha suína", "2 dentes de alho", "Suco de 1 limão", "1 colher de páprica", "1 colher de mel", "Sal e pimenta"],
    steps: [
      ["Organize os ingredientes", "Misture alho, limão, páprica, mel, sal e pimenta", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "envolva a costelinha e deixe na geladeira por 30 minutos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "coloque em assadeira coberta", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "asse até ficar macia", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "descubra para dourar e confira cozimento seguro.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  linguicaAcebolada: {
    title: "Linguiça acebolada",
    category: "almoco rapidas",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    description: "Linguiça cozida e dourada com bastante cebola.",
    seasoning: "Pimenta calabresa pode ser usada com moderação.",
    ingredients: ["500 g de linguiça fresca", "2 cebolas em rodelas", "1 colher de óleo", "1/2 xícara de água", "Cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Coloque a linguiça em frigideira com água", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe até a água evaporar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "deixe dourar na própria gordura", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente cebola", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "mexa até ficar macia e confira que a linguiça esteja totalmente cozida.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  peixeForno: {
    title: "Peixe assado com limão",
    category: "almoco",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    description: "Peixe assado com rodelas de tomate, cebola e limão.",
    seasoning: "Alecrim, tomilho e pimenta-do-reino combinam com peixe.",
    ingredients: ["4 filés de peixe", "1 limão", "2 dentes de alho", "1 tomate em rodelas", "1 cebola em rodelas", "Azeite", "Sal e ervas"],
    steps: [
      ["Organize os ingredientes", "Tempere os filés com limão, alho e sal", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "disponha cebola e tomate em refratário", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "coloque o peixe e regue com azeite", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "asse até ficar opaco e se separar facilmente em lascas", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "sirva com ervas.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  moquecaBanana: {
    title: "Moqueca de banana-da-terra",
    category: "almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Moqueca vegetariana com banana-da-terra e leite de coco.",
    seasoning: "Coentro, limão e azeite de dendê dão o perfil tradicional.",
    ingredients: ["3 bananas-da-terra firmes", "1 tomate", "1 cebola", "1/2 pimentão", "200 ml de leite de coco", "1 colher de azeite de dendê", "Coentro e sal"],
    steps: [
      ["Organize os ingredientes", "Refogue cebola, tomate e pimentão", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "corte as bananas em rodelas grossas", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acomode na panela", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "adicione leite de coco e dendê", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe em fogo baixo até a banana ficar macia sem desmanchar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  omeleteForno: {
    title: "Omelete de forno com legumes",
    category: "rapidas",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    description: "Omelete assada, prática para aproveitar legumes.",
    seasoning: "Orégano, salsinha e pimenta-do-reino combinam muito bem.",
    ingredients: ["4 ovos", "1/2 cenoura ralada", "1/2 abobrinha picada", "1/2 tomate", "1/2 xícara de queijo", "2 colheres de leite", "Sal e orégano"],
    steps: [
      ["Organize os ingredientes", "Bata os ovos com leite e temperos", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture os legumes e o queijo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "despeje em refratário untado", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "asse em forno preaquecido até firmar completamente", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "espere um minuto e corte em porções.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  quicheQueijo: {
    title: "Quiche simples de queijo",
    category: "massas",
    time: "60 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Torta aberta com massa amanteigada e recheio cremoso de queijo.",
    seasoning: "Noz-moscada e pimenta branca valorizam o recheio.",
    ingredients: ["1 e 1/2 xícara de farinha de trigo", "100 g de manteiga gelada", "1 ovo", "1 caixa de creme de leite", "2 ovos para o recheio", "150 g de queijo", "Sal e noz-moscada"],
    steps: [
      ["Organize os ingredientes", "Misture farinha, manteiga, ovo e sal até formar massa", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "forre uma forma e faça furos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "pré-asse por 10 minutos", "Forno", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "misture creme de leite, ovos e queijo", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "recheie e asse até firmar e dourar.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  lasanhaBolonhesa: {
    title: "Lasanha à bolonhesa",
    category: "massas",
    time: "70 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Camadas de massa, molho à bolonhesa, presunto e queijo.",
    seasoning: "Manjericão, alho e orégano deixam o molho mais perfumado.",
    ingredients: ["250 g de massa para lasanha", "500 g de carne moída", "500 ml de molho de tomate", "300 g de muçarela", "200 g de presunto", "1/2 cebola", "Queijo parmesão"],
    steps: [
      ["Organize os ingredientes", "Refogue cebola e alho e cozinhe a carne", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente molho e apure", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "monte camadas de molho, massa, carne, presunto e queijo", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "repita e finalize com parmesão", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "asse conforme a embalagem da massa até borbulhar.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  macarraoAlhoOleo: {
    title: "Macarrão alho e óleo",
    category: "massas rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Massa simples envolvida em azeite aromatizado com alho.",
    seasoning: "Salsinha fresca e pimenta calabresa são opcionais.",
    ingredients: ["250 g de espaguete", "4 dentes de alho fatiados", "4 colheres de azeite", "Sal", "Salsinha", "Pimenta calabresa opcional"],
    steps: [
      ["Organize os ingredientes", "Cozinhe o espaguete em água salgada", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "aqueça o azeite em fogo baixo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure levemente o alho sem queimar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente a massa escorrida e um pouco da água do cozimento", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "misture e finalize com salsinha.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  macarraoForno: {
    title: "Macarrão de forno cremoso",
    category: "massas",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Macarrão gratinado com molho cremoso e queijo derretido.",
    seasoning: "Orégano e manjericão dão aroma ao prato.",
    ingredients: ["300 g de macarrão cozido", "1 xícara de molho de tomate", "1 caixa de creme de leite", "150 g de presunto", "200 g de muçarela", "Milho a gosto", "Orégano"],
    steps: [
      ["Organize os ingredientes", "Cozinhe a massa al dente", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture molho de tomate e creme de leite", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "incorpore presunto e milho", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "transfira para refratário e cubra com muçarela", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "leve ao forno até gratinar.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  nhoqueBatata: {
    title: "Nhoque de batata caseiro",
    category: "massas",
    time: "60 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Nhoque macio feito com batata e servido com molho de tomate.",
    seasoning: "Noz-moscada é opcional e combina com a massa.",
    ingredients: ["500 g de batata", "1 gema", "1 xícara de farinha de trigo (aproximadamente)", "Sal", "Molho de tomate", "Queijo parmesão"],
    steps: [
      ["Organize os ingredientes", "Cozinhe as batatas e amasse ainda quentes", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "espere amornar e misture gema, sal e farinha aos poucos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "faça rolinhos e corte os nhoques", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "cozinhe em água fervente até subirem", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "retire com escumadeira e sirva com molho.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  pizzaFrigideira: {
    title: "Pizza de frigideira",
    category: "massas rapidas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
    description: "Pizza rápida feita diretamente na frigideira.",
    seasoning: "Orégano e manjericão finalizam o sabor de pizzaria.",
    ingredients: ["1 xícara de farinha de trigo", "1/2 xícara de água", "1 colher de azeite", "1 colher de chá de fermento químico", "Molho de tomate", "Muçarela e tomate"],
    steps: [
      ["Organize os ingredientes", "Misture farinha, água, azeite, fermento e sal até formar massa", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "abra um disco", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure em frigideira tampada em fogo baixo", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "vire, espalhe molho e cobertura", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "tampe até o queijo derreter e a massa cozinhar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  saladaGraoBico: {
    title: "Salada de grão-de-bico",
    category: "rapidas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Salada fresca e nutritiva com grão-de-bico e vegetais.",
    seasoning: "Limão, azeite e salsinha formam um molho simples.",
    ingredients: ["2 xícaras de grão-de-bico cozido", "1 tomate picado", "1/2 pepino", "1/4 de cebola roxa", "Suco de 1 limão", "Azeite, sal e salsinha"],
    steps: [
      ["Organize os ingredientes", "Escorra e esfrie o grão-de-bico", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "corte tomate, pepino e cebola", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "misture tudo em uma tigela", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "tempere com limão, azeite e sal", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "finalize com salsinha e mantenha refrigerada até servir.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  salpicaoFrango: {
    title: "Salpicão de frango",
    category: "rapidas",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Salpicão cremoso com frango, maçã e legumes.",
    seasoning: "Limão e cheiro-verde equilibram a maionese.",
    ingredients: ["2 xícaras de frango cozido e desfiado", "1 cenoura ralada", "1 maçã em cubos", "1/2 lata de milho", "1/2 xícara de ervilha", "3 colheres de maionese", "Batata palha"],
    steps: [
      ["Organize os ingredientes", "Cozinhe o frango até atingir 74 °C e desfie", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture cenoura, maçã, milho e ervilha", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "incorpore a maionese e gotas de limão", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "leve à geladeira", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "acrescente batata palha somente na hora de servir.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  tabule: {
    title: "Tabule",
    category: "rapidas",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Salada árabe fresca com trigo, tomate, pepino e ervas.",
    seasoning: "Hortelã fresca e bastante limão são essenciais para o frescor.",
    ingredients: ["1/2 xícara de trigo para quibe", "2 tomates", "1 pepino", "1/2 cebola", "Salsinha e hortelã", "Suco de 1 limão", "Azeite e sal"],
    steps: [
      ["Organize os ingredientes", "Hidrate o trigo em água conforme a embalagem", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "escorra e esprema bem", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "pique os vegetais e as ervas", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "misture tudo", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "tempere com limão, azeite e sal e refrigere antes de servir.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  saladaMacarrao: {
    title: "Salada de macarrão",
    category: "rapidas",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Salada fria colorida, ótima para acompanhar refeições.",
    seasoning: "Limão, mostarda suave e cheiro-verde deixam o molho mais leve.",
    ingredients: ["250 g de macarrão curto", "1 cenoura cozida em cubos", "1/2 lata de milho", "1/2 xícara de ervilha", "3 colheres de maionese", "Azeitonas e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Cozinhe o macarrão al dente e resfrie", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe a cenoura até ficar macia", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "misture massa, cenoura, milho, ervilha e azeitonas", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "incorpore a maionese e ajuste o sal", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "mantenha refrigerada.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  cuscuzRecheado: {
    title: "Cuscuz paulista simples",
    category: "almoco",
    time: "40 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Cuscuz paulista úmido, colorido e fácil de servir em fatias.",
    seasoning: "Páprica, pimenta e cheiro-verde realçam o caldo.",
    ingredients: ["2 xícaras de farinha de milho flocada", "1 lata de sardinha", "1 tomate", "1/2 cebola", "1/2 lata de milho", "2 xícaras de caldo de legumes", "Azeitonas e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Refogue cebola e tomate", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "junte sardinha, milho, azeitonas e caldo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "cozinhe e acrescente a farinha aos poucos até engrossar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "decore uma forma untada; coloque a mistura e pressione", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "espere amornar antes de desenformar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  polentaMolho: {
    title: "Polenta cremosa com molho",
    category: "almoco",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Polenta cremosa servida com molho de tomate bem temperado.",
    seasoning: "Alho, manjericão e parmesão combinam com a polenta.",
    ingredients: ["1 xícara de fubá", "4 xícaras de água", "1 colher de manteiga", "1/2 xícara de parmesão", "2 xícaras de molho de tomate", "Sal"],
    steps: [
      ["Organize os ingredientes", "Dissolva o fubá em parte da água fria", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "aqueça o restante com sal", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "despeje o fubá mexendo sempre", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "cozinhe em fogo baixo até engrossar", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "finalize com manteiga e parmesão e sirva com molho quente.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  pureMandioquinha: {
    title: "Purê de mandioquinha",
    category: "almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Purê aveludado de mandioquinha para acompanhar carnes e legumes.",
    seasoning: "Noz-moscada e manteiga valorizam o sabor naturalmente adocicado.",
    ingredients: ["500 g de mandioquinha", "1/2 xícara de leite", "1 colher de manteiga", "Sal", "Pimenta e noz-moscada"],
    steps: [
      ["Organize os ingredientes", "Descasque e corte a mandioquinha", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe em água até ficar macia", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "escorra e amasse", "Forno", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "volte à panela com manteiga e leite aos poucos", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "mexa até ficar cremoso e tempere.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  abobrinhaRefogada: {
    title: "Abobrinha refogada",
    category: "rapidas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Acompanhamento leve de abobrinha refogada rapidamente.",
    seasoning: "Alho dourado, pimenta e cheiro-verde são suficientes.",
    ingredients: ["2 abobrinhas", "2 dentes de alho", "1/2 cebola", "1 colher de azeite", "Sal e pimenta", "Cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Lave e corte as abobrinhas em meias-luas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "aqueça azeite e refogue cebola e alho", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente a abobrinha", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "salteie até ficar macia, mas ainda firme", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "tempere e finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  berinjelaForno: {
    title: "Berinjela ao forno",
    category: "almoco",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Berinjela em camadas com tomate e queijo gratinado.",
    seasoning: "Orégano, manjericão e azeite dão aroma mediterrâneo.",
    ingredients: ["2 berinjelas", "2 tomates", "1 cebola", "150 g de muçarela", "Azeite", "Orégano e sal"],
    steps: [
      ["Organize os ingredientes", "Corte a berinjela em fatias e deixe descansar com sal", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "seque", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "disponha em refratário alternando com tomate e cebola", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "regue com azeite e asse até amaciar", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cubra com queijo e gratine.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  batataRostie: {
    title: "Batata rösti simples",
    category: "rapidas",
    time: "30 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    description: "Batata ralada dourada por fora e macia por dentro.",
    seasoning: "Pimenta-do-reino e queijo curado dão sabor extra.",
    ingredients: ["3 batatas médias", "1 colher de manteiga", "100 g de queijo ralado", "Sal e pimenta", "Azeite"],
    steps: [
      ["Organize os ingredientes", "Cozinhe as batatas por poucos minutos e deixe esfriar", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "descasque e rale", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "tempere e misture o queijo", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "aqueça manteiga e azeite em frigideira", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "pressione a mistura e doure dos dois lados.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  mandiocaManteiga: {
    title: "Mandioca na manteiga",
    category: "almoco",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Mandioca macia salteada na manteiga com alho.",
    seasoning: "Cheiro-verde e uma pitada de páprica são opcionais.",
    ingredients: ["600 g de mandioca descascada", "1 colher de manteiga", "2 dentes de alho", "Sal", "Cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Retire o fio central da mandioca se necessário", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe em água até ficar macia", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "escorra", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "derreta manteiga e doure o alho; acrescente a mandioca e salteie com cuidado", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  farofaBanana: {
    title: "Farofa de banana",
    category: "almoco",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Farofa levemente adocicada com banana dourada e cebola.",
    seasoning: "Pimenta-do-reino e cheiro-verde equilibram o doce da banana.",
    ingredients: ["2 bananas maduras firmes", "2 xícaras de farinha de mandioca", "2 colheres de manteiga", "1/2 cebola", "Sal e cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Corte as bananas em rodelas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "doure na manteiga e reserve", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "refogue cebola", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente a farinha aos poucos mexendo", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "volte a banana, ajuste o sal e finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  sopaAbobora: {
    title: "Sopa cremosa de abóbora",
    category: "rapidas",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Sopa aveludada de abóbora, reconfortante e fácil.",
    seasoning: "Gengibre e noz-moscada dão profundidade ao sabor.",
    ingredients: ["500 g de abóbora cabotiá", "1/2 cebola", "2 dentes de alho", "3 xícaras de água ou caldo", "1 colher de azeite", "Sal e gengibre"],
    steps: [
      ["Organize os ingredientes", "Refogue cebola e alho", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente a abóbora em cubos e o caldo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "cozinhe até amaciar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "bata com mixer ou liquidificador com cuidado", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "volte à panela, ajuste a consistência e tempere.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  caldoVerde: {
    title: "Caldo verde",
    category: "almoco",
    time: "45 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Caldo de batata com couve fininha e rodelas de linguiça.",
    seasoning: "Alho, azeite e pimenta-do-reino são clássicos.",
    ingredients: ["4 batatas", "1 litro de água", "1 cebola", "2 dentes de alho", "1 maço de couve fatiada", "150 g de linguiça", "Azeite e sal"],
    steps: [
      ["Organize os ingredientes", "Cozinhe as batatas com cebola e água", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "bata até formar creme", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "doure a linguiça em outra panela", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "junte o creme e ferva suavemente", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "acrescente a couve no final e cozinhe por poucos minutos.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  sopaLentilha: {
    title: "Sopa de lentilha",
    category: "almoco",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Sopa nutritiva de lentilha com legumes e temperos suaves.",
    seasoning: "Cominho, louro e cheiro-verde combinam com lentilha.",
    ingredients: ["1 xícara de lentilha", "1 cenoura", "1 tomate", "1/2 cebola", "2 dentes de alho", "1 litro de água", "Sal e cominho"],
    steps: [
      ["Organize os ingredientes", "Lave a lentilha", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue cebola e alho", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente cenoura, tomate e lentilha", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "cubra com água e louro", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe até os grãos ficarem macios e ajuste sal e cominho.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  cremeMilho: {
    title: "Creme de milho caseiro",
    category: "almoco",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Creme de milho suave para acompanhar frango e carnes.",
    seasoning: "Noz-moscada e pimenta branca são opcionais.",
    ingredients: ["1 lata de milho", "1 xícara de leite", "1 colher de manteiga", "1/2 cebola", "1 colher de amido de milho", "Sal e noz-moscada"],
    steps: [
      ["Organize os ingredientes", "Bata o milho com leite", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue a cebola na manteiga", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "despeje a mistura", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "dissolva o amido em um pouco de leite frio e acrescente", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe mexendo até engrossar e tempere.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  arrozBrocolis: {
    title: "Arroz com brócolis",
    category: "almoco",
    time: "30 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Arroz soltinho com brócolis picado e alho.",
    seasoning: "Alho dourado e limão combinam com o brócolis.",
    ingredients: ["1 xícara de arroz", "1 maço pequeno de brócolis", "2 dentes de alho", "2 xícaras de água", "1 colher de azeite", "Sal"],
    steps: [
      ["Organize os ingredientes", "Lave e pique o brócolis", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue alho no azeite", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente arroz e misture", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "junte água quente e sal e cozinhe", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "adicione o brócolis nos minutos finais para preservar a cor.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  arrozCarreteiro: {
    title: "Arroz carreteiro simples",
    category: "almoco",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Arroz de panela com carne-seca desfiada e temperos.",
    seasoning: "Páprica defumada e cheiro-verde combinam muito bem.",
    ingredients: ["1 xícara de arroz", "200 g de carne-seca dessalgada e desfiada", "1/2 cebola", "2 dentes de alho", "1 tomate", "2 xícaras de água", "Cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Dessalgue e cozinhe a carne-seca previamente", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue cebola, alho e tomate", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "junte a carne e o arroz", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente água quente", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cozinhe até o arroz ficar macio e finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  feijaoTropeiro: {
    title: "Feijão tropeiro",
    category: "almoco",
    time: "35 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Feijão tropeiro com bacon, ovos, couve e farinha.",
    seasoning: "Alho, pimenta e cheiro-verde realçam o prato.",
    ingredients: ["2 xícaras de feijão cozido escorrido", "150 g de bacon", "2 ovos", "1/2 cebola", "1 xícara de farinha de mandioca", "Couve fatiada", "Cheiro-verde"],
    steps: [
      ["Organize os ingredientes", "Doure o bacon", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue cebola e alho na gordura", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente os ovos e mexa", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "junte feijão e couve; adicione farinha aos poucos sem ressecar", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "finalize com cheiro-verde.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  tortaLiquidificador: {
    title: "Torta salgada de liquidificador",
    category: "massas",
    time: "50 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Torta fofinha com massa de liquidificador e recheio versátil.",
    seasoning: "Orégano e cheiro-verde dão sabor ao recheio.",
    ingredients: ["2 ovos", "2 xícaras de leite", "1/2 xícara de óleo", "2 xícaras de farinha", "1 colher de fermento químico", "1 xícara de frango desfiado", "Tomate, milho e queijo"],
    steps: [
      ["Organize os ingredientes", "Bata ovos, leite, óleo e farinha até homogeneizar", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture o fermento por último", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "despeje metade em forma untada", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "distribua recheio já cozido e cubra com o restante", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "asse até dourar e passar no teste do palito.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  empadaFrango: {
    title: "Empadão de frango",
    category: "massas",
    time: "75 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    description: "Massa amanteigada com recheio cremoso de frango.",
    seasoning: "Páprica, milho e cheiro-verde enriquecem o recheio.",
    ingredients: ["3 xícaras de farinha de trigo", "200 g de manteiga gelada", "1 ovo", "2 xícaras de frango cozido e desfiado", "1/2 xícara de molho de tomate", "1/2 copo de requeijão", "1 gema para pincelar"],
    steps: [
      ["Organize os ingredientes", "Misture farinha, manteiga, ovo e sal até formar massa", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "refogue o frango com molho e temperos e deixe esfriar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "forre a forma com parte da massa", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "coloque recheio e requeijão", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "cubra, pincele gema e asse até dourar.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  paoCaseiro: {
    title: "Pão caseiro fofinho",
    category: "massas",
    time: "120 min",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484d1?auto=format&fit=crop&w=900&q=85",
    description: "Pão macio de preparo caseiro para o café.",
    seasoning: "Uma pincelada de água ou leite antes de assar ajuda na crosta.",
    ingredients: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "300 ml de água morna", "2 colheres de açúcar", "1 colher de chá de sal", "2 colheres de óleo"],
    steps: [
      ["Organize os ingredientes", "Misture fermento, açúcar e água morna", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente óleo, sal e farinha aos poucos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "sove até ficar lisa", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "deixe crescer coberta até dobrar; modele e deixe crescer novamente", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "asse em forno preaquecido até dourar.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  paoAlho: {
    title: "Pão de alho caseiro",
    category: "rapidas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484d1?auto=format&fit=crop&w=900&q=85",
    description: "Pão crocante por fora com creme de alho e queijo.",
    seasoning: "Salsinha e parmesão deixam o recheio aromático.",
    ingredients: ["4 pães franceses", "3 colheres de manteiga", "3 dentes de alho amassados", "3 colheres de maionese", "2 colheres de queijo ralado", "Salsinha"],
    steps: [
      ["Organize os ingredientes", "Misture manteiga, alho, maionese, queijo e salsinha", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "faça cortes nos pães sem separar as fatias", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "espalhe o creme nos cortes", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "leve ao forno ou churrasqueira até dourar", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "sirva quente.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  broaFuba: {
    title: "Broa de fubá",
    category: "sobremesas",
    time: "40 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Broa macia de fubá para acompanhar café ou chá.",
    seasoning: "Erva-doce é um toque tradicional e opcional.",
    ingredients: ["1 xícara de fubá", "1 xícara de farinha de trigo", "3/4 xícara de açúcar", "1 ovo", "2 colheres de manteiga", "1/2 xícara de leite", "1 colher de fermento"],
    steps: [
      ["Organize os ingredientes", "Misture fubá, farinha e açúcar", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "incorpore ovo, manteiga e leite", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "adicione fermento e erva-doce se desejar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "modele porções em assadeira", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "asse até firmar e dourar levemente.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  boloCenoura: {
    title: "Bolo de cenoura com cobertura",
    category: "sobremesas",
    time: "55 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Bolo de cenoura fofinho com cobertura de chocolate.",
    seasoning: "Uma pitada de sal realça o sabor da cenoura e do chocolate.",
    ingredients: ["3 cenouras médias", "3 ovos", "1 xícara de óleo", "2 xícaras de açúcar", "2 e 1/2 xícaras de farinha", "1 colher de fermento", "1/2 xícara de chocolate para cobertura"],
    steps: [
      ["Organize os ingredientes", "Bata cenoura, ovos e óleo", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture açúcar e farinha em tigela", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "incorpore o creme batido", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "adicione fermento delicadamente", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "asse até o palito sair limpo e cubra com calda de chocolate.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  boloFuba: {
    title: "Bolo de fubá simples",
    category: "sobremesas",
    time: "45 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Bolo de fubá macio, ideal para o café da tarde.",
    seasoning: "Erva-doce ou queijo ralado podem ser adicionados.",
    ingredients: ["2 xícaras de fubá", "1 xícara de farinha", "1 e 1/2 xícara de açúcar", "3 ovos", "1 xícara de leite", "1/2 xícara de óleo", "1 colher de fermento"],
    steps: [
      ["Organize os ingredientes", "Bata ovos, açúcar, leite e óleo", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture fubá e farinha", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "incorpore os líquidos aos secos", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "adicione fermento", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "coloque em forma untada e asse até dourar e passar no teste do palito.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  boloBanana: {
    title: "Bolo de banana",
    category: "sobremesas",
    time: "50 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Bolo úmido com banana madura e toque de canela.",
    seasoning: "Canela e uma pitada de noz-moscada combinam com banana.",
    ingredients: ["3 bananas maduras", "2 ovos", "1/2 xícara de óleo", "1 xícara de açúcar", "2 xícaras de farinha", "1 colher de fermento", "Canela"],
    steps: [
      ["Organize os ingredientes", "Amasse as bananas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture ovos, óleo e açúcar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "incorpore farinha e canela", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "adicione fermento", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "despeje em forma untada e asse até o centro ficar cozido.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  brownie: {
    title: "Brownie de chocolate",
    category: "sobremesas",
    time: "35 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Brownie intenso, com casquinha fina e interior úmido.",
    seasoning: "Nozes picadas são opcionais e dão textura.",
    ingredients: ["150 g de chocolate meio amargo", "100 g de manteiga", "3/4 xícara de açúcar", "2 ovos", "1/2 xícara de farinha", "2 colheres de chocolate em pó"],
    steps: [
      ["Organize os ingredientes", "Derreta chocolate e manteiga", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture açúcar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente ovos um a um", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "incorpore farinha e chocolate em pó sem bater demais", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "espalhe em forma pequena e asse até as bordas firmarem e o centro continuar úmido.", "Forno", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  brigadeiroColher: {
    title: "Brigadeiro de colher",
    category: "sobremesas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Brigadeiro cremoso para servir em copinhos ou comer de colher.",
    seasoning: "Chocolate em pó de boa qualidade deixa o sabor mais intenso.",
    ingredients: ["1 lata de leite condensado", "2 colheres de chocolate em pó", "1 colher de manteiga", "Granulado para finalizar"],
    steps: [
      ["Organize os ingredientes", "Coloque leite condensado, chocolate e manteiga em panela", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture antes de ligar o fogo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "cozinhe em fogo baixo mexendo sempre", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "desligue quando ficar cremoso e desgrudar levemente do fundo", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "espere amornar e finalize.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  beijinho: {
    title: "Beijinho de coco",
    category: "sobremesas",
    time: "20 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Doce de coco tradicional para festas e sobremesas.",
    seasoning: "Coco seco ou fresco pode ser usado conforme a textura desejada.",
    ingredients: ["1 lata de leite condensado", "1 colher de manteiga", "100 g de coco ralado", "Cravos para decorar"],
    steps: [
      ["Organize os ingredientes", "Misture leite condensado, manteiga e coco em panela", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe em fogo baixo mexendo até desgrudar do fundo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "deixe esfriar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "enrole com as mãos untadas ou sirva em copinhos", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "finalize com coco ou cravo.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  mousseMaracuja: {
    title: "Mousse de maracujá",
    category: "sobremesas",
    time: "10 min + geladeira",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    description: "Mousse aerada e azedinha com poucos ingredientes.",
    seasoning: "A polpa fresca cria contraste de textura e acidez.",
    ingredients: ["1 lata de leite condensado", "1 caixa de creme de leite", "1/2 xícara de suco concentrado de maracujá", "Polpa para decorar"],
    steps: [
      ["Organize os ingredientes", "Bata leite condensado, creme de leite e suco no liquidificador", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "distribua em taças", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "cubra e leve à geladeira por pelo menos 3 horas", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "finalize com polpa de maracujá", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "mantenha refrigerada até servir.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  mousseLimao: {
    title: "Mousse de limão",
    category: "sobremesas",
    time: "10 min + geladeira",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    description: "Sobremesa cremosa e refrescante com limão.",
    seasoning: "Raspas da casca, sem a parte branca, perfumam a mousse.",
    ingredients: ["1 lata de leite condensado", "1 caixa de creme de leite", "Suco de 2 a 3 limões", "Raspas de limão"],
    steps: [
      ["Organize os ingredientes", "Bata leite condensado e creme de leite", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente o suco de limão aos poucos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "bata até engrossar", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "distribua em taças", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "refrigere por pelo menos 2 horas e finalize com raspas.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  pudimLeite: {
    title: "Pudim de leite condensado",
    category: "sobremesas",
    time: "70 min + geladeira",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=900&q=85",
    description: "Pudim clássico com calda de caramelo e textura lisa.",
    seasoning: "Uma pitada de baunilha é opcional.",
    ingredients: ["1 lata de leite condensado", "2 medidas de leite", "3 ovos", "1 xícara de açúcar para calda", "1/2 xícara de água quente"],
    steps: [
      ["Organize os ingredientes", "Derreta o açúcar até formar caramelo e junte água quente com cuidado", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "espalhe na forma", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "bata leite condensado, leite e ovos", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "despeje na forma; asse em banho-maria até firmar", "Forno", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "esfrie e gele antes de desenformar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  arrozDoce: {
    title: "Arroz-doce cremoso",
    category: "sobremesas",
    time: "45 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Arroz-doce cremoso com canela, servido morno ou gelado.",
    seasoning: "Canela em pau e casca de limão aromatizam delicadamente.",
    ingredients: ["1 xícara de arroz", "4 xícaras de água", "700 ml de leite", "1 lata de leite condensado", "1 pau de canela", "Casca de limão"],
    steps: [
      ["Organize os ingredientes", "Cozinhe o arroz na água com canela até amaciar", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente leite e casca de limão", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "cozinhe mexendo ocasionalmente", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "junte leite condensado e apure até cremoso", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "retire a casca e sirva com canela.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  canjica: {
    title: "Canjica cremosa",
    category: "sobremesas",
    time: "60 min + molho",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    description: "Canjica cremosa com leite, coco e especiarias.",
    seasoning: "Canela, cravo e coco ralado são complementos tradicionais.",
    ingredients: ["500 g de milho para canjica", "1 litro de leite", "1 lata de leite condensado", "200 ml de leite de coco", "Canela em pau", "Cravo a gosto"],
    steps: [
      ["Organize os ingredientes", "Deixe o milho de molho por 8 horas", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "escorra e cozinhe na pressão conforme o tempo indicado para o grão", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "confira se está macio", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "acrescente leite, leite condensado e leite de coco", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "ferva suavemente até engrossar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  cocada: {
    title: "Cocada de panela",
    category: "sobremesas",
    time: "25 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Cocada úmida feita na panela com coco e açúcar.",
    seasoning: "Uma pitada de sal destaca o sabor do coco.",
    ingredients: ["2 xícaras de coco ralado", "1 xícara de açúcar", "1/2 xícara de água", "1/2 lata de leite condensado"],
    steps: [
      ["Organize os ingredientes", "Leve açúcar e água ao fogo até dissolver", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "acrescente coco e mexa", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "junte leite condensado", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "cozinhe mexendo até engrossar", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "distribua colheradas em papel manteiga e deixe esfriar.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  paveChocolate: {
    title: "Pavê de chocolate",
    category: "sobremesas",
    time: "30 min + geladeira",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Pavê em camadas de biscoito e creme de chocolate.",
    seasoning: "Baunilha e raspas de chocolate finalizam a sobremesa.",
    ingredients: ["1 pacote de biscoito maisena", "1 lata de leite condensado", "500 ml de leite", "2 colheres de amido de milho", "3 colheres de chocolate em pó", "1 caixa de creme de leite"],
    steps: [
      ["Organize os ingredientes", "Dissolva o amido em parte do leite", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe com leite condensado e chocolate mexendo até engrossar", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "desligue e misture creme de leite", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "faça camadas de creme e biscoito rapidamente umedecido", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "gele por pelo menos 4 horas.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  tortaLimao: {
    title: "Torta de limão",
    category: "sobremesas",
    time: "45 min + geladeira",
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    description: "Torta com base crocante e recheio cítrico e cremoso.",
    seasoning: "Raspas de limão dão perfume e acabamento.",
    ingredients: ["200 g de biscoito maisena", "100 g de manteiga derretida", "1 lata de leite condensado", "1 caixa de creme de leite", "Suco de 3 limões", "Raspas de limão"],
    steps: [
      ["Organize os ingredientes", "Triture os biscoitos e misture manteiga", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "pressione em forma e asse por 10 minutos", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "misture leite condensado, creme de leite e limão", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "espalhe sobre a base fria", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "refrigere até firmar e finalize com raspas.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  panquecaBanana: {
    title: "Panqueca de banana",
    category: "rapidas",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    description: "Panquecas pequenas de banana e aveia para o café da manhã.",
    seasoning: "Canela e frutas frescas acompanham muito bem.",
    ingredients: ["1 banana madura", "1 ovo", "3 colheres de aveia", "1 pitada de canela", "Óleo para untar"],
    steps: [
      ["Organize os ingredientes", "Amasse a banana", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture ovo, aveia e canela", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "aqueça frigideira antiaderente untada", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "coloque pequenas porções", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "doure dos dois lados em fogo baixo e sirva.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  crepioca: {
    title: "Crepioca de queijo",
    category: "rapidas",
    time: "10 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    description: "Crepioca rápida com recheio de queijo derretido.",
    seasoning: "Orégano e tomate picado dão um toque especial.",
    ingredients: ["1 ovo", "2 colheres de goma de tapioca", "2 colheres de queijo ralado", "Sal", "Tomate ou orégano opcional"],
    steps: [
      ["Organize os ingredientes", "Bata o ovo com a tapioca e o sal", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "misture metade do queijo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "despeje em frigideira antiaderente", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "cozinhe em fogo baixo e vire", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "adicione o restante do queijo, dobre e aqueça até derreter.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
,
  mingauAveia: {
    title: "Mingau de aveia",
    category: "rapidas",
    time: "10 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    description: "Mingau quentinho e cremoso para começar o dia.",
    seasoning: "Canela, banana e uma gota de baunilha são boas opções.",
    ingredients: ["1 xícara de leite", "3 colheres de aveia", "1 colher de açúcar ou mel", "Canela a gosto", "Banana opcional"],
    steps: [
      ["Organize os ingredientes", "Misture leite e aveia em panela", "Sem fogo", 90, "Deixe os ingredientes separados antes de começar."],
      ["Prepare a base", "cozinhe em fogo baixo mexendo", "Sem fogo", 180, "Mantenha o fogo moderado para não queimar os temperos."],
      ["Cozinhe o preparo", "acrescente açúcar ou mel", "Fogo médio", 300, "Mexa ou acompanhe o preparo para cozinhar por igual."],
      ["Finalize a receita", "desligue quando atingir a cremosidade desejada", "Fogo médio", 420, "Confira a textura e ajuste o tempo conforme seu equipamento."],
      ["Sirva", "sirva com canela e banana.", "Fogo médio", 60, "Sirva em recipiente limpo e aproveite ainda fresco."]
    ]
  }
};

// ============================================
// CRIA OS CARTÕES EM PÁGINAS DE 4
// ============================================

const recipeGrid = document.getElementById("recipeGrid");
const recipeDots = document.getElementById("recipeDots");
const recipePrev = document.getElementById("recipePrev");
const recipeNext = document.getElementById("recipeNext");

let currentFilter = "todas";
let currentPage = 0;
let visibleRecipes = Object.entries(recipes);

// O contêiner recebe páginas horizontais.
if (recipeGrid) {
  recipeGrid.style.display = "flex";
  recipeGrid.style.flexWrap = "nowrap";
  recipeGrid.style.overflowX = "auto";
  recipeGrid.style.scrollSnapType = "x mandatory";
  recipeGrid.style.scrollBehavior = "smooth";
  recipeGrid.style.gap = "0";
}

function createRecipeCard(key, recipe) {
  const card = document.createElement("article");
  card.className = "recipe-card";
  card.dataset.category = recipe.category;

  
  const link = document.createElement("a");
  link.href = "receita.html?receita=" + encodeURIComponent(key);
  link.setAttribute("aria-label", "Abrir receita " + recipe.title);
  link.className = "recipe-card-image-link";

  const img = document.createElement("img");
  img.src = recipe.image;
  img.alt = recipe.title;
  img.loading = "lazy";

  const content = document.createElement("div");
  content.className = "recipe-card-content";

  const tag = document.createElement("span");
  tag.className = "recipe-tag";
  tag.textContent = recipe.difficulty + " · " + recipe.time;

  const title = document.createElement("h3");
  title.textContent = recipe.title;

  const description = document.createElement("p");
  description.textContent = recipe.description;

  const action = document.createElement("a");
  action.className = "recipe-link";
  action.href = "receita.html?receita=" + encodeURIComponent(key);
  action.textContent = "Ver receita →";
  action.setAttribute("aria-label", "Ver receita " + recipe.title);

  link.appendChild(img);
  content.append(tag, title, description, action);
  card.append(link, content);

  return card;
  

  return card;
}

function getFilteredRecipes() {
  return Object.entries(recipes).filter(([key, recipe]) => {
    return currentFilter === "todas" ||
      recipe.category.split(" ").includes(currentFilter);
  });
}

function renderRecipes() {
  if (!recipeGrid) return;

  visibleRecipes = getFilteredRecipes();
  recipeGrid.innerHTML = "";
  recipeDots.innerHTML = "";
  currentPage = 0;

  const totalPages = Math.ceil(visibleRecipes.length / 4);

  for (let page = 0; page < totalPages; page++) {
    const slide = document.createElement("div");
    slide.className = "recipe-slide";

    slide.style.cssText = [
      "flex:0 0 100%",
      "width:100%",
      "min-width:100%",
      "display:grid",
      "grid-template-columns:repeat(2,minmax(0,1fr))",
      "grid-template-rows:repeat(2,minmax(125px,1fr))",
      "gap:12px",
      "scroll-snap-align:start",
      "padding:4px 3px 10px",
      "box-sizing:border-box"
    ].join(";");

    const pageItems = visibleRecipes.slice(page * 4, page * 4 + 4);

    pageItems.forEach(([key, recipe]) => {
      slide.appendChild(createRecipeCard(key, recipe));
    });

    recipeGrid.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "recipe-dot";
    dot.type = "button";
    dot.textContent = page + 1;
    dot.setAttribute("aria-label", "Ir para página " + (page + 1));

    dot.addEventListener("click", () => {
      currentPage = page;
      scrollToRecipePage();
    });

    recipeDots.appendChild(dot);
  }

  updatePageControls();
}

function scrollToRecipePage() {
  if (!recipeGrid) return;

  recipeGrid.scrollTo({
    left: currentPage * recipeGrid.clientWidth,
    behavior: "smooth"
  });

  updatePageControls();
}

function updatePageControls() {
  if (!recipeDots) return;

  Array.from(recipeDots.children).forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPage);
  });

  if (recipePrev) recipePrev.disabled = currentPage === 0;
  if (recipeNext) recipeNext.disabled =
    currentPage >= recipeDots.children.length - 1;
}

if (recipePrev) {
  recipePrev.addEventListener("click", () => {
    currentPage = Math.max(0, currentPage - 1);
    scrollToRecipePage();
  });
}

if (recipeNext) {
  recipeNext.addEventListener("click", () => {
    currentPage = Math.min(
      recipeDots.children.length - 1,
      currentPage + 1
    );
    scrollToRecipePage();
  });
}

if (recipeGrid) {
  let scrollTimeout;

  recipeGrid.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      currentPage = Math.round(
        recipeGrid.scrollLeft / recipeGrid.clientWidth
      );
      updatePageControls();
    }, 80);
  });

  window.addEventListener("resize", () => {
    scrollToRecipePage();
  });
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderRecipes();
  });
});

renderRecipes();

// ============================================
// DETALHES DA RECEITA
// ============================================

const recipeTitleElement = document.getElementById("recipeTitle");

if (recipeTitleElement) {
  const params = new URLSearchParams(window.location.search);
  const recipeKey = params.get("receita") || "arroz";
  const recipe = recipes[recipeKey] || recipes.arroz;

  document.title = recipe.title + " — Chef em Casa";

  document.getElementById("recipeTitle").textContent = recipe.title;
  document.getElementById("recipeDescription").textContent = recipe.description;
  document.getElementById("recipeTime").textContent = "⏱ " + recipe.time;
  document.getElementById("recipeDifficulty").textContent = "✦ " + recipe.difficulty;

  document.getElementById("detailHero").style.backgroundImage =
    `url("${recipe.image}")`;

  document.getElementById("seasoningTip").textContent = recipe.seasoning;

  // Ingredientes
  const ingredientsList = document.getElementById("ingredientsList");
  const ingredientProgress = document.getElementById("ingredientProgress");

  recipe.ingredients.forEach((ingredient, index) => {
    const label = document.createElement("label");
    label.className = "ingredient-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "ingredient-" + index;

    const text = document.createElement("span");
    text.textContent = ingredient;

    checkbox.addEventListener("change", () => {
      label.classList.toggle("checked", checkbox.checked);
      updateIngredientProgress();
    });

    label.append(checkbox, text);
    ingredientsList.appendChild(label);
  });

  function updateIngredientProgress() {
    const checked = ingredientsList.querySelectorAll("input:checked").length;
    ingredientProgress.textContent =
      checked + "/" + recipe.ingredients.length;
  }

  updateIngredientProgress();

  // Etapas
  let currentStep = 0;
  let recipeFinished = false;

  const stepNumber = document.getElementById("stepNumber");
  const stepTitle = document.getElementById("stepTitle");
  const stepDescription = document.getElementById("stepDescription");
  const stepFire = document.getElementById("stepFire");
  const stepTime = document.getElementById("stepTime");
  const stepTip = document.getElementById("stepTip");
  const stepCounter = document.getElementById("stepCounter");
  const stepProgressBar = document.getElementById("stepProgressBar");
  const previousStep = document.getElementById("previousStep");
  const nextStep = document.getElementById("nextStep");

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return String(min).padStart(2, "0") + ":" +
      String(sec).padStart(2, "0");
  }

  function showStep() {
    const step = recipe.steps[currentStep];
    recipeFinished = false;

    stepNumber.textContent = String(currentStep + 1).padStart(2, "0");
    stepTitle.textContent = step[0];
    stepDescription.textContent = step[1];
    stepFire.textContent = step[2];
    stepTime.textContent = formatTime(step[3]);
    stepTip.textContent = "Dica do Chef: " + step[4];

    stepCounter.textContent =
      "Etapa " + (currentStep + 1) + " de " + recipe.steps.length;

    stepProgressBar.style.width =
      ((currentStep + 1) / recipe.steps.length * 100) + "%";

    previousStep.disabled = currentStep === 0;
    nextStep.disabled = false;
    nextStep.textContent =
      currentStep === recipe.steps.length - 1
        ? "Finalizar receita ✓"
        : "Próxima etapa →";

    stopTimer();
    remainingSeconds = step[3];
    updateTimerDisplay();
    stopSpeech();
    audioStatus.textContent = "Etapa pronta para ouvir.";
  }

  previousStep.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep();
    }
  });

  nextStep.addEventListener("click", () => {
    if (currentStep < recipe.steps.length - 1) {
      currentStep++;
      showStep();
    } else {
      recipeFinished = true;
      stopTimer();
      stopSpeech();
      stepTitle.textContent = "Receita concluída!";
      stepDescription.textContent =
        "Parabéns! Você chegou ao final do preparo. Aproveite sua refeição!";
      stepTip.textContent = "Continue praticando e descubra novas receitas.";
      nextStep.disabled = true;
      timerStatus.textContent = "Bom apetite!";
    }
  });

  // Temporizador
  const timerDisplay = document.getElementById("timerDisplay");
  const timerStatus = document.getElementById("timerStatus");
  const timerStart = document.getElementById("timerStart");
  const timerPause = document.getElementById("timerPause");
  const timerReset = document.getElementById("timerReset");

  let remainingSeconds = recipe.steps[0][3];
  let timerInterval = null;
  let timerDeadline = null;

  function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(Math.max(0, remainingSeconds));
  }

    // SOM DE AVISO DO TEMPORIZADOR
  let timerAudioContext = null;

  function prepareTimerSound() {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!timerAudioContext && AudioContextClass) {
      timerAudioContext = new AudioContextClass();
    }

    if (
      timerAudioContext &&
      timerAudioContext.state === "suspended"
    ) {
      timerAudioContext.resume();
    }
  }

  function playTimerSound() {
    if (!timerAudioContext) return;

    const oscillator = timerAudioContext.createOscillator();
    const gain = timerAudioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      880,
      timerAudioContext.currentTime
    );

    gain.gain.setValueAtTime(
      0.001,
      timerAudioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.18,
      timerAudioContext.currentTime + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      timerAudioContext.currentTime + 0.45
    );

    oscillator.connect(gain);
    gain.connect(timerAudioContext.destination);

    oscillator.start();
    oscillator.stop(timerAudioContext.currentTime + 0.5);
  }

  function stopTimer() {
    if (timerInterval !== null) clearInterval(timerInterval);
    timerInterval = null;
    timerDeadline = null;
  }
    
    if (timerAudioContext &&
      timerAudioContext.state === "suspended") {
      timerAudioContext.resume();
    }
  }
  
  function playTimerSound() {
    if (!timerAudioContext) return;
    
    const oscillator = timerAudioContext.createOscillator();
    const gain = timerAudioContext.createGain();
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      880,
      timerAudioContext.currentTime
    );
    
    gain.gain.setValueAtTime(
      0.001,
      timerAudioContext.currentTime
    );
    
    gain.gain.exponentialRampToValueAtTime(
      0.18,
      timerAudioContext.currentTime + 0.03
    );
    
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      timerAudioContext.currentTime + 0.45
    );
    
    oscillator.connect(gain);
    gain.connect(timerAudioContext.destination);
    
    oscillator.start();
    oscillator.stop(timerAudioContext.currentTime + 0.5);
  }
  {
    if (timerInterval !== null) clearInterval(timerInterval);
    timerInterval = null;
    timerDeadline = null;
  }

  function timerTick() {
    if (timerDeadline === null) return;

    remainingSeconds = Math.max(
      0,
      Math.ceil((timerDeadline - Date.now()) / 1000)
    );

    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      stopTimer();
      timerStatus.textContent = "Tempo encerrado! Confira o preparo.";

      if ("vibrate" in navigator) navigator.vibrate([200, 100, 200]);

      if ("Notification" in window &&
          Notification.permission === "granted") {
        new Notification("Chef em Casa", {
          body: "O tempo da etapa terminou. Confira sua receita!"
        });
      }
    }
  }

  timerStart.addEventListener("click", () => {
  if (timerInterval !== null || recipeFinished) return;

  prepareTimerSound();

  if (remainingSeconds <= 0) {
    remainingSeconds = recipe.steps[currentStep][3];
  }

    timerDeadline = Date.now() + remainingSeconds * 1000;
    timerStatus.textContent = "Temporizador em andamento.";

    timerTick();

    if (timerDeadline !== null) {
      timerInterval = setInterval(timerTick, 250);
    }
  });

  timerPause.addEventListener("click", () => {
    if (timerInterval === null) return;

    timerTick();

    if (timerInterval !== null) {
      stopTimer();
      timerStatus.textContent = "Temporizador pausado.";
    }
  });

  timerReset.addEventListener("click", () => {
    stopTimer();
    remainingSeconds = recipe.steps[currentStep][3];
    updateTimerDisplay();
    timerStatus.textContent = "Temporizador reiniciado.";
  });
    // ==========================================
  // NARRAÇÃO DO CHEF - ÁUDIO HEYGEN
  // ==========================================
  
  const speakButton = document.getElementById("speakButton");
  const pauseAudioButton = document.getElementById("pauseAudioButton");
  const repeatButton = document.getElementById("repeatButton");
  const audioStatus = document.getElementById("audioStatus");
  
  let recipeAudio = null;
  
  function stopSpeech() {
    if (recipeAudio) {
      recipeAudio.pause();
      recipeAudio.currentTime = 0;
      recipeAudio = null;
    }
    
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }
  
  function speakCurrentStep() {
    // Áudio HeyGen da primeira etapa do arroz
    if (recipeKey === "arroz" && currentStep === 0) {
      if (!recipeAudio) {
        recipeAudio = new Audio("audio-etapa-1-ingredientes.wav");
        
        recipeAudio.addEventListener("ended", () => {
          audioStatus.textContent = "Instrução finalizada.";
        });
        
        recipeAudio.addEventListener("error", () => {
          audioStatus.textContent = "Erro ao carregar o áudio.";
        });
      }
      
      recipeAudio.play()
  .then(() => {
    audioStatus.textContent =
      "A Chef Marcia está falando com você...";
    
    timerStart.click();
  })
        .catch(() => {
          audioStatus.textContent =
            "Não foi possível reproduzir o áudio.";
        });
      
      return;
    }
    
    // Voz do navegador nas demais etapas
    if (!("speechSynthesis" in window)) {
      audioStatus.textContent =
        "Seu navegador não oferece narração por voz.";
      return;
    }
    
    window.speechSynthesis.cancel();
    
    const step = recipe.steps[currentStep];
    
    const text =
      "Vamos continuar com nossa receita de " + recipe.title + ". " +
      "Agora, nesta etapa, vamos " + step[0].toLowerCase() + ". " +
      step[1] + ". " +
      "A intensidade do fogo deve ser: " + step[2] + ". " +
      "Uma dica importante do Chef: " + step[4];
    
    const speech = new SpeechSynthesisUtterance(text);
    
    speech.lang = "pt-BR";
    speech.rate = 0.96;
    speech.pitch = 1.04;
    speech.volume = 1;
    
    speech.onstart = () => {
      audioStatus.textContent = "O Chef está falando com você...";
    };
    
    speech.onend = () => {
      audioStatus.textContent = "Instrução finalizada.";
    };
    
    speech.onerror = () => {
      audioStatus.textContent = "Não foi possível reproduzir a voz.";
    };
    
    window.speechSynthesis.speak(speech);
  }
  
  speakButton.addEventListener("click", speakCurrentStep);
  
  pauseAudioButton.addEventListener("click", () => {
    if (recipeAudio) {
      if (recipeAudio.paused) {
        recipeAudio.play()
          .then(() => {
            audioStatus.textContent = "Continuando a narração...";
            timerStart.click(); 
          })
          .catch(() => {
            audioStatus.textContent = "Não foi possível continuar o áudio.";
          });
      } else {
  recipeAudio.pause();
  timerPause.click();
  audioStatus.textContent = "Narração pausada.";
}
      
      return;
    }
    
    if (!("speechSynthesis" in window)) return;
    
    if (window.speechSynthesis.speaking &&
      !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
timerPause.click();
audioStatus.textContent = "Narração pausada.";
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
timerStart.click();
audioStatus.textContent = "Continuando narração.";
    } else {
      speakCurrentStep();
    }
  });
  
  repeatButton.addEventListener("click", () => {
    stopSpeech();
    speakCurrentStep();
  });
  
  // Inicializa a primeira etapa
  showStep();
}


