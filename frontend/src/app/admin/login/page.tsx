"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Mock authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === "admin@garasirumahan.com" && password === "admin123") {
        // Successful login
        localStorage.setItem("admin_token", "mock_token_123");
        router.push("/admin");
      } else {
        setError("Email atau password salah.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[420px] bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-dm-sans text-[var(--color-primary)]">
            GARASIRUMAHAN
          </h1>
          <p className="text-slate-500 mt-2">Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <Input 
              type="email" 
              required 
              placeholder="admin@garasirumahan.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                required 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
