import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The site itself is a plain HTML/CSS/JS project served from /public.
// This route simply forwards visitors to it.
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elevated Web Studio | Web Design & Development" },
      {
        name: "description",
        content:
          "Elevated Web Studio creates modern websites and digital experiences that help businesses build a stronger online presence.",
      },
      { property: "og:title", content: "Elevated Web Studio | Web Design & Development" },
      {
        property: "og:description",
        content: "Modern websites and digital experiences designed to turn your ideas into reality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#061024" }}>
      <noscript>
        <a href="/index.html">Enter Elevated Web Studio</a>
      </noscript>
    </div>
  );
}
