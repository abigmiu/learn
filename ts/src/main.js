"use strict";
// const greetUnnamed: (name: string) => string = function (name: string): string {
//     if (name) {
//         return "HI!" + name
//     }
// }
/**
 参数个数需一致
function add(foo: number, bar: number, foobar: number): number {
    return foo + bar + foobar
}
add()
add(2, 2)
add(2, 2, 2)

*/
/**
 * 可选参数
 */
// function add(foo: number, bar: number, foobar?: number): number {
//     // return foo + bar + foobar // 可选参数直接使用会报错
//     if (foobar) {
//         return foo + bar + foobar
//     }
//     return foo + bar
// }
// console.log(add(1, 2))
// function add(...foo: number[]): number {
//     let result = 0
//     for (let i = 0; i < foo.length; i++) {
//         result += foo[i]
//     }
//     return result
// }
// console.log(add(1, 3))
/**
 * 函数重载
 */
// function test(name: string): string // 重载签名
// function test(age: number): string // 重载签名
// function test(single: boolean): string //重载签名
// function test(value: string | number | boolean): string {
//     switch (typeof value) {
//         case 'string':
//             return `My name is ${value}`
//         case 'number':
//             return `i'm ${value} years old`
//         case 'boolean':
//             return value ? 'single': 'not single'
//         default:
//             return '; invalid operation'
//     }
// }
// console.log(test('ikaros'))
// console.log(test(220));
// console.log(test(true));
class Email {
    constructor(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            this.email = '';
            throw new Error("invalid email");
        }
    }
    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
// class Person {
//     public name: string;
//     public surname: string;
//     public email: Email;
//     constructor(name: string, surname: string, email: Email) {
//         this.email = email;
//         this.name = name;
//         this.surname = surname;
//     }
//     greet(){
//         alert('Hi')
//     }
// }
// const email = new Email("abc@abc.com")
// const me: Person = new Person("a", "b", email)
// console.log(me)
class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    greet() {
        console.log('HI');
    }
}
class Teacher extends Person {
    constructor(name, surname, email, subjects) {
        super(name, surname, email);
        this.subjects = subjects;
    }
    teach() {
        console.log('welcomt ro class');
    }
    greet() {
        super.greet();
        console.log(`i teach ${this.subjects}`);
    }
}
const teacher = new Teacher('remo', 'jansen', new Email('abc@abc.com'), ['math', 'physics']);
const me = new Person('person', 'person', new Email('abc@abc.com'));
// me.greet()
teacher.greet();
teacher.teach();
