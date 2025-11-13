"use client"

import { User, Bot, Loader2 } from "lucide-react"
import type { ChatMessage as ChatMessageType } from "@/lib/api/types"

interface ChatMessageProps {
  message: ChatMessageType
  isLoading?: boolean
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  return (
    <div className="space-y-4">
      {/* User Message */}
      <div className="flex gap-3 justify-end">
        <div className="flex flex-col items-end gap-2 max-w-[80%]">
          <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3">
            <p className="text-sm whitespace-pre-wrap">{message.pregunta}</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Bot Response */}
      {(message.respuesta || isLoading) && (
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4 text-foreground" />
          </div>
          <div className="flex flex-col gap-2 max-w-[80%]">
            <div className="bg-accent rounded-2xl rounded-tl-sm px-4 py-3">
              {isLoading && !message.respuesta ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Pensando...</span>
                </div>
              ) : (
                <p className="text-sm whitespace-pre-wrap">{message.respuesta}</p>
              )}
            </div>
            {message.timestamp && (
              <span className="text-xs text-muted-foreground px-2">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
