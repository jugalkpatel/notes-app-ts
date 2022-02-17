import type { NextPage, NextPageContext } from "next";

const Notes: NextPage = () => {
  return <div>notes index route</div>;
};

export async function getStaticProps(context: NextPageContext) {
  console.log({ context });
  return {
    props: {},
  };
}

export default Notes;
