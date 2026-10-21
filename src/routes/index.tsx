import { createFileRoute } from "@tanstack/react-router";
import { TourPage } from "@/components/tour/TourPage";
import { LangProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hành trình di sản: Hà Nội – Ninh Bình – Hạ Long | 4N3Đ" },
      { name: "description", content: "Tour di sản miền Bắc 4 ngày 3 đêm: Hà Nội, Tràng An, Bái Đính và du thuyền vịnh Hạ Long. Heritage tour of Northern Vietnam." },
      { property: "og:title", content: "Heritage Journey: Hanoi – Ninh Binh – Ha Long" },
      { property: "og:description", content: "4 days 3 nights through Hanoi, Trang An and an overnight Ha Long Bay cruise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LangProvider>
      <TourPage />
    </LangProvider>
  ),
});
