import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const backToHome = () => {
    router.push("/");
  };

  const previousPage = () => {
    router.back();
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1>Sorry!</h1>
        <p>The resource you have requested cannot be found.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <button onClick={() => previousPage()}>Previous Page</button>
          <button onClick={() => backToHome()}> Back To Home</button>
        </div>
      </div>
    </>
  );
}
