import React from 'react'

const users = [
  { name: "Alex Richards", email: "alex.r@example.com", status: "Active", statusColor: "green", plan: "Elite Member", last: "Today, 10:45 AM" },
  { name: "Sarah Jenkins", email: "s.jenkins@domain.com", status: "Pending", statusColor: "yellow", plan: "Pro Plan", last: "Yesterday, 04:22 PM" },
  { name: "Marcus Thorne", email: "m.thorne@fitness.io", status: "Banned", statusColor: "red", plan: "Free Tier", last: "Oct 12, 2023" },
  { name: "Elena Rodriguez", email: "elena.rod@example.com", status: "Active", statusColor: "green", plan: "Elite Member", last: "2 hours ago" }
]

function StatusBadge({ status, color }) {
  const map = {
    green: "border-green-500/30 text-green-400 bg-green-500/10",
    yellow: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10",
    red: "border-red-500/30 text-red-400 bg-red-500/10"
  }
  return (
    <span className={`px-2 py-1 rounded-md border text-[10px] font-black uppercase tracking-wider ${map[color]}`}>
      {status}
    </span>
  )
}

function AdminUsers() {
  return (
    <div className="bg-dark-bg min-h-screen p-3 sm:p-6">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4 sm:gap-6">

        {/* Search */}
        <div className="bg-card p-4 rounded-xl border border-gray-800 flex flex-col gap-3">
          <input
            className="w-full bg-dark-bg border border-gray-800 rounded-lg py-2 px-3 text-sm text-white"
            placeholder="Search users..."
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {users.map((u, i) => (
            <div key={i} className="bg-card border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-slate-800 border border-gray-700 flex items-center justify-center text-xs font-black text-white">
                  {u.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{u.name}</p>
                  <p className="text-[11px] text-gray-500 truncate">{u.email}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <StatusBadge status={u.status} color={u.statusColor} />
                <span className="text-[10px] font-bold text-gray-400">{u.plan}</span>
              </div>

              <p className="text-[11px] text-gray-500">Last login: {u.last}</p>

              <div className="flex gap-2 pt-2 border-t border-gray-800">
                <button className="flex-1 py-2 rounded-lg bg-dark-bg border border-gray-800 text-primary">
                  Edit
                </button>
                <button className="flex-1 py-2 rounded-lg bg-dark-bg border border-gray-800 text-primary">
                  Reset
                </button>
                <button className="flex-1 py-2 rounded-lg bg-dark-bg border border-gray-800 text-red-400">
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden md:block bg-card rounded-2xl border border-gray-800 overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="border-b border-gray-800 bg-white/[0.02]">
                  <th className="px-6 py-3 text-[10px] font-black uppercase text-gray-500">User</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase text-gray-500">Status</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase text-gray-500">Plan</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase text-gray-500">Last Login</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {users.map((u, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-slate-800 border border-gray-700 flex items-center justify-center text-xs font-black text-white">
                          {u.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{u.name}</p>
                          <p className="text-[11px] text-gray-500">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><StatusBadge status={u.status} color={u.statusColor} /></td>
                    <td className="px-6 py-4 text-xs font-bold text-gray-300">{u.plan}</td>
                    <td className="px-6 py-4 text-xs text-gray-500">{u.last}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg text-primary hover:bg-primary/10">
                          <span className="material-symbols-outlined">edit_square</span>
                        </button>
                        <button className="p-2 rounded-lg text-primary hover:bg-primary/10">
                          <span className="material-symbols-outlined">lock_reset</span>
                        </button>
                        <button className="p-2 rounded-lg text-red-500 hover:bg-red-500/10">
                          <span className="material-symbols-outlined">block</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminUsers
