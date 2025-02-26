import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get("token");

    if (token) {
      verifyEmail(token);
    } else {
      setVerificationStatus("Invalid verification link.");
    }
  }, [search]);

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/auth/verify-email?token=${token}`);

      if (response.ok) {
        setVerificationStatus("Your email has been successfully verified!");
      } else {
        setVerificationStatus("Email verification failed. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setVerificationStatus("Something went wrong during verification.");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
    </div>
  );
};


export default VerifyEmail;