let list=[]
let sum=0
let hasBlackjack=false
let isAlive=false
let message=""
let messagehtml=document.getElementById("message")
let sumhtml=document.getElementById("sum")
let cardshtml=document.getElementById("cards")

let playerhtml=document.getElementById("player")
let player={
    name:"Abhishek",
    points:10
}
playerhtml.textContent+=player.name+": $"+player.points


function randomcard(){
    let ans= Math.floor(Math.random()*13)+1
    if(ans>10){
        return 10
    } else if(ans===1){
        return 11
    } else{return ans}
}

function start(){
    isAlive=true
    let firstcard=randomcard()
    let secondcard=randomcard()
    list=[firstcard,secondcard]
    sum=firstcard+secondcard
    render()
}

function render(){
    sumhtml.textContent="Sum: "+ sum
    cardshtml.textContent="Cards: "
    for(let i=0; i<list.length; i++){
        cardshtml.textContent+=list[i]+", "
    }
    if(sum<=20){
        message="Do you want to draw a new card?"
    }else if(sum===21){
        message="Hurray! You won the game"
        hasBlackjack=true
    }else{
        message="You lost the game"
        isAlive=false
    }
    
    console.log(hasBlackjack)
    console.log(isAlive)
    console.log(message)

    messagehtml.textContent=message
    
}

function newcard() {
    if(hasBlackjack===false&&isAlive===true){
        let card=randomcard()
        sum+=card
        list.push(card)
        render()
    }
   
}





let fruits=["apple","orange","apple","apple","orange"]
let applehtml=document.getElementById("apple")
let orangehtml=document.getElementById("orange")

function shelf() {
    for(let i=0; i<fruits.length; i++) {
        if(fruits[i]==="apple"){
            applehtml.textContent+=" apple "
        } else {
            orangehtml.textContent+=" orange "
        }
    }
}

shelf()
 
// let mes=[
//     "hello",
//     "how are you",
//     "i am fine",
//     "nice to meet you",
//     "hi my name is abhishek"
// ]

// console.log(mes[0])
// console.log(mes[1])
// console.log(mes[2])
// console.log(mes[3])

// for(let i=0;i<mes.length;i+=1){
//     console.log(mes[i])
// }
