import { Suspense, useEffect, useState } from "react"
import {getCuts} from "../utils/getCuts.ts";
interface Cut {
    series: string,
    "author(s)": string,
    source: string,
    cut_id: string,
    url: string
}
export function Sakuga() {
    const [data, setData] = useState({} as Cut)
    useEffect(() => {
        getCuts().then((data) => setData(data))
    }, [])
    return (
        <Suspense fallback={<p>Cargando...</p>}>
         <img src={data.url} alt="" className="w-5/6 md:col-start-1 mx-auto rounded-md h-full col-span-2 row-span-2"/>
        <article className="mx-auto shadow-xl w-4/5 md:w-3/5 flex flex-col md:col-start-3 md:row-start-2 md:row-span-2 justify-around items-center rounded-lg bg-mongoose-600 col-span-2 text-mongoose-200">
            <h2>{`From: ${data.series}, ${data.source}`}</h2>
            <h3>{`Author(s): ${data["author(s)"]}`}</h3>
            <button onClick={() => getCuts().then(data => setData(data))} className="py-2 px-4 rounded-xl shadow-xl active:bg-mongoose-800 hover:scale-110 transition hover:text-mongoose-100 border-2 border-mongoose-200">Get Another cut!</button>
        </article>
        </ Suspense>
    )
}

export default function SakugaRetriever() {
    return (
        <Suspense fallback={<p>Cargando...</p>}>
            <Sakuga />
        </Suspense>
    )
}