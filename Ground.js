class Ground{
    constructor(x,y,w,h) {
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    var opitions={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,opitions)
    World.add(world,this.body)
    }
    show() {
        var pos=this.body.position
        push()
        stroke("white")
        strokeWeight(0.8)
        fill("purple")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}