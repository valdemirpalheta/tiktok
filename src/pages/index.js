import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
import { openDB } from '../lib/openDB';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // implementar a busca dos dados no mongodb
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;