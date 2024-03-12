import React from "react";
import Link from "next/link";

import { auth } from "@/auth";

import { MAX_FREE_FORMS } from "@/lib/utils";
import { getUserForm } from "@/app/actions/getUserForm";
import ProgressBar from "../progressBar";
import SubscribeBtn from "@/app/subscription/SubscribeBtn";
import { getUserSubscription } from "@/app/actions/userSubscriptions";

type Props = {};

const UpdgradeAccBtn = async (props: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return null;
  }
  const subscription = await getUserSubscription({ userId });
  if (subscription) {
    return null;
  }
  const forms = await getUserForm();
  const formCount = forms.length;
  const percent = (formCount / MAX_FREE_FORMS) * 100;

  return (
    <div className="p-4 mb-4 text-left text-xs">
      <ProgressBar value={percent} />
      <p className="mt-2">
        {formCount} out of {MAX_FREE_FORMS} forms generated.
      </p>
      <p>
        <SubscribeBtn price="price_1Ot6G9HbA6TYcLS3sGxwGaLQ" userId={userId} />{" "}
        for unlimited forms.
      </p>
    </div>
  );
};

export default UpdgradeAccBtn;
