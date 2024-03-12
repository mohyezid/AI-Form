import React from "react";
import { getUserSubscription } from "../actions/userSubscriptions";
import { auth } from "@/auth";
import { db } from "@/db";
import { forms } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MAX_FREE_FORMS } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

const UserSubscriptionWrapper = async ({ children }: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return null;
  }
  const subscription = await getUserSubscription({ userId });

  const userForms = await db.query.forms.findMany({
    where: eq(forms.userId, userId),
  });
  const formCount = userForms.length;
  if (subscription || formCount < MAX_FREE_FORMS) {
    return { children };
  }
  return <Button disabled>Upgrade to create more forms</Button>;
};

export default UserSubscriptionWrapper;
