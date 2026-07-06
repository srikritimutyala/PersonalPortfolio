import "./globals.css";

export const metadata = {
  title: "Srikriti Mutyala | CS & Statistics @ UIUC",
  description: "Personal portfolio of Srikriti Mutyala, a Computer Science & Statistics student at UIUC. Exploring Machine Learning research, Computer Vision accessibility, and full-stack systems.",
  keywords: "Srikriti Mutyala, UIUC, Computer Science, Statistics, Machine Learning, Computer Vision, Software Engineer, Portfolio, Research",
  authors: [{ name: "Srikriti Mutyala" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Devicon CDN for developer logos */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* FontAwesome CDN for custom icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased bg-[#040407] text-[#F2E1FB]">
        {children}
      </body>
    </html>
  );
}
