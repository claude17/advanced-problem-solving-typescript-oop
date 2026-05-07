# Title: How the Four Pillars of OOP Help Manage Logic and Reduce Complexity in Large-Scale TypeScript Projects

## Introduction

In a larger typescript project, it becomes more difficult to manage because there is a lot of code. Different modules, features and business logic.
The 4 pillars of OOP help us solve this problem. 

The other 4 pillars of OOP are:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

With these OOP concepts, we can write clean, reusable and maintainable code.

---

# 1. Inheritance

Inheritance is an OOP concept through which a child class inherits the properties and methods of the parent class f through inheritance.

Through this, we do not have to re-initialize those properties and methods of the parent class, so we do not have to write repeated code.

---

## Example

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(){
    console.log(`The user's name is ${this.name}`) 
  }
}

class Teacher extends User {
  subject: string;

  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
}
```

---

## How It Reduces Complexity

The `Teacher` class gets access to:

- `name`
- `getName`

without rewriting them.

Benefits:

- Reduces duplicate code
- Makes features reusable
- Easier maintenance in large applications

Without inheritance, we would require to write common properties and methods in every class.

---

# 2. Polymorphism

Through polymorphism, we can use the same method of a class repeatedly in different classes. In this case, the method will behave differently in each class but the method will have the same name. 

Using the same method makes it more flexible and easier

---

## Example

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getRole(): void {
    console.log("This is a user");
  }
}

class Teacher extends User {
    getRole(): void {
    console.log(`${this.name} is a teacher`);
  }
}

class Student extends User {
    getRole(): void {
    console.log(`${this.name} is a student`);
  }
}
```

---

## How It Reduces Complexity

Both child classes use the same method:

```ts
getRole()
```


But each class implements it differently.

Benefits:

- One common structure for multiple behaviors
- Easier to add new features
- Cleaner business logic
- Reduces large conditional statements

---

# 3. Abstraction

Through abstraction, we can hide the information of complicated internal parts and implement and show only the important parts.

It helps developers focus on what an object does instead of how it works internally.

---

## Example

```ts
abstract class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract showRole(): void;

}

class Student extends User {
  showRole(): void {
    console.log(`${this.name} is attending classes`);
  }
}
```

---

## How It Reduces Complexity

The abstract `User` class creates a common structure for all user types and every child class must implement:

```ts
showmRole()
```

Benefits:

- Creates clear architecture
- Forces consistency across modules
- Simplifies large systems
- Makes code easier to understand

So things become easier rather than complex so that one can worrying about internal implementation details.

---

# 4. Encapsulation

Encapsulation means hiding internal data and controlling their access or limiting to a specific scope.

This protects data from unwanted modification.

---

## Example

```ts
class User {
  private balance: number;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

---

## How It Reduces Complexity

The `balance` property cannot be changed directly from outside the class.

This prevents the access and modification from outsiders:

```ts
account.balance = 9999;
```
This is not possible as we set `balance` as private.

Benefits:

- Protects application state
- Improves security
- Reduces unexpected bugs
- Keeps logic controlled and predictable

In large-scale applications uncontrolled data changes can become very dangerous. Encapsulation helps prevent that.

---

# How All Four Pillars Work Together

- Inheritance : Reuse the properties and methods 
- Polymorphism : Same method with different implementation so is flexible
- Abstraction : Hide unnecessary complexity 
- Encapsulation : Protect internal data, more privacy

Together, these principles help developers:

- Organize large codebases
- Reduce repetition
- Improve maintainability
- Build scalable applications
- Keep business logic manageable



---

# Conclusion

The four pillers of OOP are very important. Through this we can be hassle free and make our work easier. Without the concept of OOP we cannot remove complexity and hence OOP is a must if you are going to do a large typescript project today.