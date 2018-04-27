function draw(){
    answer.innerHTML=``;

    let memoryHeight=memory[memoryBlocksNumber-1].endingAt;
    
    for(let i=0;i<memoryBlocksNumber;i++){
        //answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
        answer.innerHTML+=`
        <div class="memoryBlockContainer">
            <h3 class="startingAtLabel label">${memory[i].startingAt}</h3>
            <div
            class="memoryBlock"
            style="width:100px;
            height:${(memory[i].size / memoryHeight) * 50}vh;
            background-color:#${Math.floor(Math.random()*(999999-111111+1))+111111}"
            >
            ${memory[i].blockType}
            </div>
            <h3 class="endingAtLabel label">${memory[i].endingAt}</h3>
        </div>
        `;
    }


    // answer.innerHTML+=`We will use <b>${type}</b>
    // <br>
    // Memory:<br>`;

    // for(let i=0;i<memoryBlocksNumber;i++){
    //     answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
    //     answer.innerHTML+=`<br>`;
    // }
}