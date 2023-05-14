class Hero{

    constructor({id,name,age,gander}){
        this.id = Math.floor(Math.random() *100)+Date.now(),
        this.name = name,
        this.age = age,
        this.gander = gander
    }

    isValid(){
        const propertyName = Object.getOwnPropertyNames(this)
        const amountInvalid = propertyName
        .map(property =>(!!this[property])? null : `${property} is missing!`)
        .filter(item =>!!item)
      return{
        valid: amountInvalid.length === 0,
        error: amountInvalid
      }
        
    }
}

module.exports = Hero

//const hero = new Hero({name:'',age:12,gander:'B'})
 //   console.log('valid',hero.isValid())
 //   console.log('valid',hero)