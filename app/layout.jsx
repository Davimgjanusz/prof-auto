import "./globals.css";

export const metadata = {
  title: "Nome da Professora | Aulas de idiomas",
  description: "Proposta visual para aulas personalizadas de português, espanhol e inglês.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
