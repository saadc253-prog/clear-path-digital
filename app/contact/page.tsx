import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Info */}
                    <FadeIn className="lg:sticky lg:top-32">
                        <span className="inline-block py-1 px-4 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Let's Build <br /> <span className="text-muted-foreground">Together.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light max-w-lg mb-12 leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Let's discuss how we can help you achieve your digital goals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Email Us</h4>
                                    <p className="text-muted-foreground font-light">hello@clearpath.digital</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Call Us</h4>
                                    <p className="text-muted-foreground font-light">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Glass Form */}
                    <FadeIn delay={0.2}>
                        <form className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                                    <input id="name" className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                    <input id="email" type="email" className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                                <input id="subject" className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                <textarea id="message" className="flex min-h-[160px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder:text-muted-foreground/50 resize-y" placeholder="Tell us about your project..." />
                            </div>
                            <Button className="w-full h-12 text-base rounded-full bg-white text-black hover:bg-white/90 font-medium">Send Message</Button>
                        </form>
                    </FadeIn>

                </div>
            </div>
        </main>
    );
}
