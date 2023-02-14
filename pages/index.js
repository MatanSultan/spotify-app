import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title> my spotyfy </title>
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        {/* <h1> this is a Dope spotyify </h1> */}
        <main>
          {/* side bar */}
          <Sidebar />
          {/* center */}
        </main>
        <div>{/*player */}</div>
      </div>
    </>
  );
}
