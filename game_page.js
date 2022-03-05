player1_name=localStorage.getItem("player1_key")
player2_name=localStorage.getItem("player2_key")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML = player1_name+" : "
document.getElementById("player2_name").innerHTML = player2_name+" : "
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("questionturn").innerHTML = "questionturn : "+player1_name
document.getElementById("answerturn").innerHTML = "answerturn : "+player2_name
function Send(){
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    actual = Number(num1) * Number(num2)
    qtag = "<h3 id = 'word_display'>q." + num1  + "x" + num2 + "</h3>"
    itag = "<br>answer:<input type = 'number' id = 'inputbox'> "
    btag = "<br><br><button class = 'btn btn-info' onclick = 'check()'>check</button>"
    row = qtag + itag + btag
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}
questionturn = "player 1"
answerturn = "player 2"
function check(){
    get_answer = document.getElementById("inputbox").value
    if(actual == get_answer){
        if(answerturn == "player 1"){
            player1_score += 1
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else if(answerturn == "player 2"){
            player2_score += 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (questionturn == "player 1"){
        questionturn = "player 2"
        document.getElementById("questionturn").innerHTML = "questionturn : "+player2_name
    }
    else{
        questionturn = "player 1"
        document.getElementById("questionturn").innerHTML = "questionturn : "+player1_name
    }
    if(answerturn == "player 2"){
        answerturn = "player 1"
        document.getElementById("answerturn").innerHTML = "answerturn : "+player1_name
    }
    else {
        answerturn = "player 2"
        document.getElementById("answerturn").innerHTML = "answerturn : "+player2_name
    }
    document.getElementById("output").innerHTML = ""
}