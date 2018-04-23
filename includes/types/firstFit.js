function allocateFF(p){ //Where p is the passed process
    let i=0; //i is the memory blocks counter
    let waitingCheck=true;
    while(i<memoryBlocksNumber){
        if(memory[i].blockType=="hole" && p.size==memory[i].size){
            memory[i].blockType="process";
            memory[i].blockName=p.name;
            waitingCheck=false;
            break;
        }
        else if(memory[i].blockType=="hole" && p.size<memory[i].size){
            let complexBlockStart=memory[i].startingAt;
            let complexBlockEnd=memory[i].endingAt;
            let complexBlockSize=memory[i].size;
            memory.splice(i, 0, new Block("process", p.name, complexBlockStart, complexBlockStart+p.size, p.size)); //arr.splice(index, 0, item); to insert an item in an array            
            memory[i+1].startingAt=complexBlockStart+p.size;
            memory[i+1].size=complexBlockSize-p.size;
            waitingCheck=false;
            break;
        }
        i++;
    }
    if(waitingCheck){
        p.isWaiting=true;
    }
};


function deallocateFF(){

}