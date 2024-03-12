import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormGenerator from "./form-generatotr";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/ui/header";
import { db } from "@/db";
import { forms } from "@/db/schema";
import FormsList from "./forms/FormsList";
import LandingPage from "./landing-page";
export default async function Home() {
  const form = await db.query.forms.findMany();
  console.log(form);
  return (
    <SessionProvider>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <LandingPage />
      </main>
    </SessionProvider>
  );
}
