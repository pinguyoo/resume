import Details from "./components/Details";
import PersonalInfo from "./components/PersonalInfo";
import "./styles/index.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen py-8 px-8 bg-[#1b1b1f] bg-print-transparent">
      <PersonalInfo className="w-full mb-4" />
      <Details />
    </main>
  );
}
