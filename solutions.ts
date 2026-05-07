
// 1

const filterEvenNumbers = (nums: number[]): number[] => {
    const even_nums: number[] = []
    for (const n of nums) {
        if (n % 2 === 0) {
            even_nums.push(n)
        }
    }
    return even_nums
}


// 2

const reverseString = (str: string): string => {
    let reverse_str: string = ""
    for (const c of str) {
        reverse_str = c + reverse_str
    }
    return reverse_str

}


// 3

const checkType = (input: string | number): string | number => {
    if (typeof input === "string") {
        return "String"
    }
    else {
        return "Number"
    }
}


// 4

const getProperty = <T>(obj: T, key: keyof T) => {
    return obj[key];
};


// 5

interface Book {
    title: string;
    author: string
    publishedYear: number;
}


const toggleReadStatus = (book: Book & { isRead?: boolean }): Book & { isRead: boolean } => {

    return {
        ...book,
        isRead: book.isRead ?? true

    }
}


// 6

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


// 7

const getIntersection = (nums1: number[], nums2: number[]): number[] => {
    const CommonNums: number[] = []
    for (const i of nums1) {
        for (const j of nums2) {
            if (i === j) {
                CommonNums.push(i)
            }
        }
    }
    return CommonNums
}
