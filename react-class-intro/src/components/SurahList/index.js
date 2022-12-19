import { useState, useEffect } from "react";
import axios from "axios";

export default function SurahList({ changeSelectedSurah, selectedSurah }) {
    const [surahs, setSurahs] = useState([]);

    const changeSelect = (e) => {
        changeSelectedSurah(e.target.value)
    }

    useEffect(() => {
        axios.get('https://api.quran.com/api/v4/chapters?language=en')
            .then(function(data){
                setSurahs(data.data.chapters)
            })
    }, [])


    return(
        <div>
             {/* Controlled Element */}
            <h1 className="text-4xl font-bold mb-5">Surah List</h1>
            <ul>
                {/* <input type="text" className="w-full mb-4 border border-gray-500 h-12" value={selectedSurah} /> */}
                <select className="w-full border-2 border-gray-600 px-4 py-2" value={selectedSurah} onChange={changeSelect}>
                    {
                        surahs.map(surah => (
                            <option value={surah.id}><em>{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small></option>
                        ))
                    }
                </select>

                {/* {
                    surahs.map(surah => (
                        <li key={surah.id} onClick={() => changeSelectedSurah(surah.id)} className="cursor-pointer my-8 hover:text-green-600 hover:font-bold">
                            <em>{surah.name_arabic}</em> {surah.name_simple} - <small>{surah.revelation_place}</small>
                        </li>
                    ))
                } */}

            </ul>
        </div>
    )
}