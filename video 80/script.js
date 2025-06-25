class animal{
    constructor(name){
        console.log("this is the beginning")
    }
    eats(){
        console.log("kha raha hoon")
    }
    kicks(){
        console.log("im gonna kick your ass")
    }
}
class rabit extends animal{
    constructor(name){
        super(name)
        console.log("i am a rabbit")
    }
}
let r=new rabit("aryan")
r.eats()
r.kicks()