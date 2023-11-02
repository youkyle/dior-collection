'use client';
import { useRouter } from "next/navigation";

export const handleSubmit = (e: React.SyntheticEvent) => {
    console.log('inside handlesubmit')
    e.preventDefault();
    const router = useRouter()
    router.push("/collection");
}