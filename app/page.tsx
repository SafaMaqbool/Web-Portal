import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 justify-center items-center h-screen">
      <h1 className='text-4xl font-bold'>Student List</h1>
      <Button asChild size={'lg'} >
        <Link href={"/home"}>Get Started</Link>
      </Button>
    </main>
  );
}
