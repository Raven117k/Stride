import React, { useState } from 'react'

function AdminSettings() {
    const [settings, setSettings] = useState({
        username: "Admin",
        email: "admin@example.com",
        password: "",
        notifications: true,
        darkMode: true,
    })

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target
        setSettings(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSave = () => {
        // For now, just log it
        console.log("Saved Settings:", settings)
        alert("Settings saved!")
    }

    return (
        <div className="min-h-[100dvh] bg-dark-bg p-4 sm:p-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        Admin Settings
                    </h2>
                    <p className="text-gray-500 text-sm font-medium">
                        Manage your account and dashboard preferences
                    </p>
                </div>

                {/* Form */}
                <div className="bg-card rounded-2xl border border-white/10 p-6 flex flex-col gap-6">
                    {/* Account Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg">Account Information</h3>

                        <div className="flex flex-col sm:flex-row sm:gap-4 gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={settings.username}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-gray-800 rounded-lg py-2 px-3 text-white text-sm"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={settings.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-gray-800 rounded-lg py-2 px-3 text-white text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={settings.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full bg-dark-bg border border-gray-800 rounded-lg py-2 px-3 text-white text-sm"
                            />
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg">Preferences</h3>

                        <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 items-start">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={settings.notifications}
                                    onChange={handleChange}
                                    className="w-4 h-4 accent-primary"
                                />
                                <span className="text-gray-400 text-sm font-bold">Enable Notifications</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="darkMode"
                                    checked={settings.darkMode}
                                    onChange={handleChange}
                                    className="w-4 h-4 accent-primary"
                                />
                                <span className="text-gray-400 text-sm font-bold">Dark Mode</span>
                            </label>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 rounded-xl bg-primary text-black font-black uppercase hover:bg-primary/80 transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-card rounded-2xl border border-red-500/20 p-6 flex flex-col gap-4">
                    <h3 className="text-red-400 font-bold text-lg">Danger Zone</h3>
                    <p className="text-gray-500 text-sm">
                        Delete your account or reset your dashboard settings. This action cannot be undone.
                    </p>
                    <button className="px-6 py-2 rounded-xl bg-red-600 text-white font-black uppercase hover:bg-red-700 transition">
                        Delete Account
                    </button>

                </div>
            </div>
        </div>
    )
}

export default AdminSettings
