import React from 'react'
import slugify from 'slugify'

export const getStaticPaths = async () => {

    const res = await fetch('http://hp-api.herokuapp.com/api/characters', {
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
        },
    })

    const data = await res.json()


    const paths = data.map(character => {
        return {
            params:
                { slug: slugify(character.name).toLowerCase() }
        }
    })

    console.log('paths', paths)

    return {
        paths,
        fallback: false,

    }
}

// context - this is what we get from request
export const getStaticProps = async (context) => {
    console.log('context', context)

    const slug = context.params.slug

    const res = await fetch('http://hp-api.herokuapp.com/api/characters' + slug)
    const data = await res.json()

    return {
        props: {
            character: data
        }
    }

}

const DetailsCharacter = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
        </div>
    )
}

export default DetailsCharacter