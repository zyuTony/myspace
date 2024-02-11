export const dynamic = "force-static";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are a social media app to connect with frens inspired by MySpace",
};

export default async function () {
  return (
    <main>
      <h1>About</h1>
      <p>We are a one person company!</p>
    </main>
  );
}
