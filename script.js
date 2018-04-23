
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

    if(type=="firstFit"){
        console.log(memory);
        allocateFF(processesArray[0]);
        console.log(memory);
    }
    if(type=="bestFit"){

    }
    if(type=="worstFit"){

    }
    //draw();
}
