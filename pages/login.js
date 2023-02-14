import React from "react";
import { getProviders, signIn } from "next-auth/react";

export default function login() {
  return (
    //login page
    <div>
      <h1>login page</h1>
    </div>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
    return {
        props: { providers },
    };
}
