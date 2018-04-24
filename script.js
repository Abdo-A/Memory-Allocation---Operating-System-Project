
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

    draw();    


    for(let i=0;i<processesNumber;i++){

        test.innerHTML+=`<b>${processesArray[i].name}</b>
        <button id="a${i}" class="allocationButton" onclick="execute(${i}, 'allocate')">Allocate</button>
        <button id="d${i}" class="deallocationButton" onclick="execute(${i}, 'deallocate')">Deallocate</button>
        <br>`;
    }
    
    for(let i=0;i<processesNumber;i++){
        if(processesArray[i].state=="deallocated"){
            document.getElementById(`d${i}`).setAttribute("disabled", "");
            document.getElementById(`d${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
            document.getElementById(`a${i}`).removeAttribute("disabled");
            document.getElementById(`a${i}`).style.backgroundColor="brown";            
        } else if(processesArray[i].state=="allocated"){
            document.getElementById(`a${i}`).setAttribute("disabled", "");
            document.getElementById(`a${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
            document.getElementById(`d${i}`).removeAttribute("disabled");
            document.getElementById(`d${i}`).style.backgroundColor="brown"; 
        }
        
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
    
    if(processesArray[i].state=="deallocated"){
        document.getElementById(`d${i}`).setAttribute("disabled", "");
        document.getElementById(`d${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
        document.getElementById(`a${i}`).removeAttribute("disabled");
        document.getElementById(`a${i}`).style.backgroundColor="brown";            
    } else if(processesArray[i].state=="allocated"){
        document.getElementById(`a${i}`).setAttribute("disabled", "");
        document.getElementById(`a${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
        document.getElementById(`d${i}`).removeAttribute("disabled");
        document.getElementById(`d${i}`).style.backgroundColor="brown"; 
    }

};

