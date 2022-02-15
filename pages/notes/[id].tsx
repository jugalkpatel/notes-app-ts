import type { NextPage } from "next";
import { useRouter } from "next/router";

const Params: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id} param route</div>;
};

export default Params;
