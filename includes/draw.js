function draw(){
    answer.innerHTML=``;
    
    answer.innerHTML+=`We will use <b>${type}</b>
    <br>
    Memory:<br>`;

    for(let i=0;i<memoryBlocksNumber;i++){
        answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
        answer.innerHTML+=`<br>`;
    }
}