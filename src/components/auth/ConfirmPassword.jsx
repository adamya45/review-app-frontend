import React, { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import FormContainer from "../form/FormContainer";
import { commonModalClasses } from "../../utils/theme";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PiSpinnerGapBold } from "react-icons/pi";
import { verifyPasswordResetToken } from "../../api/auth";
import { useNotification } from "../../hooks";

export default function ConfirmPassword() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  const { updateNotification } = useNotification();
  const navigate = useNavigate();

  // isValid, !isValid

  useEffect(() => {
    isValidToken();
  }, []);

  const isValidToken = async () => {
    const { error, valid } = await verifyPasswordResetToken(token, id);
    setIsVerifying(false);
    if (error) {
      return updateNotification("error", error);
    }
    if (!valid) {
      setIsValid(false);
      setIsVerifying(false);
      return navigate("/auth/reset-password", { replace: true });
    }
    setIsValid(true);
  };

  if (isVerifying)
    return (
      <FormContainer>
        <Container>
          <div className="flex space-x-2 items-center">
            <h1 className="text-4xl font-semibold dark:text-white text-primary">
              Please wait, while we are verifying your token!
            </h1>
            <PiSpinnerGapBold className="animate-spin text-4xl dark:text-white text-primary" />
          </div>
        </Container>
      </FormContainer>
    );

  if (!isValid)
    return (
      <FormContainer>
        <Container>
          <h1 className="text-4xl font-semibold dark:text-white text-primary">
            Sorry, the token is invalid!
          </h1>
        </Container>
      </FormContainer>
    );

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
