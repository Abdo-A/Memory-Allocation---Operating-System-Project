function deallocateFF(p){
    let i=0; //i is the memory blocks counter

    let deallocatedCheck=false;

    while(i<memoryBlocksNumber){
        if(memory[i].blockName==p.name){
            memory[i].blockType="hole";
            memory[i].blockName=`hole${holesNumber+1}`;
            holesNumber++;
            deallocatedCheck=true;
            break;
        }
        i++;
    }
    if(!deallocatedCheck){
        return 0;
    } else {
        p.state="deallocated";
        mixConsecutiveHoles();
        return 1;        
    }

};