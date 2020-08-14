class Person {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    sayHello(){
        console.log('大家好')
    }
}

// 子类继承父类
class American extends Person{
    // 如果一个子类通过extends关键字继承父类
    // 那么在子类的constructor构造函数中必须调用super

    // super是一个函数 而且他是父类的构造器
    // 子类中的super其实就是父类中 constructor的引用
    constructor(name,age) {
        super(name,age)
    }
}

const a1=new American('jack',20)
console.log(a1)
a1.sayHello()


class Chinese extends Person{
    constructor(name,age,IDNumber) {
        super(name,age);
        this.IDNumber=IDNumber
    }
}
const c1=new Chinese('张三',22,'15544758454')
console.log(c1)
c1.sayHello()
