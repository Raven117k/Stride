import React from 'react'

function Settings() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="pt-4 sm:pt-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">Settings</h2>
        <p className="text-sm sm:text-base text-slate-500 mt-1">Manage your profile and preferences</p>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-success/10 border border-white/5 p-[1px] rounded-2xl">
        <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-primary/30 p-0.5">
                  <img alt="Profile" className="w-full h-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUkt7fBoeNqMErmQNi-P6BXHcl4wlfNWYjSay1ca3omUQKyHViaCyjMjkTNgVgmYpaBn6WmoJJ0NC01p3A68BLObEvlWMq0NM9Rwap0nDuf5hUXcYdUrGMdYy6rnq0DswrMPB-UnEiGeLBbNYOaKfpVgWAWS_EuiSaQZnBij6GqHZVrBybzmKKNQbUv8g1bx6BcvtvXPjMi6fpxwaA4WR4LQbxXSS1pBTLoQ1jcuowA3kFKC9ZUyaDO5_4PH-efcWlRzEJ8xkxxA" />
                </div>
                <button className="absolute bottom-0 right-0 size-6 sm:size-7 lg:size-8 bg-primary rounded-full flex items-center justify-center border-4 border-card text-charcoal hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xs sm:text-sm font-bold">photo_camera</span>
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">Alex Johnson</h1>
                <div className="flex items-center gap-2 justify-center md:justify-start text-primary">
                  <span className="material-symbols-outlined text-xs sm:text-sm">location_on</span>
                  <span className="text-xs sm:text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 border border-white/10 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                Preview Profile
              </button>
              <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-primary text-charcoal rounded-xl text-xs sm:text-sm font-bold hover:brightness-110 transition-all neon-glow flex items-center gap-2">
                <span className="material-symbols-outlined text-xs sm:text-sm">save</span>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 lg:gap-8 border-b border-white/5 mb-4 sm:mb-6 lg:mb-8 overflow-x-auto pb-px">
        <button className="flex items-center gap-2 py-3 sm:py-4 border-b-2 border-primary text-primary text-xs sm:text-sm font-bold whitespace-nowrap">
          <span className="material-symbols-outlined text-lg sm:text-xl">person</span>
          Personal Info
        </button>
        <button className="flex items-center gap-2 py-3 sm:py-4 border-b-2 border-transparent text-slate-500 hover:text-white transition-colors text-xs sm:text-sm font-bold whitespace-nowrap">
          <span className="material-symbols-outlined text-lg sm:text-xl">security</span>
          Security
        </button>
        <button className="flex items-center gap-2 py-3 sm:py-4 border-b-2 border-transparent text-slate-500 hover:text-white transition-colors text-xs sm:text-sm font-bold whitespace-nowrap">
          <span className="material-symbols-outlined text-lg sm:text-xl">notifications</span>
          Notifications
        </button>
        <button className="flex items-center gap-2 py-3 sm:py-4 border-b-2 border-transparent text-slate-500 hover:text-white transition-colors text-xs sm:text-sm font-bold whitespace-nowrap">
          <span className="material-symbols-outlined text-lg sm:text-xl">payments</span>
          Billing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
          <div className="bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              <h3 className="text-lg sm:text-xl font-bold text-white">Personal Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="text" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="email" defaultValue="alex.j@fittrack.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="text" defaultValue="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="text" defaultValue="San Francisco, CA" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 lg:mb-8 gap-3 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">monitoring</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Physical Metrics</h3>
              </div>
              <div className="flex gap-1 p-1 bg-charcoal rounded-lg border border-white/5">
                <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold bg-primary text-charcoal">Metric</button>
                <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold text-slate-400">Imperial</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Age</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="number" defaultValue="28" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Weight (kg)</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="number" defaultValue="68.5" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Height (cm)</label>
                <input className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  type="number" defaultValue="172" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-primary">notifications_active</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Notifications</h3>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Daily Reminder</p>
                  <p className="text-xs text-slate-500">Log your workouts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-9 h-5 sm:w-11 sm:h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5">
                <div>
                  <p className="text-sm font-semibold text-white">Weekly Report</p>
                  <p className="text-xs text-slate-500">Summary via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-9 h-5 sm:w-11 sm:h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5">
                <div>
                  <p className="text-sm font-semibold text-white">Social Alerts</p>
                  <p className="text-xs text-slate-500">Likes and comments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-9 h-5 sm:w-11 sm:h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-primary">palette</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Preferences</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Language</label>
                <select className="w-full bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="space-y-2 pt-1 sm:pt-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Privacy</label>
                <button className="w-full flex items-center justify-between bg-charcoal border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-white/5 transition-colors">
                  <span className="text-slate-300">Who can see my profile?</span>
                  <span className="text-primary font-bold">Followers</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 lg:mt-8 bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-red-500 text-2xl sm:text-3xl">delete_forever</span>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">Delete Account</h4>
            <p className="text-xs sm:text-sm text-slate-500">Once deleted, your data cannot be recovered.</p>
          </div>
        </div>
        <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-red-500 border border-red-500/50 rounded-xl text-xs sm:text-sm font-bold hover:bg-red-500 hover:text-white transition-all">
          Delete Forever
        </button>
      </div>

      <footer className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
        © 2024 STRIDE. All rights reserved.
      </footer>
    </div>
  )
}

export default Settings