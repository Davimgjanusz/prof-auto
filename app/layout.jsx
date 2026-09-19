import "./globals.css";

export const metadata = {
  title: "Blá Blá Blando by Isaduera | Aulas online de idiomas",
  description: "Aulas online de português, espanhol e inglês com Isadora.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR" suppressHydrationWarning><body>{children}</body></html>;
}
