import React from "react";
import useAuth from "../customHooks/withAuth";
import UserCard from "../components/UserCard";

// export async function getStaticProps() {
//   const res = await fetch("https://api.example.com/data");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//     revalidate: 1000, // Re-generate the page at most every 10 seconds
//   };
// }

const Dashboard = () => {
  //   const { loading, authenticated } = useAuth();

  //   if (loading) return <p>Loading...</p>;

  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Dashboard;
