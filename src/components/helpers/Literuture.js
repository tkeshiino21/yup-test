import { bookDatas } from "../BookDatas";

export const selectedCategory = bookDatas.filter(
  bookData => bookData.category === "Literuture"
);
