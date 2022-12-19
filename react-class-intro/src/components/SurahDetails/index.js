import { convertToArabicNumbers } from "../../utils/convertToArabicNumber"

export default function SurahDetails({surahFull}) {
    return (
        <div>
            {surahFull.map(ayah => (
                <div className="text-4xl my-16">
                    <p className="text-right">{ayah.text_uthmani} <span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{convertToArabicNumbers(ayah.verse_number)}</span></p>
                    <p className="flex items-center text-left w-full"><span className="rounded-full border w-8 h-8 bg-blue-50 justify-center items-center inline-flex ml-4 mr-2 text-base">{ayah.verse_number}</span><span>{ayah.translations[0].text}</span></p>
                </div>
            ))}
        </div>
    )
}