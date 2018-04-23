function deallocateFF(p){
    let i=0; //i is the memory blocks counter

    while(i<memoryBlocksNumber){
        if(memory[i].blockName==p.name){
            memory[i].blockType="hole";
            memory[i].blockName=`hole${holesNumber+1}`;
            holesNumber++;
            p.state="deallocated";
            break;
        }
    }

};