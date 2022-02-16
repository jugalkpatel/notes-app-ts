import type { NextPage } from "next";
import { useRouter } from "next/router";

// if we have params and dynamic route under same index page
// then params route take precedence over catch-all for one param ----> if url is /notes/1/ ----> then [id].jsx render
// ----> if url is /notes/1/2/3 ----> then [...params].jsx render

const CatchAll: NextPage = () => {
  const router = useRouter();
  const params = router.query.params || []; 
  console.log({ params });
  return <div>notes catch all route</div>;
};

export default CatchAll;
