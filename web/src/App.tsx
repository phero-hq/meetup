import { useCallback, useEffect, useState } from "react"

export default function App() {
  const [doc, setDoc] = useState<any>()
  const [error, setError] = useState<string>()

  const loadData = useCallback(async () => {
    try {
      // TODO: Load data
    } catch (error) {
      setError("Something went wrong")
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
      <p>Written by: {/* TODO: render author */}</p>
      {/* TODO: render components */}
    </div>
  )
}
