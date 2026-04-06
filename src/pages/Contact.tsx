import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbxJVqGwcVhdoJO8I4nTdnFPXvxd0uyGGuhHxgmwpnYcpt8PgQ2_encuvTSQNnq6HBdf/exec";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim().slice(0, 100),
          email: email.trim().slice(0, 255),
          message: message.trim().slice(0, 2000),
        }),
      });
      setSent(true);
    } catch {
      setSent(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-xl mx-auto px-4 pt-12 sm:pt-20 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Timer
        </Link>

        {sent ? (
          <div className="glass-card p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-foreground mb-3">
              MESSAGE <span className="text-primary">SENT</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <Link to="/">
              <Button variant="outline" className="gap-2 font-display text-xs tracking-wider uppercase">
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Timer
              </Button>
            </Link>
          </div>
        ) : (
          <div className="glass-card p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-lg sm:text-xl font-bold tracking-wider text-foreground">
                  CONTACT <span className="text-primary">US</span>
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-8 ml-[52px]">
              Have a tip or question? Drop us a line.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
                  Name <span className="text-primary">*</span>
                </label>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="bg-secondary/50 border-border/60 focus:border-primary/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="bg-secondary/50 border-border/60 focus:border-primary/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={2000}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/60 focus:border-primary/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full gap-2 h-11 font-display text-xs tracking-wider uppercase"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
