function handleAddAHole(){
    holesNumber++;    
    holesInput.innerHTML+=`
        Hole ${holesNumber}
        <input placeholder="Name" type="hidden" id="hole${holesNumber}Name" value="Hole${holesNumber}"/>
        <input type="text" placeholder="Size" id="hole${holesNumber}Size">
        <input type="text" placeholder="Starting From" id="hole${holesNumber}StartingAt"><br>
    `;
    routine();
}

function handleAddAProcess(){
    processesNumber++;    
    processesInput.innerHTML+=`
        Process ${processesNumber}
        <input placeholder="Name" type="hidden" id="process${processesNumber}Name" value="Process${processesNumber}"/>        
        <input type="text" placeholder="Size" id="process${processesNumber}Size"><br>
    `;
    routine();
}

function handleTypeSelect(){
    selectCheck=true;
    routine();
}