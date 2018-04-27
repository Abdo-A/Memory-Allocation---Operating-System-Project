function draw(){
    answer.innerHTML=``;

    let memoryHeight=memory[memoryBlocksNumber-1].endingAt;
    
    for(let i=0;i<memoryBlocksNumber;i++){
        //answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
        
        let blockHeight=(memory[i].size / memoryHeight) * 50;
        let labelTop=(memory[i].size / memoryHeight) * 50 - (0.2*(memory[i].size / memoryHeight) * 50);
        let blockColorCode=Math.floor(Math.random()*(999999-111111+1))+111111;

        if(i==memoryBlocksNumber-1){
            answer.innerHTML+=`
            <div class="memoryBlockContainer">
                <h5 class="startingAtLabel label">${memory[i].startingAt}</h5>            
                <div
                class="memoryBlock"
                style="width:100px;
                height:${blockHeight}vh;
                background-color:#${blockColorCode}"
                >
                ${memory[i].blockType}
                </div>
                <h5 class="endingAtLabel label">${memory[i].endingAt}</h5>
            </div>
            `;
        }
        else {
            answer.innerHTML+=`
            <div class="memoryBlockContainer">
                <h5 class="startingAtLabel label">${memory[i].startingAt}</h5>
                <div
                class="memoryBlock"
                style="width:100px;
                height:${blockHeight}vh;
                background-color:#${blockColorCode}"
                >
                ${memory[i].blockType}
                </div>
            </div>
            `;
        }
        
    }
}