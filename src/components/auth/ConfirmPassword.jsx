import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import FormContainer from "../form/FormContainer";
import { commonModalClasses } from "../../utils/theme";
import { useSearchParams } from "react-router-dom";

export default function ConfirmPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");
  console.log(token, id);

  //http://localhost:3000/auth/reset-password?token=f31ee4fb391dd84e8d6da0eca070ec8bf26aebdc2684cdcef88c0edeea08&id=64c7fd642781947dc0c63e01

  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-96"}>
          <Title>Enter New Password</Title>
          <FormInput
            label="New Password"
            placeholder="●●●●●●●●"
            name="password"
            type="password"
          />
          <FormInput
            label="Confirm Password"
            placeholder="●●●●●●●●"
            name="password"
            type="password"
          />
          <Submit value="Change Password" />
        </form>
      </Container>
    </FormContainer>
  );
}
