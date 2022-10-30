import Form from "antd/es/form/Form";
import React from "react";

function signup() {
  const handleSubmit = () => {
    console.log("Account is created!");
  };

  return (
    <main className="min-h-screen bg-primary ">
      <div className="flex flex-col min-h-screen bg-grey-lighter">
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <form onSubmit={handleSubmit} method="POST">
            <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
              <h1 className="mb-8 text-3xl font-bold text-center">
                Create Account (2/2)
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
              <button
                type="submit"
                className="w-full py-3 my-1 font-bold text-center text-white rounded bg-primary hover:bg-green-dark focus:outline-none hover:bg-black hover:text-white"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default signup;
