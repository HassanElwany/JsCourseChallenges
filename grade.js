const studentScore = 15

const totalScore = 20

const gradeCalc = function () {

 let scorePercentage = (studentScore * 100) / totalScore
 
 let studentClass = ``
 if (scorePercentage >= 90) {

      studentClass = `A`

 } else if (scorePercentage >= 80 ){

      studentClass = `B`

 }else if (scorePercentage >= 70){

     studentClass = `C`

 }else if (scorePercentage >= 60 ){
      studentClass = `D`

 }else if (scorePercentage >= 0 ){
      studentClass = `F`
 } else {
     studentClass = `Something wrong`
 }
 return `The Student Score Is: ${studentScore} which is mean the student class is: ${studentClass} from total score it was: ${totalScore}`

}
let final = gradeCalc()

console.log(final)

