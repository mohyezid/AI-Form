import { auth } from "@/auth";
import { db } from "@/db";
import { forms } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserForm() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return [];
  const userforms = await db.query.forms.findMany({
    where: eq(forms.userId, userId),
  });

  return userforms;
}
