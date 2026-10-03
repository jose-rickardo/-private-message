import "./globals.css";

// Titre volontairement neutre : rien ne doit laisser deviner la suite
export const metadata = {
  title: "Accès privé",
  description: "Page privée protégée par une date.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,600&family=Parisienne&display=swap"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
