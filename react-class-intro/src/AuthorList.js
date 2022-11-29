import AuthorBio, { A, B, USER } from "./AuthorBio"

export const AuthorList = () => {
    const authors = [
        {
            id: 1,
            name: 'Humayun Ahmed'
        },
        {
            id: 2,
            name: "Kazi Anwar Hossain"
        },
        {
            id: 3,
            name: 'Rakib Hasan'
        }
    ]
    
    return (
        <div>
            {
                authors.map(author => (
                    <AuthorBio 
                        author={author} 
                        authors={authors} 
                    />
                ))
            }
        </div>
    )
}
