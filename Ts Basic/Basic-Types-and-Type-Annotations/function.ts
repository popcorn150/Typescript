// A function with typed parameters and return type

function greetUser(name: string): string {
    return `Hello ${name}!`
}

// Function with multiple parameters

function sum(a: number, b: number): number {
    return a + b
}

// Void function (no return)
function logMessage(message: string): void {
    console.log(message)
}

// Array function
function logStrings(items: string[]): void {
    items.forEach((item) => {
        console.log(item)
    })
}

const strings = ['Me', 'You', 'Us']
logStrings(strings)