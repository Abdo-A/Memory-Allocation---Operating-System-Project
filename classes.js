class Hole{
    constructor(name, size, startingAt, endingAt){
        this.name=name;
        this.size=size;
        this.startingAt=startingAt;
        this.endingAt=endingAt;
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