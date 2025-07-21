import TranslateIcon from "../components/icons/TranslateIcon";
import InspireLogo from "../assets/Inspire_logo.png";
import leftBackground from "../assets/9ff212b8-1868-49b0-be5c-ab2018861a9e.png";
import rightBackground from "../assets/04b69aee-2039-421b-a265-f928c2adc47e.png";
import microsoft from "../assets/microsoft.png";
import type { LoginData } from "../types/authTypes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SupportIcon from "@/components/icons/SupportIcon";
import React, { useState } from "react";
import { login } from "@/api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: LoginData = {
      Email: email,
      Password: password,
    };

    try {
      const res = await login(data);
      console.log("JWT Token:", res.token); // ✅ نطبع التوكن هنا
      localStorage.setItem("token", res.token);
      setError("");
    } catch (err: any) {
      console.error("Login failed:", err);
      if (err.response?.status === 401) {
        setError("المستخدم غير مسجل أو كلمة المرور خاطئة .");
      } else {
        setError("حدث خطأ غير متوقع. الرجاء المحاولة لاحقًا.");
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex flex-col">
      {/* خلفية اليسار */}
      <img
        src={leftBackground}
        alt="Left Background"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[30%] object-contain pointer-events-none select-none z-0"
      />
      {/* خلفية اليمين */}
      <img
        src={rightBackground}
        alt="Right Background"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[30%] object-contain pointer-events-none select-none z-0"
      />
      {/* رأس الصفحة */}
      <div className="p-6">
        <div className="relative z-10">
          <header className="flex justify-between items-center">
            <img
              src={InspireLogo}
              alt="Inspire Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="h-8 w-auto object-contain">
              <TranslateIcon />
            </div>
          </header>
        </div>

        {/* محتوى تسجيل الدخول */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gap-6 px-4">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 my-4">
                Welcome Back
              </CardTitle>
              <Button className="w-full rounded-full border bg-white text-black my-3 flex items-center justify-center gap-2 py-3">
                <img
                  src={microsoft}
                  alt="Microsoft Logo"
                  className="w-5 h-5 object-contain"
                />
                Login with Microsoft 365
              </Button>
            </CardHeader>
            <CardContent className="w-full">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div className="grid gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <div className="flex items-center mb-3">
                  <Checkbox className=" hover: cursor-pointer" />
                  <p className="pl-2">Remember me</p>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-[#13432B] to-[#185534] hover:opacity-90 transition-colors duration-300 rounded-full"
                >
                  Login
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex-col gap-1 w-full">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Jeeny’s{" "}
                <a href="/terms" className="underline hover:text-primary">
                  Terms and Conditions{" "}
                </a>
                and{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </main>

        <footer className="relative z-10 mt-6 flex gap-2 text-sm text-gray-600  items-center">
          <SupportIcon />
          <p className="hover: cursor-pointer hover:text-emerald-950">
            Support
          </p>
        </footer>
      </div>{" "}
    </div>
  );
}
