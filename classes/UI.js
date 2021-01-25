import Method from "./Method.js";

let questionsAll=[]
 let currentQuestion = 0;
export default class UI {
    static printCategories(categories){
        console.log(categories)
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static getElements(loadElements) {

        loadElements.forEach(element=>{
            const questionChoices=element.question
            const answerChoices=[...element.incorrect_answers]
        
            answerChoices.splice(Math.floor(Math.random() * 4) -1, 0, element.correct_answer)
            questionsAll.push(questionChoices)
            questionsAll.push(answerChoices)
    
        })
        this.printQuestions()

    }
    static printQuestions(){
        

          this.questionsItem =document.getElementById('question-item');  
          this.a_text =document.getElementById('a_text');
          this.b_text =document.getElementById('b_text');
          this.c_text =document.getElementById('c_text');
          this.d_text =document.getElementById('d_text');
         
        for (let i = 0; i < questionsAll.length; i++) {
            console.log(questionsAll[0])
            this.questionsItem.innerHTML = questionsAll[0]
            this.a_text.innerHTML = questionsAll[1][0]
            this.b_text.innerHTML = questionsAll[1][1]
            this.c_text.innerHTML = questionsAll[1][2]
            this.d_text.innerHTML = questionsAll[1][3]   
        } 
    }
    static nextQuestion() {
        console.log(questionsAll)
        Method.count()
        Method.cheked()
        Method.finishBtn()

        currentQuestion++

        this.questionsItem.innerHTML = questionsAll[currentQuestion++ + 1];
        this.a_text.innerHTML = questionsAll[currentQuestion+ 1][0]
        this.b_text.innerHTML = questionsAll[currentQuestion+ 1][1]
        this.c_text.innerHTML = questionsAll[currentQuestion+ 1][2]
        this.d_text.innerHTML = questionsAll[currentQuestion+ 1][3]

        Method.comproved()
        
    }
    // funcion del boton finalizar
    // mostrar los resultados de las respuestas correctas e incorrectas
    // quitar el campo de preguntas hasta que de iniciar
    // boton de cancelar
    // las buenas noches!!!!! x10.000.000.000.000.000.000.000.000.000rem

}