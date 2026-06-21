import { createFileRoute } from "@tanstack/react-router";
import ClientApp from "@/components/ClientApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZARIFA COLLECTION — стилист для покрытых мусульманок" },
      {
        name: "description",
        content:
          "Персональный стилист для покрытых мусульманок. Шоппинг-туры в Стамбул, разбор гардероба, готовые капсулы и образы — скромно, изысканно и современно.",
      },
      { property: "og:title", content: "ZARIFA COLLECTION — стилист для покрытых мусульманок" },
      {
        property: "og:description",
        content:
          "Персональный стилист для покрытых мусульманок. Шоппинг-туры в Стамбул, разбор гардероба, готовые капсулы и образы.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: ClientApp,
});
