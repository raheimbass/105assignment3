//create a constructor
// function Song(title,description,genre,artist){
//     this.title=title;
//     this.description=description;
//     this.genre=genre;
//     this.artist=artist;
// }
// //create two objects

// let song1 = new Song ("Stop crying your heart", "The album","Rock","Oasis");
// let song2 = new Song ("Stop crying your heart", "The album","Rock","Oasis");
// let song3 = new Song ("Stop crying your heart", "The album","Rock","Oasis");
// let song4 = new Song ("Stop crying your heart", "The album","Rock","Oasis");

// //array
// playlist.push(song1,song2,song3,song4);

// for(let i=0;i<4;i++){
//     document.write(`<p> ${playlist[i].title} </p>`);
// }

let players = []


function FootballPlayer(name, position, age, team) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.team = team;
}

let player1 = new FootballPlayer("Cristiano Ronaldo", "Forward", 36, "Manchester United");
let player2 = new FootballPlayer("Lionel Messi", "Forward", 34, "Paris Saint-Germain");
let player3 = new FootballPlayer("Neymar Jr.", "Forward", 29, "Paris Saint-Germain");
let player4 = new FootballPlayer("Kevin De Bruyne", "Midfielder", 30, "Manchester City");


// console.log("Player 1:", player1);
// console.log("Player 2:", player2);
// console.log("Player 3:", player3);
// console.log("Player 4", player4);

players.push(player1,player2,player3,player4);

for(let i=0;i<4;i++){
    document.write(`<p> ${players[i].name}`)
}