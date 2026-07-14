"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const BorrowButton = ({ disabled }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = () => {
    if (!session) {
      router.push("/login");
      return;
    }
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    toast.success("Book purchased successfully!");
  };

  return (
    <>
      <button
        onClick={handleAction}
        disabled={disabled}
        className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaShoppingCart className="text-base" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_50px_rgba(59,130,246,0.15)] text-center transform scale-100 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full shadow-lg shadow-blue-500/5">
                <FaCheckCircle className="text-4xl animate-pulse" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
              Confirm Purchase
            </h3>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Are you sure you want to purchase this book? Click OK to complete
              your order.
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleConfirm}
                className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BorrowButton;
