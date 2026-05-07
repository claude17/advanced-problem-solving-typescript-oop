# Advanced Problem Solving with TypeScript & OOP

This repository contains my submission for the **Advanced Problem Solving with TypeScript & OOP** assignment.

## Contents

- `solutions.ts` — All 7 TypeScript problem solutions in a single file.
- `blog-1.md` — Blog Topic #2: Pick & Omit utility types and how they keep code DRY.
- `blog-2.md` — Blog Topic #4: The four pillars of OOP in large-scale TypeScript projects.

---

## Implemented Tasks

### Problem Solving (TypeScript)
All coding solutions are implemented in **one file**: `solutions.ts`

Included problems:
1. `filterEvenNumbers`
2. `reverseString`
3. `checkType`
4. `getProperty`
5. `toggleReadStatus`
6. `Person` + `Student` class with `getDetails`
7. `getIntersection`

---

### 1) `filterEvenNumbers`

**Description:** Accepts an array of numbers and returns a new array containing only the even numbers.

**Sample Input:**
```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
```

**Sample Output:**
```ts
[2, 4, 6]
```

---

### 2) `reverseString`

**Description:** Takes a string as input and returns the reversed version of that string.

**Sample Input:**
```ts
reverseString("typescript");
```

**Sample Output:**
```ts
"tpircsepyt"
```

---

### 3) `checkType` (with `StringOrNumber`)

**Description:** Uses type guards to return `"String"` if the input is a string or `"Number"` if the input is a number.

**Sample Input 1:**
```ts
checkType("Hello");
```

**Sample Output 1:**
```ts
"String"
```

**Sample Input 2:**
```ts
checkType(42);
```

**Sample Output 2:**
```ts
"Number"
```

---

### 4) `getProperty` (Generic Function)

**Description:** A generic function that takes an object and a key, then returns the value of that key. Uses constraints to ensure the key exists on the object.

**Sample Input:**
```ts
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
```

**Sample Output:**
```ts
"John Doe"
```

---

### 5) `toggleReadStatus` (with `Book` interface)

**Description:** Accepts a `Book` object and returns a new object with an added `isRead` property (boolean), defaulting to `true`.

**Sample Input:**
```ts
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
```

**Sample Output:**
```ts
{
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}
```

---

### 6) `Person` + `Student` with `getDetails`

**Description:** Creates a `Person` class with `name` and `age`, and a `Student` subclass that adds a `grade` property. The `Student` class includes a `getDetails()` method.

**Sample Input:**
```ts
const student = new Student("Alice", 20, "A");
student.getDetails();
```

**Sample Output:**
```ts
"Name: Alice, Age: 20, Grade: A"
```

---

### 7) `getIntersection`

**Description:** Takes two arrays of numbers and returns a new array containing only the elements present in both arrays.

**Sample Input:**
```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
```

**Sample Output:**
```ts
[3, 4, 5]
```

---

### Blog Writing
I selected the following two blog topics:

- **Blog 1 (Topic #2):** How do `Pick` and `Omit` utility types prevent code duplication and keep code DRY?
- **Blog 2 (Topic #4):** How do the four pillars of OOP (Inheritance, Polymorphism, Abstraction, Encapsulation) reduce complexity in TypeScript projects?

Blog files:
- `blog-1.md`
- `blog-2.md`

---
