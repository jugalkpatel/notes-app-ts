import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
  NextPageContext,
} from "next";

export type Data = {
  userId: number;
  id: number;
  title: string;
  completed: false;
};

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Data = await response.json();

  return { props: { data } };
};

const Notes = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ data });
  return <div>notes index route</div>;
};

export default Notes;
