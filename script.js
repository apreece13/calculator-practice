const container = document.querySelector("#answerID")

document.querySelector("#addBtn").addEventListener("click", event => {
    const numberOne = document.querySelector("#firstInteger").value
    const numberTwo = document.querySelector("#secondInteger").value

    var sum = parseInt(numberOne) + parseInt(numberTwo)

    container.innerHTML = `
<section>
    <h1>${sum}</h1>
</section>`

document.querySelector("#firstInteger").value = ""
document.querySelector("#secondInteger").value = ""

})

document.querySelector("#subtractBtn").addEventListener("click", event => {
    const numberOne = document.querySelector("#firstInteger").value
    const numberTwo = document.querySelector("#secondInteger").value

    var sum = parseInt(numberOne) - parseInt(numberTwo)

    container.innerHTML = `
<section>
    <h1>${sum}</h1>
</section>`

document.querySelector("#firstInteger").value = ""
document.querySelector("#secondInteger").value = ""

})

document.querySelector("#multiplicationBtn").addEventListener("click", event => {
    const numberOne = document.querySelector("#firstInteger").value
    const numberTwo = document.querySelector("#secondInteger").value

    var sum = parseInt(numberOne) * parseInt(numberTwo)

    container.innerHTML = `
<section>
    <h1>${sum}</h1>
</section>`

document.querySelector("#firstInteger").value = ""
document.querySelector("#secondInteger").value = ""

})

document.querySelector("#divisionBtn").addEventListener("click", event => {
    let numberOne = document.querySelector("#firstInteger").value
    let numberTwo = document.querySelector("#secondInteger").value

    var sum = parseInt(numberOne) / parseInt(numberTwo)

    container.innerHTML = `
<section>
    <h1>${sum}</h1>
</section>`

document.querySelector("#firstInteger").value = ""
document.querySelector("#secondInteger").value = ""

})





// At first I used onclick in the HTML to run these functions
// Then I reread the instructions and refactored them as event listeners

// function calculateAddition (){
//     const numberOne = document.querySelector("#firstInteger").value
//     const numberTwo = document.querySelector("#secondInteger").value

//     const result = parseInt(numberOne)+ parseInt(numberTwo)

//     document.getElementById("answerID").innerHTML= result
// }

// function calculateSubtraction (){
//     const numberOne = document.querySelector("#firstInteger").value
//     const numberTwo = document.querySelector("#secondInteger").value

//     const result = parseInt(numberOne)- parseInt(numberTwo)

//     document.getElementById("answerID").innerHTML= result
// }

// function calculateMultiplication (){
//     const numberOne = document.querySelector("#firstInteger").value
//     const numberTwo = document.querySelector("#secondInteger").value

//     const result = parseInt(numberOne)- parseInt(numberTwo)

//     document.getElementById("answerID").innerHTML= result
// }