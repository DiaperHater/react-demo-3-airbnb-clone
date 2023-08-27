import { ReactComponent as Logo } from "../logo.svg";

export default function Header() {
  return (
    <header className="p-3 shadow-lg">
      <Logo className="text-red-500" />
    </header>
  );
}