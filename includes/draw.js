function draw(){
    answer.innerHTML=``;
    
    answer.innerHTML+=`We will use <b>${type}</b>
    <br>
    Memory:`;

    for(let i=0;i<memoryBlocksNumber;i++){
        answer.innerHTML+=`<b>${memory[i].blockType}</b> ,size = ${memory[i].size} , from ${memory[i].startingAt} to ${memory[i].endingAt} `; 
        answer.innerHTML+=`<br>`;
    }
}


// answer.innerHTML+=`We have <b>${holesNumber}</b> Holes
// <br>`;
// for(let i=0;i<holesNumber;i++){
// answer.innerHTML+=`
// <b>${holesArray[i].name}</b> has the size of <b>${holesArray[i].size}</b>, starts at <b>${holesArray[i].startingAt}</b>, and ends at <b>${holesArray[i].endingAt}</b>
// <br>
// `;    
// }

// answer.innerHTML+=`<br><br> We have <b>${processesNumber}</b> Processes
// <br>`;
// for(let i=0;i<processesNumber;i++){
// answer.innerHTML+=`
// <b>${processesArray[i].name}</b> has the size of <b>${processesArray[i].size}</b>
// <br>
// `;
// }