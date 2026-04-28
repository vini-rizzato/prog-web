const alunos = [
  { nome: "Ana", nota1: 7, nota2: 8 },
  { nome: "Bruno", nota1: 5, nota2: 6 },
  { nome: "Carlos", nota1: 9, nota2: 10 },
  { nome: "Diana", nota1: 4, nota2: 7 },
  { nome: "Eduardo", nota1: 6, nota2: 6 }
]

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2

const alunosComMedia = alunos.map(aluno => ({
  ...aluno,
  media: calcularMedia(aluno.nota1, aluno.nota2)
}))

const aprovados = alunosComMedia.filter(aluno => aluno.media >= 6)
const reprovados = alunosComMedia.filter(aluno => aluno.media < 6)

const mediaGeral = alunosComMedia.reduce((acc, aluno) => acc + aluno.media, 0) / alunosComMedia.length

const alunosOrdenados = [...alunosComMedia].sort((a, b) => b.media - a.media)

console.log(`Alunos com média: ${JSON.stringify(alunosComMedia)}`)
console.log(`Aprovados: ${JSON.stringify(aprovados)}`)
console.log(`Reprovados: ${JSON.stringify(reprovados)}`)
console.log(`Média geral da turma: ${mediaGeral}`)
console.log(`Alunos ordenados por média: ${JSON.stringify(alunosOrdenados)}`)