function execute(i, task){

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
    else if(task=="deallocate"){
        deallocate(processesArray[i]);
        draw();
    }
    
    //To disable or enable each two buttons of each process
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

    //To disable or enable the two ALL buttons
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
    }
    else {
        document.getElementById("allocateAllButton").removeAttribute("disabled");
        document.getElementById("allocateAllButton").style.backgroundColor="brown";
    }
    if(allDeallocatedCheck>=processesNumber){
        document.getElementById("deallocateAllButton").setAttribute("disabled", "");
        document.getElementById("deallocateAllButton").style.backgroundColor="rgba(14, 10, 10, 0.42)";        
    } else {
        document.getElementById("deallocateAllButton").removeAttribute("disabled");
        document.getElementById("deallocateAllButton").style.backgroundColor="brown";
    }

};




function executeAll(task){

    if(task=="allocateAll"){
        for(let i=0;i<processesNumber;i++){
            if(type=="firstFit"){
                allocateFF(processesArray[i]);                
            }
            else if(type=="bestFit"){
                allocateBF(processesArray[i]);                
            }
            else if(type=="worstFit"){
                allocateWF(processesArray[i]);
            }
            
            //Disable all the allocation buttons
            if(processesArray[i].state=="allocated"){            
                document.getElementById(`a${i}`).setAttribute("disabled", "");
                document.getElementById(`a${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
                document.getElementById(`d${i}`).removeAttribute("disabled");
                document.getElementById(`d${i}`).style.backgroundColor="brown"; 
            }

        }
        draw();
    }

    else if(task=="deallocateAll"){
        for(let i=0;i<processesNumber;i++){
            deallocate(processesArray[i]);
            
            //Disable all the deallocation buttons
            if(processesArray[i].state=="deallocated"){
                document.getElementById(`d${i}`).setAttribute("disabled", "");
                document.getElementById(`d${i}`).style.backgroundColor="rgba(14, 10, 10, 0.42)";
                document.getElementById(`a${i}`).removeAttribute("disabled");
                document.getElementById(`a${i}`).style.backgroundColor="brown";
            }
            
        }
        draw();
    }

    //To disable or enable the two ALL buttons
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
    }
    else {
        document.getElementById("allocateAllButton").removeAttribute("disabled");
        document.getElementById("allocateAllButton").style.backgroundColor="brown";
    }
    if(allDeallocatedCheck>=processesNumber){
        document.getElementById("deallocateAllButton").setAttribute("disabled", "");
        document.getElementById("deallocateAllButton").style.backgroundColor="rgba(14, 10, 10, 0.42)";        
    }
    else {
        document.getElementById("deallocateAllButton").removeAttribute("disabled");
        document.getElementById("deallocateAllButton").style.backgroundColor="brown";
    }
};