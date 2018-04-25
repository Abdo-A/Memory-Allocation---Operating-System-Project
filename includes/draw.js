function draw(){
    answer.innerHTML=``;
    
    for(let i=0;i<memoryBlocksNumber;i++){
        //answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
        answer.innerHTML+=`<div
            style="
                width:100px;height:${memory[i].size}cm;background-color:#${Math.floor(Math.random()*(999999-111111+1))+111111}
            "
        >${memory[i].blockType}</div>`;
    }


    // answer.innerHTML+=`We will use <b>${type}</b>
    // <br>
    // Memory:<br>`;

    // for(let i=0;i<memoryBlocksNumber;i++){
    //     answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
    //     answer.innerHTML+=`<br>`;
    // }
}