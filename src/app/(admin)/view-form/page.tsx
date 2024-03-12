import { getUserForm } from "@/app/actions/getUserForm";
import FormsList from "@/app/forms/FormsList";
import { forms as dbform } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import React from "react";
import AdminLayout from "../layout";

type Props = {};

const page = async (props: Props) => {
  const forms: InferSelectModel<typeof dbform>[] = await getUserForm();
  return (
    <>
      <h1 className="text-4xl font-bold p-4 m-5"> My Forms</h1>
      <FormsList forms={forms} />
    </>
  );
};

export default page;
