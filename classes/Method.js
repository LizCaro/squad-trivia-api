let contNumNext = 0
let selectedAnswers = []
let correct = []
let points = 0
let nextCorrects = 0

export default class Method {
    static showContainer() {
        const questionsContainer = document.getElementById('questionss-container')
        questionsContainer.style.display = "block"
    }
    static getCorrects(answers) {
        answers.forEach(element => {
            const corrected = element.correct_answer
            correct.push(corrected)
        });
    }
    static count() {
        contNumNext++
    }

    static cheked() {
        const rbs = document.querySelectorAll('input[name="answer"]')
        let selectValue;
        for (const rb of rbs) {
            if(rb.checked) {
            document.getElementById('a').setAttribute('value', a_text.innerHTML)
            document.getElementById('b').setAttribute('value', b_text.innerHTML)
            document.getElementById('c').setAttribute('value', c_text.innerHTML)
            document.getElementById('d').setAttribute('value', d_text.innerHTML)
            selectValue = rb.value
            selectedAnswers = selectValue
            console.log(selectedAnswers)
            rb.checked = false;  
            }
        }
    }
    static comproved() {
        if(selectedAnswers === correct[nextCorrects]) {
            points += 1
            nextCorrects += 1
            console.log('correcta')
        } else {
            nextCorrects += 1
            console.log('incorrecta')
        }
        console.log(points)

    }
    static finishBtn() {
        const totalQuestions = document.getElementById('total-questions').value;
        const nextQuestions = document.querySelector('#next-questions')
        const finishQuestions = document.querySelector('#finish-questions')

        if (contNumNext === totalQuestions - 1) {
            nextQuestions.style.display = 'none';
            finishQuestions.style.display = 'inline-block'
            //this.result()
        
        }
    }
    static printResults() {
        const resultTrivia = document.getElementById('modal-body');
        resultTrivia.innerHTML = `sacaste ${points} correctas de ${nextCorrects+1}`        

        //alert(`sacaste ${points} correctas de ${totalQuestions}`)

    //     <div class="alert alert-primary">
    //     d
    // </div>
    }
    

    // static result(){
    // console.log("total de puntaje"+points)
    // }
}