import React from "react";
import Container from "../Container";
import Title from "./Title";
import FormInput from "./FormInput";
import Submit from "./Submit";
import CustomLink from "../CustomLink";
import FormContainer from "./FormContainer";
import { commonModalClasses } from "../../utils/theme";

export default function ForgetPassword() {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses + " w-96"}>
          <Title>Please Enter Your Registered Email Id</Title>
          <FormInput label="Email" placeholder="abc@gmail.com" name="email" />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
