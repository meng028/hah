class Count{
    constructor(init){
        this.init=init
    }
    add(){
        this.init++
    }
    reduce(){
        this.init--
    }
    getCurrentCount(){
        return this.init
    }
}
module.exports.count=new Count(0)