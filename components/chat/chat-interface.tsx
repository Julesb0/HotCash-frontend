"use client"

import { useState, useEffect } from "react"
import { sendMessage, getHistory } from "@/lib/api"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"

interface Message {
  pregunta: string
  respuesta: string
}

export function ChatInterface({ user }: { user: any }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Load chat history
    async function loadHistory() {
      try {
        const history = await getHistory(user.id)
        setMessages(history)
      } catch (error) {
        console.log("Error loading history")
      }
    }
    loadHistory()
  }, [user.id])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const newMessage = { pregunta: text, respuesta: "" }
    setMessages([...messages, newMessage])
    setLoading(true)

    try {
      const response = await sendMessage(user.id, text)
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1].respuesta = response.respuesta
        return updated
      })
    } catch (error) {
      alert("Error al enviar mensaje")
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto max-w-4xl space-y-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Hola, {user.nombre}</h2>
                <p className="text-muted-foreground max-w-md">
                  Soy tu asistente virtual de HotCash. Pregúntame sobre finanzas, marketing, aspectos legales y más.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mt-8">
                <button
                  onClick={() => handleSend("¿Cómo puedo mejorar mis ventas?")}
                  className="p-4 text-left border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="text-sm">¿Cómo puedo mejorar mis ventas?</p>
                </button>
                <button
                  onClick={() => handleSend("¿Qué permisos legales necesito?")}
                  className="p-4 text-left border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="text-sm">¿Qué permisos legales necesito?</p>
                </button>
                <button
                  onClick={() => handleSend("¿Cómo manejo mis finanzas?")}
                  className="p-4 text-left border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="text-sm">¿Cómo manejo mis finanzas?</p>
                </button>
                <button
                  onClick={() => handleSend("Dame consejos de marketing")}
                  className="p-4 text-left border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="text-sm">Dame consejos de marketing</p>
                </button>
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} isLoading={loading && i === messages.length - 1} />
            ))
          )}
        </div>
      </div>
      <ChatInput onSendMessage={handleSend} isLoading={loading} />
    </div>
  )
}
