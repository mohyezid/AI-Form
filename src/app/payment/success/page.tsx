import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const page = () => {
  return (
    <Alert variant="default">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your account has been updated{" "}
        <Link href="/view-form" className="underline">
          Go to the dashboard
        </Link>{" "}
        to create more forms
      </AlertDescription>
    </Alert>
  );
};

export default page;
