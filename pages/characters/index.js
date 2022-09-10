import React from 'react'
import Link from 'next/link'
import slugify from 'slugify'


export const getStaticProps = async () => {
    const res = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await res.json()

    return {
        props: {
            characters: data,
        }
    }
}

// /characters/[id]
const Characters = ({ characters }) => {
    // console.log('character', characters)
    return (
        <>
            <h1>Characters List</h1>
            <ul >
                {characters.slice(0, 10).map((character, index) => {
                    return (

                        <li key={`character-${index}`}>
                            <Link href={`/characters/${slugify(character.name).toLowerCase()}`}>
                                <a >{character.name}</a>
                            </Link>

                        </li>

                    )

                })}
            </ul>
        </>
    )
}

export default Characters