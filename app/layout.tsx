import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nome da Professora | Aulas de idiomas",
  description: "Proposta visual para aulas personalizadas de português, espanhol e inglês.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
