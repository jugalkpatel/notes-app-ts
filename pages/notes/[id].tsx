import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

export type Data = {
  userId: number;
  id: number;
  title: string;
  completed: false;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}) => {
  if (!params) {
    res.writeHead(302, { location: "/notes" });
    res.end();
    return { props: {} };
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );

  if (!response.ok) {
    res.writeHead(302, { location: "/notes" });
    res.end();
    return { props: {} };
  }

  const data = await response.json();
  console.log({ data });
  return { props: { data } };
};

const Params: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const notes = data;
  console.log({ notes });
  return (
    <div style={{ padding: "1rem" }}>
      <pre>
        <code>{JSON.stringify(notes, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Params;
