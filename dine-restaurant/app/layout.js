import "@styles/index.css";

export const metadata = {
  title: "Dine",
  description:
    "Exquiste dining since 1989 - Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
