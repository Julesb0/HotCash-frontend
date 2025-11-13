// Simple API helpers for student project
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  if (!response.ok) throw new Error("Error al iniciar sesión")
  return response.json()
}

export async function registerUser(name: string, email: string, password: string) {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  })
  if (!response.ok) throw new Error("Error al crear cuenta")
  return response.json()
}

export async function sendMessage(userId: number, message: string) {
  const response = await fetch(`${API_URL}/chatbot/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, question: message }),
  })
  if (!response.ok) throw new Error("Error al enviar mensaje")
  return response.json()
}

export async function getHistory(userId: number) {
  const response = await fetch(`${API_URL}/chatbot/history/${userId}`)
  if (!response.ok) throw new Error("Error al cargar historial")
  return response.json()
}
