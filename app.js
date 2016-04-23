$('form').submit(function (e) {
    e.preventDefault();
})

var roster = [];

var Player = function (name, position, numbr) {
    this.playerName = name;
    this.playerPosition = position;
    this.playerNumber = numbr;
}


$('form').submit(add)
function add() {

    var nameVal = $("#name").val();
    var positionVal = $("#position").val();
    var numberVal = $("#number").val();
    var player = new Player(nameVal, positionVal, numberVal);
    roster.push(player)

    draw();

}

//   var card = $('<div class="player-card"></div');
//   var html = $('#playerCardTemplate').html();
//   console.log('Card: ', html);

//   $('#roster').append(card);

function draw() {
    $(".player-roster").empty()
    for (var i = 0; i < roster.length; i++){
        var current = roster[i];
        $(".player-roster").append(
            '<div class="player-card "> ' +
            '<button>Remove</button>' +'<br>' +
            '<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" />' + 
            '<br>' + '<br>' + 
            '<span> playername:' + current.playerName + '</span><br>' +
            '<span> position:' + current.playerPosition + '</span><br>' +
            '<span> number:' + current.playerNumber + '</span>' +
            '</div>'
        )
    }
}

$("player-roster").on("click",function)



