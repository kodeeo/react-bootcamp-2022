// Default Export
export default function AuthorBio(props) {

    console.log(props, 'props')

    return(
        <div>
            <h1>{props.author.name}</h1>
        </div>
    )
}


// Named Export 
export const A = 1000;
export const B = 1000;

export const USER = {
    name: 'Choyan',
    location: 'Feni'
}

