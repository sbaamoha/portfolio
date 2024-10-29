import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
  subject,
}) => (
  <div>
    <h1>Hello, {firstName}!</h1>
    <h2>{subject}</h2>
    <p>{message}</p>
    <p>
      Best regards, <br /> {email}
    </p>
  </div>
);
