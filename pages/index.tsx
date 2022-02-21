import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

const ThisOnlyWorksOnBrowser = dynamic(
  () => import("../components/ThisOnlyWorksOnBrowser"),
  { ssr: false }
);

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  //add check for empty response

  const data = await response.json();

  return { props: { data } };
};

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <ThisOnlyWorksOnBrowser />
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Home;
