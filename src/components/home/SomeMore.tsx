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

// export default function SomeMore({ images }: { images: string[] }) {
//   return (
//     <section className="py-10">
//       <style>{`
//         @keyframes sweep-line {
//           0% {
//             left: -45%;
//           }
//           100% {
//             left: 100%;
//           }
//         }
//         .sweep-card {
//           position: relative;
//         }
//         .sweep-card::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -45%;
//           width: 45%;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             #22c55e 50%,
//             transparent 100%
//           );
//           animation: sweep-line 2.5s linear infinite;
//           z-index: 10;
//           pointer-events: none;
//         }
//       `}</style>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((src) => (
//           <div
//             key={src}
//             className="sweep-card aspect-video rounded-xl overflow-hidden border border-gray-200 py-2 px-4 shadow-md"
//           >
//             <img
//               src={src}
//               alt=""
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }