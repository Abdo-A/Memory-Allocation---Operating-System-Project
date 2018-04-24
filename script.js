
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
    for(let i=0;i<processesNumber;i++){

        test.innerHTML+=`<b>${processesArray[i].name}</b>
        <button onclick="execute(${i}, 'allocate')">Allocate</button>
        <button onclick="execute(${i}, 'deallocate')">Deallocate</button>
        <br>`;
    }
}

function execute(i, task){
    absorbInfoFromInputs();
    if(type=="firstFit"&&task=="allocate"){
        allocateFF(processesArray[i]);
        draw();
    }
    else if(type=="bestFit"&&task=="allocate"){
        allocateBF(processesArray[i]);
        draw();
    }
    else if(type=="worstFit"&&task=="allocate"){
        allocateWF(processesArray[i]);
        draw();
    }
    else {
        deallocate(processesArray[i]);
        draw();
    }
};

