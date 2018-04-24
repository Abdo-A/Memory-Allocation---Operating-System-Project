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