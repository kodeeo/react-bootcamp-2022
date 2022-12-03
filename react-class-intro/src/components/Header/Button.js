export default function Button({text, color}){
    return (
        <button className={`bg-${color}-700 text-white p-1.5 rounded-[3px]`}>{text}</button>  
    )
}