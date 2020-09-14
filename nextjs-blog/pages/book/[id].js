import Head from "next/head";
import ThinkneticaClient from "../../lib/http/airtable/thinknetica-client";
import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import Loader from "../../components/helpers/Loader";
import Book from "../../components/book/Book";


export default function BookPage({ book }) {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <Head>
        <title>Book: {book.title}</title>
      </Head>
      <Book book={book} />
    </Layout>
  );

}

export async function getStaticPaths() {
  const client = new ThinkneticaClient();
  const books = await client.getListBooks();

  return {
    paths: books.map(book => ({params: {id: book.id}})),
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const client = new ThinkneticaClient();

  return {
    props: {
      book: await client.getBookById(params.id)
    },
    unstable_revalidate: 3600
  }
}