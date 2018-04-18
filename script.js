
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
    type=document.getElementById("type").value;
    draw();
}
