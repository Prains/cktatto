import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="transition-all font-text bg-neutral-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
