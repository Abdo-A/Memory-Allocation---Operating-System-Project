class Hole{
    constructor(name, size, startingAt, endingAt, isEmpty=true){
        this.name=name;
        this.size=size;
        this.startingAt=startingAt;
        this.endingAt=endingAt;
        this.isEmpty=isEmpty;
    }
}

class Process{
    constructor(name, size, startingAt=0, endingAt=0, isWaiting=false, state="deallocated"){
        this.name=name;
        this.size=size;
        this.startingAt=startingAt;
        this.endingAt=endingAt;
        this.isWaiting=isWaiting;
        this.state=state;
    }
}

class Block{
    constructor(blockType, blockName, startingAt=0, endingAt=0, size){
        this.blockType=blockType;
        this.blockName=blockName;        
        this.startingAt=startingAt;
        this.endingAt=endingAt;   
        this.size=size;
        this.uniqueIdentifier=Math.random();
    }
}