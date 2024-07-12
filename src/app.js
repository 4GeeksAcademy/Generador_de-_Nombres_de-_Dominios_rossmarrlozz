const pronoun = ["Las", "Los", "Sus", "Nuestros", "Mis"];
const adj = ["felices", "divertidos", "aburridos", "hermosos"];
const noun = ["practicas", "juegos", "primos", "ojos"];
const dom = [".com", ".es", ".net", ".mx"];

for(let i = 0; i <pronoun.length; i++) {
  for(let j = 0; j <adj.length; j++) {
    for(let k = 0; k <noun.length; k++) {
      for(let l = 0; l <dom.length; l++) {
        const dominio = `${pronoun[i]}${adj[j]}${noun[k]}${dom[l]}`;
        console.log(dominio);
      }
    }
  }
}
