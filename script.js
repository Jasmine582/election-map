//Creating two politicians
var makePolitician = function(name, color) {
  
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.color = color;
  
    
  //Tallying the Votes
    politician.electionNight= function() 
    {
      this.totalVotes = 0;
      
      for (var i =0; i < this.electionResults.length; i++) 
      {
        this.totalVotes =this.totalVotes + this.electionResults[i];
      }
    };
   
    
  return politician;
    
  }
  // Two politicians name & color
  var gamora = makePolitician("Gamora", [132, 17, 11]);
  var storm = makePolitician("Storm", [245, 141, 136]);
  
  //votes by states
 gamora.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
  storm .electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
  
  //Recount votes for these states
  gamora.electionResults[9]=1;
  gamora.electionResults[4]=17;
  gamora.electionResults[43]=1;
  
  storm.electionResults[9] =28;
  storm.electionResults[4] =38;
  storm.electionResults[43] =27;
  
  //state results
    var setStateResults= function(state) {
      theStates[state].winner = null;
      
     if (gamora.electionResults[state] > storm.electionResults[state]) {
  
          theStates[state].winner = gamora; 
          
  } else if (storm.electionResults[state] > gamora.electionResults[state]) {
  
  theStates[state].winner = storm;
  }
  
  
  
      
  // colors for winning states  
      
   var stateWinner= theStates[state].winner;
  if(stateWinner!==null) {
    theStates[state].rgbColor =stateWinner.color;
  }
    else {
      theStates[state].rgbColor =[11, 32, 57];
    }
      
  // State Results Table
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var can1RowName = body.children[0].children[0];
  var can1RowNameResults = body.children[0].children[1];
  var can2RowName = body.children[1].children[0];
  var can2RowNameResults= body.children[1].children[1];
  var winnerRow = body.children[2].children[0];
  var winnersName = body.children[2].children[1];
  
  //State results text
  stateName.innerText= theStates[state].nameFull;
  abbrev.innerText = "("+theStates[state].nameAbbrev+ ")";
 
  can1RowName.innerText = gamora.name;
  can1RowNameResults.innerText= gamora.electionResults[state];
  can2RowName.innerText = storm.name;
  can2RowNameResults.innerText= storm.electionResults[state];
  winnerRow.innerText = "Winner";
  
  if(theStates[state].winner === null) {
    winnersName.innerText ="Draw"
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
  
  };
  
  //total results
  gamora.electionNight();
  storm.electionNight();
  
  
  
  //declare a winner
  var winner="?";
  if (gamora.totalVotes > storm.totalVotes){
    winner = gamora.name;
  }else if (gamora.totalVotes < storm.totalVotes) {
    winner =storm.name;
  } else {
    winner="draw";
  }
  console.log("AND THE WINNER IS..."+winner+"!!!");
  
  // table header annoucement
  var countryTable= document.getElementById('countryResults');
  var row = countryTable.children[0].children[0];
  row.children[0].innerText=gamora.name;
  row.children[1].innerText=gamora.totalVotes;
  row.children[2].innerText=storm.name;
  row.children[3].innerText = storm.totalVotes;
  row.children[5].innerText = winner;
  