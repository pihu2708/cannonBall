class Cannonball{
    constructor(x,y){
        var props = {
            isStatic: true
        }
        this.r = 40
        this.body = Bodies.circle (x,y, this.r,props )
        World.add(world,this.body)
        this.img= loadImage("assets/ball.png")
    }
    shoot(){
        var speed = p5.Vector.fromAngle(cannon.a)
        speed.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:speed.x,y:speed.y})
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,this.r,this.r)
        pop()
    }
}