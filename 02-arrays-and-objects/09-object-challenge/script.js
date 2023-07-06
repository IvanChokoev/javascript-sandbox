//Step 1
const library = [
    {
        title:'Book_1',
        author: 'author_1',
        status:{
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Book_2',
        author: 'author_2',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Book_3',
        author: 'author_3',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

console.log(library);

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

//Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);