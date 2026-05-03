"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const BorrowButton = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleBorrow = () => {
    if (!session) {
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium"
    >
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
