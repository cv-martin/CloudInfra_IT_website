"use client";

import Header from "@/components/Header";
import { Mail, Phone, MapPin, Send, MessageSquare, UserPlus } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [role, setRole] = useState<"employer" | "candidate">("employer");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content Left */}
          <div>
            <h1 className="text-4xl font-extrabold text-white sm:text-6xl tracking-tight leading-10 uppercase italic">
              Connect with <span className="text-accent underline underline-offset-8 decoration-accent/30 tracking-tighter not-italic">Infrastructure</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-9 max-w-xl">
              Ready to accelerate your technical roadmap or find your next high-sovereignty role? 
              Choose your path below and our team will be in touch within 24 hours.
            </p>
            
            <div className="mt-16 space-y-8">
               <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-none">
                     <Mail className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white uppercase tracking-widest">Email</p>
                     <p className="text-muted-foreground">hello@cloudinfrait.com</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-none">
                     <Phone className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white uppercase tracking-widest">Phone</p>
                     <p className="text-muted-foreground">+1 (xxx) xxx-xxxx</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-none">
                     <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white uppercase tracking-widest">Office</p>
                     <p className="text-muted-foreground">Farmers Branch, TX</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="glass-panel p-8 sm:p-12 rounded-[2rem] border-2 border-border/50 shadow-2xl relative overflow-hidden">
             <div className="flex items-center gap-4 mb-10">
                <button 
                  onClick={() => setRole("employer")}
                  className={`flex-1 py-4 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${role === 'employer' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white/5 border border-border text-muted-foreground hover:bg-white/10'}`}
                >
                  <MessageSquare className="h-5 w-5" /> Hiring Talent
                </button>
                <button 
                  onClick={() => setRole("candidate")}
                  className={`flex-1 py-4 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${role === 'candidate' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white/5 border border-border text-muted-foreground hover:bg-white/10'}`}
                >
                  <UserPlus className="h-5 w-5" /> Searching Jobs
                </button>
             </div>

             <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-muted/40 border-border/50 rounded-lg py-3 px-4 focus:ring-accent text-foreground" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full bg-muted/40 border-border/50 rounded-lg py-3 px-4 focus:ring-accent text-foreground" placeholder="j.doe@company.com" />
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest">Phone Number</label>
                      <input type="tel" className="w-full bg-muted/40 border-border/50 rounded-lg py-3 px-4 focus:ring-accent text-foreground" placeholder="+1 (555) 000-0000" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest">{role === 'employer' ? 'Company Name' : 'Current Role'}</label>
                      <input type="text" className="w-full bg-muted/40 border-border/50 rounded-lg py-3 px-4 focus:ring-accent text-foreground" placeholder="..." />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-white uppercase tracking-widest">How can we help?</label>
                   <textarea rows={4} className="w-full bg-muted/40 border-border/50 rounded-lg py-3 px-4 focus:ring-accent text-foreground" placeholder="Briefly describe your requirements..." />
                </div>

                <div className="space-y-4 pt-4">
                   <label className="flex items-start gap-4 cursor-pointer group">
                      <input type="checkbox" className="mt-1 rounded bg-muted/40 border-border/50 text-accent focus:ring-accent" />
                      <span className="text-xs text-muted-foreground leading-5 group-hover:text-foreground/80 transition-colors">
                        <strong>Compliance:</strong> By checking this box, I consent to receive SMS text messages from CloudInfra IT regarding my inquiry. I understand I can opt-out at any time. Data & message rates may apply.
                      </span>
                   </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent text-white py-5 rounded-full font-extrabold text-xl shadow-xl shadow-accent/25 hover:brightness-110 active:scale-95 transition-all mt-8 flex items-center justify-center gap-3"
                >
                  <Send className="h-6 w-6" /> Send Message
                </button>
             </form>
          </div>
        </div>
      </main>
    </div>
  );
}
