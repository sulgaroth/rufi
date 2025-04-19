import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Ana Sayfa Akışı</h1>
      {/* 
        Buraya veritabanından çekilecek gönderiler listelenecek.
        Şimdilik yer tutucu içerik ekleyelim.
      */}
      <div className="space-y-4">
        <div className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm">
          <p>Örnek Gönderi 1</p>
        </div>
        <div className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm">
          <p>Örnek Gönderi 2</p>
        </div>
      </div>
    </div>
  );
}
