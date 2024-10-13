// Interface example

interface User {
    name: string
    age: number
    isActive: boolean
}

const newUser: User = {
    name: 'Mark Grayson',
    age: 40,
    isActive: false
}

type ID = string | number

let userID: ID = 200

const anotherNewUser: User = {
    name: 'Hijikata Horoshino',
    age: 35,
    isActive: true
}

let newUserID: ID = 800

interface Book {
    title: string
    author: string
    publishedYear: number
}

const newBook: Book = {
    title: 'The Boy and The Heron',
    author: 'Mark Grayson',
    publishedYear: 2018
}

type BookID = string | number

let bookID: BookID = '1Af335BBc0'

const anotherNewBook: Book = {
    title: 'Amaterasu - The Sun God',
    author: 'Hijikata Horoshino',
    publishedYear: 2020
}

let newBookID: BookID = '007BWL29T'