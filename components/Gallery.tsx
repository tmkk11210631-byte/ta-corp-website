/* ギャラリーセクション：工場・現場・チームの写真グリッド */
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80&auto=format&fit=crop",
    alt: "製造現場での作業",
    label: "製品製造",
    span: "md:col-span-2 md:row-span-2", /* 大きいタイル */
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop",
    alt: "物流倉庫",
    label: "在庫・物流管理",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop",
    alt: "打ち合わせ・商談",
    label: "お客様との打ち合わせ",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565793296-91f65c8a41b5?w=600&q=80&auto=format&fit=crop",
    alt: "製造ライン",
    label: "品質管理",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80&auto=format&fit=crop",
    alt: "グローバル調達",
    label: "海外調達",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-0.5 bg-brand-gold" />
          <p className="text-brand-gold text-sm font-bold tracking-[0.3em] uppercase">Gallery</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            現場の様子
          </h2>
          <p className="text-gray-500 max-w-sm">
            工場・物流・商談現場など、T.A株式会社の「現場力」をご覧ください。
          </p>
        </div>

        {/* 写真グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* ホバー時オーバーレイ */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              {/* ラベル（ホバーで表示） */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
