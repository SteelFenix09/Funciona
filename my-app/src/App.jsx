import { useMemo, useState } from "react"
import { analizaCodigo } from "./lectura/Lexico"

function App() {
  const [codigo, setCodigo] = useState('funcion sumar == 10 * 5 ')
  const tokens = useMemo(() => analizaCodigo(codigo), [codigo])
  const coloresTokens = {
    PalabraClave: "bg-purple-200 text-purple-800 border-purple-400",
    Numero: "bg-amber-200 text-amber-800 border-amber-400",
    Operador: "bg-blue-200 text-blue-800 border-blue-400",
    Texto: "bg-emerald-200 text-emerald-800 border-emerald-400",
    Delimitador: 'bg-purple-200 text-purple-800 border-purple-400',
    DESCONOCIDO: "bg-red-200 text-red-800 border-red-400",
  }



  return (
    <>
      <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900">Analizador Léxico</h1>
          <p className="text-sm text-gray-600">Analiza el código fuente y muestra los tokens léxicos</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">Codigo fuente</label>
            <textarea className="w-full h-48 p-3 font-mono border rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-950 text-white resize-none"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Escribe el codigo..."
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700">
              tokens generados
            </label>
            <div className="w-full h-48 p-4 border rounded-2xl bg-gray-900 overflow-y-auto flex flex-wrap gap-2 content-start">
              {tokens.length == 0 ? (
                <span className="text-gray-500 italic text-sm">
                  Escribe algo ...
                </span>
              ) : (
                tokens.map((token) => (
                  <div
                    key={token.id}
                    className={`px-3 py-1 rounded-md text-xs font-mono border ${coloresTokens[token.tipo] || coloresTokens.DESCONOCIDO}`}
                    title={`Tipo: ${token.tipo}`}
                  >
                    <span className="font-bold">{token.valor}</span>
                    <span className="block text-[10px] opacity-70 uppercase tracking-widest">{token.tipo}</span>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div >
    </>
  )

}

export default App
