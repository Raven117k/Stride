import React from "react";

function AdminContent() {
  return (
    <div className="bg-dark-bg px-4 sm:px-6 py-4 flex flex-col h-full min-h-[100dvh]">
      {/* Main container — scrolls naturally */}
      <main className="flex flex-col w-full">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[ 
            ["Barbell Bench Press", "Chest", "EX-001"],
            ["Barbell Back Squat", "Legs", "EX-002"],
            ["Conventional Deadlift", "Full Body", "EX-003"],
          ].map(([title, tag, id]) => (
            <div
              key={id}
              className="bg-card rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-primary/40 transition"
            >
              <div className="relative h-44">
                <img
                  src="https://picsum.photos/600/400"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-black uppercase tracking-widest bg-black/60 text-success border border-success/30 rounded">
                  {tag}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-white">{title}</h3>
                  <span className="text-[10px] text-gray-500 font-bold">{id}</span>
                </div>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                  Compound movement for strength and hypertrophy.
                </p>

                <div className="mt-auto grid grid-cols-2 gap-2">
                  <button className="py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px] font-black uppercase hover:bg-white/10">
                    EDIT
                  </button>
                  <button className="py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase hover:bg-primary/20">
                    VIDEO
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New */}
          <div className="bg-card/40 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center min-h-[260px] hover:border-success/40 transition cursor-pointer">
            <div className="size-14 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl text-white">add</span>
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500">
              Add New Exercise
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 p-4 bg-dark-bg border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400 font-bold">
            Total Exercises: <span className="text-white">124</span>
          </p>

          <div className="flex gap-1">
            <button className="size-8 rounded bg-card border border-white/10 text-gray-400 hover:text-white">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="size-8 rounded bg-primary text-black font-black text-xs">
              1
            </button>
            <button className="size-8 rounded bg-card border border-white/10 text-gray-400 hover:text-white">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default AdminContent;
