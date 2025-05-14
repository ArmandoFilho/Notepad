import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-[30px]"> Notepad</p>
      <input type="Write your note" placeholder="Write your note"/>
      <button className="mt-4">New note</button>
    </div>
  );
}
