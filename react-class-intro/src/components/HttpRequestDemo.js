import { useEffect, useState } from "react"
import axios from "axios"


export default function HttpRequestDemo() {
    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        axios.get('https://api.quran.com/api/v4/chapters?language=en')
            .then(function(data){
                // console.log(data.data.chapters[10])
                setSurahs(data.data.chapters.slice(0, 100))
            })
    }, [])


    // JavaScript Promise => Asynchronous operation

    return (
        <div>
            <h1 className="font-bold text-2xl text-lime-800">HTTP Request Demo</h1>

            <ul>
                {
                    surahs.map(surah => (
                        <li key={surah.id}> <em>{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small></li>
                    ))
                }
            </ul>

        </div>
    )
}