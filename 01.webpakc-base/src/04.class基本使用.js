function Person(name,age) {
    this.name=name
    this.age=age
}

Person.info='aaa'
// 实例属性
const p1=new Person('王多多',18)
// 通过new出来的实例 访问到的属性 叫做实例属性
console.log(p1)
console.log(p1.name)
console.log(p1.age)
// 静态属性 通过构造函数 访问到的属性 叫做[静态属性]
console.log(Person.info)

// -----------------------------------------------

class Animal {
    // 构造器 每当new这个类的时候 必然会优先执行 构造器中的代码
    // 每一个类中 都有一个构造器 如果我们程序名没有手动指定构造器
    // 那么 可以认为类内部有一个隐形的空构造器
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    // 静态属性
    // 在class内部 通过static修饰的属性 就是静态属性
    static info='eee'
}

const a1=new Animal('大黄',3)
console.log(a1)
console.log(a1.name) // 实例属性
console.log(a1.age) // 实例属性
console.log(Animal.info) // 静态属性
