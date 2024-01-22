import PersonalInfo from "./components/PersonalInfo";
import "./styles/index.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-20 bg-[#1b1b1f]">
      <PersonalInfo className="w-full h-10" />
    </main>
  );
}
