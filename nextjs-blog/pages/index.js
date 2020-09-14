import Head from "next/head";
import ThinkneticaClient from "../lib/http/airtable/thinknetica-client";
import Layout from "../components/layout";
import BookList from "../components/book/BookList";

export default function Home({books}) {
  return (
    <Layout>
      <Head>
        <title>Book list</title>
      </Head>
      <BookList books={books} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = new ThinkneticaClient();

  return {
    props: {
      books: await client.getListBooks()
    },
  }
}