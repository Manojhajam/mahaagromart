export default function SomeMore({ images }: { images: string[] }) {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src) => (
          <div key={src} className="aspect-video rounded-xl overflow-hidden border border-gray-200 py-2 px-4 shadow-md">
            <img src={src} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
