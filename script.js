
//Adding a new Hole Info Inputs
function addAHole(){
    handleAddAHole();
}

//Adding a new Process Info Inputs
function addAProcess(){
    handleAddAProcess();
}

//Showing the result
function impress(){

    absorbInfoFromInputs();

    constructMemory();

    console.log(memory);
    console.log(memoryBlocksNumber);

    if(type=="firstFit"){
    }
    if(type=="bestFit"){

    }
    if(type=="worstFit"){

    }
    //draw();
}

function allocateFirstProcess(){
    allocateBF(processesArray[0]);
    console.log(memory);
}

function deallocateFirstProcess(){
    deallocate(processesArray[0]);
    console.log(memory);
}