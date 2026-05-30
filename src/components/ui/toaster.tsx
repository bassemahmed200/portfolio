"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error";
}

const toastVariants: Record<string, string> = {
  default: "glass border-border",
  success: "glass border-success/30",
  error: "glass border-destructive/30",
};

function Toast({ className, variant = "default", ...props }: ToastProps) {
  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm rounded-xl p-4 shadow-2xl animate-in slide-in-from-bottom-5",
        toastVariants[variant],
        className
      )}
      {...props}
    />
  );
}

function ToastProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Toaster() {
  const [toasts, setToasts] = React.useState<
    { id: string; message: string; variant?: "default" | "success" | "error" }[]
  >([]);

  React.useEffect(() => {
    (window as unknown as { __addToast?: (t: { id: string; message: string; variant?: "default" | "success" | "error" }) => void }).__addToast = (toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3000);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant}>
          <p className="text-sm font-medium">{toast.message}</p>
        </Toast>
      ))}
    </div>
  );
}

export { Toast, Toaster, ToastProvider };
