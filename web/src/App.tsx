import { useCallback, useEffect, useState } from "react"
import { CustomError, Doc, PheroClient } from "./phero.generated"
import _fetch from "isomorphic-fetch"

const phero = new PheroClient(_fetch)

export default function App() {
  const [doc, setDoc] = useState<Doc>()
  const [error, setError] = useState<string>()

  const loadData = useCallback(async () => {
    try {
      const newDoc = await phero.docService.getDoc("idkfa")
      setDoc(newDoc)
    } catch (error) {
      if (error instanceof CustomError) {
        setError("something special went wrong")
      } else {
        setError("Something went wrong")
      }
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  if (error) {
    return <p>{error}</p>
  }

  if (!doc) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>Written by: {doc.author.name}</p>
      {doc.content.map((item) => {
        switch (item.type) {
          case "image":
            return <img src={item.src} />
          case "text":
            return <p>{item.content}</p>
        }
      })}

      {doc.x.toDateString()}
    </div>
  )
}
