var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function(){
    setGame(); //when page load the setgame function will be called
}

function setGame(){
    board = [ //defining the board
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    //iterating rows and columns
    for (let r = 0; r< rows; r++){
        for (let c = 0; c<columns; c++){
            // creates the div tage
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            //adds the id to div tag
            tile.id = r.toString()+"-"+c.toString();
            let num = board[r][c];
            // update the style everytime tiles moves
            updateTile(tile,num);
            // adding the tile div tag in the board
            document.getElementById("board").append(tile);
        }
    }
     //create 2 to begin the game
     setTwo();
     setTwo();
}

function updateTile(tile, num){
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if (num>0){
        tile.innerText = num.toString();
        if (num <= 4096){
            tile.classList.add("x"+num.toString());
        }
        else{
            tile.classList.add("x8192");
        }
    }
}

document.addEventListener('keyup', (e)=>{
    if (e.code == "ArrowLeft"){
        slideLeft();
        // after each slide we generate 2
        setTwo();
    }
    else if(e.code == "ArrowRight"){
        slideRight();
        setTwo();
    }
    else if(e.code == "ArrowUp"){
        slideUp();
        setTwo();
    }
    else if(e.code == "ArrowDown"){
        slideDown();
        setTwo();
    }
    document.getElementById("score").innerText = score;
})

function filterZero(row){
    return row.filter(num => num!=0); // removes the zeroes
}

function slide(row){
    // step 1
    row = filterZero(row);
    // slide
    for (let i = 0; i< row.length-1; i++){
        // check every 2
        if (row[i] == row[i+1]){
            // sliding and updating the value
            row[i] *= 2;
            // after the slide the row will become 0
            row[i+1] = 0;
            // counting the score
            score += row[i];
        }
        // [2,2,2] --> [4,0,2]
    }
    row = filterZero(row);
    // add zeroes back (step 4)
    while(row.length < columns){
        row.push(0);
    }
    return row;
}

function slideLeft(){
    // step 1: clear zeroes --> [2,2,2,0]
    // step 2: Merge --> [2,2,2] --> [4,0,2]
    // step 3: clear zeroes --> [4,2]
    // step 4: put the zeroes back

    for (let r = 0; r < rows; r++){
        let row = board[r];
        row = slide(row);
        // update the row back to board
        board[r] = row;
        // update html part also
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            let num = board[r][c];
            updateTile(tile,num);
    }
}

}

function slideRight(){
    // step 1: clear zeroes --> [2,2,2,0]
    // step 2: Reverse --> [2,2,2,0] --> [0,2,2,2]
    // step 3: clear zeroes --> [4,2]
    // step 4: put the zeroes back and reverse back

    for (let r = 0; r < rows; r++){
        let row = board[r];
        row.reverse();
        row = slide(row);
        // update the row back to board
        board[r] = row.reverse();
        // update html part also
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            let num = board[r][c];
            updateTile(tile,num);
    }
}

}

function slideUp(){
    // step 1: similar to slide left
    // step 2: rather visualise it in horizontal direction
    // step 3: fill it back to the board

    for (let c = 0; c < columns; c++){
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        // assign each column back to corresponding row
        // board[0][c] = row[0];
        // board[1][c] = row[1];
        // board[2][c] = row[2];
        // board[3][c] = row[3];
        // update html part also
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            let num = board[r][c];
            updateTile(tile,num);
    }
}

}

function slideDown(){
    // step 1: similar to slide right
    // step 2: rather visualise it in horizontal direction
    // step 3: fill it back to the board

    for (let c = 0; c < columns; c++){
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        // assign each column back to corresponding row
        row.reverse();
        // board[0][c] = row[0];
        // board[1][c] = row[1];
        // board[2][c] = row[2];
        // board[3][c] = row[3];
        // update html part also
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            let num = board[r][c];
            updateTile(tile,num);
    }
}

}

function setTwo(){
    // for ensuring count gets modified
    if (!hasEmptyTile()){
        return;
    }
    let found = false;
    while(!found){
        // random r,c 
        let r = Math.floor(Math.random()*rows);
        let c = Math.floor(Math.random()*columns);
        if (board[r][c] == 0){
            board[r][c] = 2;
            let tile = document.getElementById(r.toString()+"-"+c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found=true;
        }
    }
}

function hasEmptyTile(){
    let count = 0;
    for (let r = 0; r<rows; r++){
        for (let c= 0; c<columns; c++){
            if (board[r][c] == 0){ //at least one zero in the board
                return true;
            }
        }
    }
    return false;
}
