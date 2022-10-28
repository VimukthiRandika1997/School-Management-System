import { server } from "../../config";

const index = ({ subjects }) => {
  console.log(subjects);
  return (
    <div>
      <h1>Student Page</h1>
      {subjects.map((item) => (
        <div key={item.email}>{item.email}</div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  // See the subject the student is doing
  const res = await fetch(`${server}/api/user/`);
  const subjects = await res.json();

  return {
    props: { subjects },
  };
};

export default index;
