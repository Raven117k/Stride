import React from 'react'

function MealPlanner() {
    return (
        <div className="max-w-[1400px] mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="pt-4 sm:pt-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">Meal Planner</h2>
                <p className="text-sm sm:text-base text-slate-500 mt-1">Nutrition for <span className="text-primary font-medium">Monday, Oct 23rd</span></p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calories</span>
                        <span className="material-symbols-outlined text-success">local_fire_department</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-white">1,450</h3>
                        <span className="text-xs font-bold text-slate-500 uppercase">/ 2,200 kcal</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full">
                        <div className="h-full bg-success rounded-full neon-glow" style={{width: "65%"}}></div>
                    </div>
                </div>
                
                <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protein</span>
                        <span className="material-symbols-outlined text-success">monitor_heart</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-white">79</h3>
                        <span className="text-xs font-bold text-slate-500 uppercase">/ 150g</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-success">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        <span>GOOD INTAKE</span>
                    </div>
                </div>
                
                <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Carbs</span>
                        <span className="material-symbols-outlined text-primary">battery_charging_full</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-white">89</h3>
                        <span className="text-xs font-bold text-slate-500 uppercase">/ 220g</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{width: "40%"}}></div>
                    </div>
                </div>
                
                <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fats</span>
                        <span className="material-symbols-outlined text-slate-400">dark_mode</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-white">71</h3>
                        <span className="text-xs font-bold text-slate-500 uppercase">/ 85g</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary">
                        <span className="material-symbols-outlined text-sm">warning</span>
                        <span>WATCH INTAKE</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                <div className="lg:col-span-8 bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-10 gap-4">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">Today's Meals</h3>
                            <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">Calories: 1,450 / 2,200</p>
                        </div>
                        <div className="flex gap-1 p-1 bg-charcoal rounded-lg border border-white/5">
                            <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold text-slate-400">Breakfast</button>
                            <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold bg-primary text-charcoal">Lunch</button>
                            <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold text-slate-400">Dinner</button>
                            <button className="px-2 sm:px-3 py-1.5 rounded-md text-[10px] font-bold text-slate-400">Snacks</button>
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-charcoal border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-primary/40 transition-all group">
                            <div className="w-full md:w-40 lg:w-48 h-32 md:h-auto overflow-hidden">
                                <img alt="Breakfast" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrMVj9kbFOpuuB9rbRrMmf_k097gMZHEYIxZTsLcau4uTRufQ-fuGjzjHFHkzQKGtttNvzWgrXnSf4qDsf7Zr0hR9qLVcQ597Tjk6zgjKqsikGzEHFrcvXS7XRgxnxv3cbyMfEfHXexn2ZBmnZT0R6cB6zamXiOvNW_Rbzf6HsPkNk3JUoNnD_ngjMnwZu1qH9V9qvN2ESg7_pAMlzNzSi-O6-aV-QoJ5myC1Z6W1R4f1O37zBHh4FbzxM4ipfeA7h4CVGgyhHUA" />
                            </div>
                            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
                                    <div>
                                        <h4 className="text-white font-bold text-base sm:text-lg">Breakfast</h4>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1">2 items • 07:30 AM</p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <p className="font-black text-success text-xl sm:text-2xl">420</p>
                                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">kcal</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 sm:mt-6 gap-3 sm:gap-0">
                                    <div className="flex gap-3 sm:gap-4">
                                        <span className="text-xs text-slate-400">P: <span className="text-white font-medium">24g</span></span>
                                        <span className="text-xs text-slate-400">C: <span className="text-white font-medium">12g</span></span>
                                        <span className="text-xs text-slate-400">F: <span className="text-white font-medium">31g</span></span>
                                    </div>
                                    <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-xl text-xs sm:text-sm font-bold hover:bg-primary hover:text-charcoal transition-all">
                                        <span className="material-symbols-outlined text-xs sm:text-sm">add</span>
                                        Add Food
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-charcoal border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-primary/40 transition-all group">
                            <div className="w-full md:w-40 lg:w-48 h-32 md:h-auto overflow-hidden">
                                <img alt="Lunch" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl3Gx3RRKT_ZOjpuj6FVi_yR3c76AYw_IKBB3IzS4Dirj-zadB6k4HZX68lHXe5IsWwWozp1RhJLBwP9bvFdyo-5OVhZ1Dq4xNvXPzNK9wJI3-Ri5zwjdmuq6Ub_oqM-TZiU78r8P1lDi_uVzrplXdf6IyKA3FcKHQCy399cqcVOSHe9ga5rn5uzA3-3bXWWS2rqY2dwAUS5QRNOqYd3mpZMpmiMPGr0k63BBtB71z_QKJKTFbjQ8naXJNEhsoW73wGWnDSfaXvw" />
                            </div>
                            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
                                    <div>
                                        <h4 className="text-white font-bold text-base sm:text-lg">Lunch</h4>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1">3 items • 12:45 PM</p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <p className="font-black text-success text-xl sm:text-2xl">680</p>
                                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">kcal</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 sm:mt-6 gap-3 sm:gap-0">
                                    <div className="flex gap-3 sm:gap-4">
                                        <span className="text-xs text-slate-400">P: <span className="text-white font-medium">45g</span></span>
                                        <span className="text-xs text-slate-400">C: <span className="text-white font-medium">52g</span></span>
                                        <span className="text-xs text-slate-400">F: <span className="text-white font-medium">18g</span></span>
                                    </div>
                                    <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-xl text-xs sm:text-sm font-bold hover:bg-primary hover:text-charcoal transition-all">
                                        <span className="material-symbols-outlined text-xs sm:text-sm">add</span>
                                        Add Food
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-charcoal border border-dashed border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary text-xl sm:text-2xl">dinner_dining</span>
                            </div>
                            <h4 className="font-bold text-white text-base sm:text-lg">Dinner</h4>
                            <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6">You haven't logged dinner yet</p>
                            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm font-bold hover:bg-primary hover:text-charcoal transition-all">
                                Quick Add Dinner
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="bg-card border border-white/5 p-4 sm:p-6 lg:p-8 rounded-2xl">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-6 lg:mb-8">Hydration</h3>
                        <div className="relative flex justify-center items-center mb-6 lg:mb-10">
                            {/* Mobile/Tablet SVG */}
                            <svg className="w-32 h-32 sm:w-44 sm:h-44 lg:hidden transform -rotate-90">
                                <circle cx="64" cy="64" fill="transparent" r="54" stroke="rgba(255,255,255,0.03)" strokeWidth="10"></circle>
                                <circle cx="64" cy="64" fill="transparent" r="54" stroke="#22D3EE" strokeDasharray="339.3" strokeDashoffset="140" strokeWidth="10"></circle>
                            </svg>
                            
                            {/* PC/Large SVG (original dimensions) */}
                            <svg className="hidden lg:block w-44 h-44 transform -rotate-90">
                                <circle cx="88" cy="88" fill="transparent" r="74" stroke="rgba(255,255,255,0.03)" strokeWidth="12"></circle>
                                <circle cx="88" cy="88" fill="transparent" r="74" stroke="#22D3EE" strokeDasharray="464.9" strokeDashoffset="140" strokeWidth="12"></circle>
                            </svg>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-2xl sm:text-3xl font-black text-white">1.5L</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">/ 2.0L Goal</p>
                            </div>
                        </div>
                        <button className="w-full py-2.5 sm:py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs sm:text-sm font-bold hover:bg-primary hover:text-charcoal transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-xs sm:text-sm">add</span>
                            Add 250ml Water
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-card to-charcoal border border-success/20 rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <span className="material-symbols-outlined text-success text-lg sm:text-xl">lightbulb</span>
                            <span className="font-bold text-xs sm:text-sm tracking-tight uppercase text-success">Daily Insight</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic">
                            "Your protein intake is excellent today. For dinner, consider a low-fat option like grilled tilapia to stay within your daily fat budget while meeting calorie targets."
                        </p>
                    </div>

                    <div className="bg-card border border-white/5 rounded-2xl p-4 sm:p-6 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors">history</span>
                            <span className="text-sm font-bold text-white">Nutrition History</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white">chevron_right</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pb-4 sm:pb-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Weekly Meal Plan</h3>
                    <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        View Full Week <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-success/10 rounded-xl text-success group-hover:bg-success group-hover:text-charcoal transition-all">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">egg_alt</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Tomorrow • AM</span>
                        </div>
                        <h4 className="text-white font-bold text-base sm:text-lg">Protein Breakfast</h4>
                        <p className="text-slate-500 text-xs mt-1 mb-4 sm:mb-6">480 kcal • 35g protein</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-success uppercase">Planned</span>
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-slate-400 uppercase tracking-tighter">High-Protein</span>
                        </div>
                    </div>
                    
                    <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-charcoal transition-all">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">lunch_dining</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Tomorrow • PM</span>
                        </div>
                        <h4 className="text-white font-bold text-base sm:text-lg">Lean Lunch Bowl</h4>
                        <p className="text-slate-500 text-xs mt-1 mb-4 sm:mb-6">620 kcal • Balanced macros</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-primary uppercase">Scheduled</span>
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-slate-400 uppercase tracking-tighter">Meal Prep</span>
                        </div>
                    </div>
                    
                    <div className="bg-card border border-white/5 p-4 sm:p-6 rounded-2xl hover:border-primary/40 transition-all group">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-charcoal transition-all">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">dinner_dining</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Oct 24 • PM</span>
                        </div>
                        <h4 className="text-white font-bold text-base sm:text-lg">Fish & Greens</h4>
                        <p className="text-slate-500 text-xs mt-1 mb-4 sm:mb-6">550 kcal • Low carb</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-slate-400 uppercase">Suggested</span>
                            <span className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-slate-400 uppercase tracking-tighter">Low-Fat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealPlanner