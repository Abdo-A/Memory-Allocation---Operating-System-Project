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
    constructor(name, size, startingAt=0, endingAt=0){
        this.name=name;
        this.size=size;
        this.startingAt=startingAt;
        this.endingAt=endingAt;
    }
}

class Block{
    constructor(blockType, startingAt=0, endingAt=0, size){
        this.blockType=blockType;
        this.startingAt=startingAt;
        this.endingAt=endingAt;   
        this.size=size;
    }
}