import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";

export default function ConfirmPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10  flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
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
    </div>
  );
}
