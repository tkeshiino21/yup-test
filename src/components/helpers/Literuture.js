import { bookDatas } from "../BookDatas";

export const book4 = bookDatas.filter(
  bookData => bookData.category === "Literuture"
);
