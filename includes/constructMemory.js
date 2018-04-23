function constructMemory(){

    currentMemoryPosition=0;
    lastMemoryPosition=holesArray[holesNumber-1].endingAt;

    let i=0; //i is the memory blocks counter
    let j=0; //j is the holes counter

    while(j<=holesNumber-1){
        if(holesArray[j].startingAt==currentMemoryPosition){
            memory[i]=new Block("hole", currentMemoryPosition, holesArray[j].endingAt, holesArray[j].endingAt-currentMemoryPosition);
            currentMemoryPosition=holesArray[j].endingAt;
            j++;
        } else {
            memory[i]=new Block("nothing", currentMemoryPosition, holesArray[j].startingAt, holesArray[j].startingAt-currentMemoryPosition);            
            currentMemoryPosition=holesArray[j].startingAt;            
        }
        i++;
    }
    memoryBlocksNumber=i;
    emptyMemory=memory.slice(); // to copy the array by value
}