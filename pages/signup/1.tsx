import Form from "antd/es/form/Form";
import React from "react";
import Link from "next/link";

function signup() {
  return (
    <main className="min-h-screen bg-primary ">
      <div className="flex flex-col min-h-screen bg-grey-lighter">
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
            <h1 className="mb-8 text-3xl font-bold text-center">
              Create Account (1/2)
            </h1>
            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block w-full p-3 mb-4 border rounded border-grey-light"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <a
              href="../signup/2/"
              className="inline-block w-full p-5 py-3 my-1 font-bold text-center text-white rounded bg-primary align-items-center hover:bg-black hover:text-white "
            >
              Next page (1/2)
            </a>
          </div>

          <div className="mt-6 font-extrabold text-white">
            Already have an account?
            <Link href={"../auth/signin"}>
              <a className="mx-3 no-underline border-b border-blue text-blue">
                Log in
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
