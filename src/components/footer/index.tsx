import { profile } from "@/src/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
      Desenvolvido por {profile.name}
    </footer>
  );
}
