function addFunctionalButtons(){

    test.innerHTML='';
    test.innerHTML+=`
    <button id="allocateAllButton" class="allocationButton" onclick="executeAll('allocateAll')">Allocate All</button>
    <button id="deallocateAllButton" class="deallocationButton" onclick="executeAll('deallocateAll')">Deallocate All</button>
    <br>`;

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

    let allAllocatedCheck=0;
    let allDeallocatedCheck=0;
    for(let i=0;i<processesNumber;i++){
        if(processesArray[i].state=="allocated"){
            allAllocatedCheck++;
        }
        else if(processesArray[i].state=="deallocated"){
            allDeallocatedCheck++;
        }
    }
    if(allAllocatedCheck>=processesNumber){
        document.getElementById("allocateAllButton").setAttribute("disabled", "");
        document.getElementById("allocateAllButton").style.backgroundColor="rgba(14, 10, 10, 0.42)";        
        document.getElementById("deallocateAllButton").removeAttribute("disabled");
        document.getElementById("deallocateAllButton").style.backgroundColor="brown";                  
    }
    else if(allDeallocatedCheck>=processesNumber){
        document.getElementById("deallocateAllButton").setAttribute("disabled", "");
        document.getElementById("deallocateAllButton").style.backgroundColor="rgba(14, 10, 10, 0.42)";        
        document.getElementById("allocateAllButton").removeAttribute("disabled");
        document.getElementById("allocateAllButton").style.backgroundColor="brown";
    }

};