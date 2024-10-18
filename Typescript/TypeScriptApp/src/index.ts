console.log("Hello WORLD");
//static typing 


//classes and interfaces
interface User{
    name:string;
    age:number;
    email:string;
}

const user1:User={
    name:"John Doe",
    age:30,
    email:"john.doe@example.com"
};

console.log(user1);

//classess and inheritance
class Animal{
    constructor(public name:string){}  //it is default
        makesound():void{
            console.log(`${this.name} makes a sound.`);
        }
    }

    class Dog extends Animal{
        makesound(): void {
            console.log(`${this.name} barks`);
        }
    }

    
    const animal = new Animal("cat");
    animal.makesound();
    const dog = new Dog("Buddy");
    dog.makesound();

    //generics 
    function identity<T>(arg: T):T{
        return arg;
    }
    const num = identity<number>(42);
    const str = identity<string>("Hello");

    console.log(num);
    console.log(str);

    //enums
    enum Direction{
        Up,
        Down,
        Left,
        Right
    }

    const move = Direction.Up;
    console.log(move);

    console.log(Direction[move]);
    console.log(Direction[1]);

    enum Direction1{
        Up =1,
        Down,
        Left = 50,
        Right
    }

    console.log(Direction1.Up);
    console.log(Direction1.Down);
    console.log(Direction1.Left);
    console.log(Direction1.Right);

    