import React from "react";
import Link from "next/link";

export default function BookListItem({book}) {
  return (
    <li>
      <Link href="/book/[id]" as={`/book/${book.id}`}>
        <a>{book.title}</a>
      </Link>
    </li>
  );
}