import { createService } from "@phero/server"

interface Doc {
  id: string
  author: User
  content: Component[]
  x: Date
}

interface User {
  id: string
  name: string
  email?: string
}

interface TextComponent {
  type: "text"
  content: string
}

interface ImageComponent {
  type: "image"
  src: string
}

type Component = TextComponent | ImageComponent

class CustomError extends Error {}

async function getDoc(id: string): Promise<Doc> {
  return { author: { id: "321", name: "Aad" }, content: [], x: new Date() } as any
}

export const docService = createService({ getDoc })
