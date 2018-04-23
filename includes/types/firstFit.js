function allocateFF(p){ //Where p is the passed process
    let i=0; //i is the memory blocks counter
    while(i<memoryBlocksNumber){
        if(memory[i].blockType=="hole" && p.size==memory[i].size){
            memory[i].blockType="process";
            memory[i].blockName=p.name;
        }
        else if(memory[i].blockType=="hole" && p.size<memory[i].size){
            memory.splice(index, 0, item);            
        }
    }

    
};


function deallocateFF(){

}