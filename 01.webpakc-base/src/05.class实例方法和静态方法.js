// 实例方法 挂载到原型对象上的 通过实例能够点出来的
// 静态方法 挂载到构造函数或class身上的 通过class直接点出来的方法
function Person(name,age) {
    this.name=name
    this.age=age
}

Person.info='aaa'

// 实例方法
Person.prototype.say=function () {
    console.log('这是person的实例方法')
}

// 静态方法
Person.show=function () {
    console.log('这是person的静态show方法')
}

// 实例属性
const p1=new Person('王多多',18)
// 通过new出来的实例 访问到的属性 叫做实例属性
console.log(p1)
console.log(p1.name)
console.log(p1.age)

// 静态属性 通过构造函数 访问到的属性 叫做[静态属性]
console.log(Person.info)

p1.say() // 实例方法
Person.show() // 静态方法

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
    // 实例方法
    jiao(){
        console.log('动物的实例方法')
    }
    static show(){
        console.log('anmail动物的静态方法')
    }
}

const a1=new Animal('大黄',3)
console.log(a1)
console.log(a1.name) // 实例属性
console.log(a1.age) // 实例属性
console.log(Animal.info) // 静态属性

a1.jiao() // 挂载到原型对象的实例方法
Animal.show() // 静态方法
