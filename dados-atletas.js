
class Atleta {
        constructor(nome, idade, peso, altura, notas) {
                this.nome = nome;
                this.idade = idade;
                this.peso = peso;
                this.altura = altura;
                this.notas = notas;
        }

        //para calcular a categoria do atleta;
        calculaCategoria() {

                if(this.idade >= 9 && this.idade <= 11) {
                       return "Infantil" 
                }else if(this.idade === 12 || this.idade ===13){
                        return "Juvenil"
                }else if(this.idade === 14 || this.idade === 15){ 
                        return "Intermediário"
                }else if(this.idade >= 16 && this.idade <= 30){
                        return "Adulto"
                }else {
                        return "Demais Idades"
                }
        }

        // para calcular o IMC do atleta;
        calculaIMC() {}

        //para calcular a média válida do atleta
        calculaMediaValida() {}

        //que retorna o nome do atleta
        obtemNomeAtleta() {
                return `Nome: ${this.nome}`
        }

        //que retorna a idade do atleta
        obtemIdadeAtleta() {
                return `Idade: ${this.idade}`
        }

        //que retorna o peso do atleta
        obtemPesoAtleta() {
                return `Peso: ${this.peso}`
        }

        //que retorna as notas do atleta
        obtemNotasAtleta() {
                return this.notas
        }

        //que retorna a categoria do atleta
        obtemCategoria() {
                return this.calculaCategoria()
        }

        //que retorna o IMC do atleta
        obtemIMC() {
                //imc = peso / (altura x altura)
                return this.peso/(this.altura * this.altura)
        }

        //que retorna a média válida do atleta
        obtemMediaValida(){
                 const notasOrdenadas = [...this.notas].sort((a, b) => a - b);

                 // Remove a menor e a maior nota
                 notasOrdenadas.shift();
                 notasOrdenadas.pop();

                 const soma = notasOrdenadas.reduce(
                         (acc, nota) => acc + nota,
                         0,
                 );
                 return soma / notasOrdenadas.length;

        }


}

const atleta = new Atleta( "Cesar Abascal",30,80,1.7,[10, 9.34, 8.42, 10, 7.88]);

console.log(`${atleta.obtemNomeAtleta()}`);
console.log(`${atleta.obtemIdadeAtleta()}`);
console.log(`${atleta.obtemPesoAtleta()}`);
console.log("Altura:", atleta.altura);
console.log("Notas: ",atleta.obtemNotasAtleta().join(", "));
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média Válida: ${atleta.obtemMediaValida()}`);


        