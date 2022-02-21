import Link from "next/link";

const Notes = () => {
  const notes = new Array(15).fill(1).map((_, index) => index);
  console.log({ notes });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        margin: "1rem",
        border: "1px solid black",
      }}
    >
      {notes.map((number, index) => {
        return (
          <Link key={number} href={`/notes/${number}`}>
            <a>to note {number}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Notes;
