// ação, comédia, drama, romance

// homem aranha 3, +12, ação, aventura
// meu malvado favorito 4, LIVRE, fantasia, aventura, comédia

// como eu antes de você,+12, drama, romance
// deadpool, +16, ação,comédia
// o auto da compadecida, +12, comédia, aventura
// fala sério,mãe, +12, comédia,


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("17");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "fala sério mãe";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "meu malvado favorito";          
        } else{
         return "como eu era antes de você";
        }
      } else {
        if (gostaDeFantasia) {
          return "deadpool";
        } else {
          return "o auto da compadecida";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "simplismente acontece";
    } else {
      return "homem aranha";
    }
  }













}
