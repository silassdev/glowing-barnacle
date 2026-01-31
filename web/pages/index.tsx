import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [schema, setSchema] = useState<any>(null)

  const upload = async () => {
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('http://localhost:8001/convert', { method: 'POST', body: fd })
    const json = await res.json()
    setSchema(json)
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">image-to-code demo</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <button onClick={upload} className="ml-4">Upload</button>
      <pre className="mt-6">{schema ? JSON.stringify(schema, null, 2) : 'No schema yet'}</pre>
    </main>
  )
                                                  }
