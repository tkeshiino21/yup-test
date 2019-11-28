import React, { useState } from "react";
import { categories, sampleBook } from "./Categories";
import { bookDatas } from "./BookDatas";
import { book4 } from "./helpers/Literuture";
import Form from "./Form";
import { setNestedObjectValues } from "formik";

const BookList = (...props) => {
  const [category, setCategory] = useState();

  const selectedCategory = bookDatas.filter(
    bookData => bookData.category === "Literuture"
  );

  return (
    <div>
      <section>
        <div>Test</div>
      </section>
      <h1>hello from BookList</h1>
      <hr />
      <div>
        {book4.map(book => (
          <ul key={book.key}>
            <li>{book.name}</li>
            <li>{book.review}</li>
          </ul>
        ))}
      </div>
      <hr />
      <div>
        <div>
          <form action="cgi-bin/formmail.cgi" method="post">
            <select name="category">
              <option value="Literuture">Literuture</option>
              <option value="Economy">Economy</option>
              <option value="Psycology">Psychology</option>
            </select>
            <input type="submit" value="送信"></input>
            <input type="reset" value="リセット" />
          </form>
        </div>
      </div>
      <hr />
      <Form />
    </div>
  );
};

export default BookList;
