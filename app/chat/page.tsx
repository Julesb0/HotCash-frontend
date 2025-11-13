"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChatInterface } from "@/components/chat/chat-interface"
import { ChatHeader } from "@/components/chat/chat-header"

export default function ChatPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  if (!user) {
    return null
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      <ChatInterface user={user} />
    </div>
  )
}
