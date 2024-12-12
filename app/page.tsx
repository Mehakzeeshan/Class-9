import Link from "next/link";

// interface IBook{
//   title: string,
//   id: number
// }

// const books:IBook[] = [
//  {
//     title: "The Day",
//     id: 1,
// }, 
// {
//     title: "The Night",
//     id: 2,
// }
// ]

export default async function Home() {

  const res = await fetch("https://simple-books-api.glitch.me/books", {
    method: "GET",
  });
interface MyBook {
  "id": number,
  'name': string,
  'type': string,
  'available': boolean
}
  const books: MyBook[] = await res.json()   //this line is used for converting json into javascript objects

  console.log(books);
  return (
    <div>
        {
            books.map( (book) => {
               return <div key = {book.id}>
                <Link href={`/${book.id}`}>
                <h1 >{book.name}</h1>
                </Link>
                </div>
            })
        }
        {/*
            <h2>{book[0].title}</h2>
        <h2>{book[1].title}</h2>
    */}


    </div>
  )
}

