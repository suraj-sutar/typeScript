"use strict";
//Interfaces are just contract that u define which have a set of rules which are nothing but
//  properties and method which object should follow
// SOLID ---> is used to provide the higher level guidelines
//S --> Single responsibilty (Class Only Have a Single resposibility Principle)
//O --> Open Close Principle --> Means open for extension and close for modification
//(Every class should open for extenstion and close for modification)
//L --> (Liskkow Substutution Principle)
//I --> (Interface Segregation Principle)
//D --> (Dependancy Inversion Principle)
// why use Interfaces: catch type error at compile time. Priventing runtime issues
//we create a interfecr using "Interface" Keyword.
//all the method are abstract method in interface
//all method from interface are by default public
// to implement some property from interface we use "implements" keyword
// interface Iproduct {
//   id: number;
//   name: string;
//   description: string;
//   price: number;tsc
// }
// class Product implements Iproduct {
//   id!: number;
//   name!: string;
//   description!: string;
//   price!: number;
// }
// interface IProduct {
//   // all the method are abstract method in interface.
//   // all methods from interface are by default public .
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   display(): void;
// }
// var objProduct: IProduct = {
//     id: 101,
//     name: "IPhone",
//     description: "It's Awesome",
//     price: 100000,
//     display: function (): void {
//         console.log(`Display method implementation provided `);
//     }
// };
// console.log(objProduct);
