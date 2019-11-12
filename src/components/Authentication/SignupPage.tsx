import React from "react";
import AuthForm from "./AuthForm";

function SignupPage() {

  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <AuthForm
      // error={error}
      // loading={loading}
      emailLabel="Email"
      passwordLabel="Password"
      buttonLabel="Continue"
      onSubmit={handleSubmit}
    />
  );
}

export default SignupPage;