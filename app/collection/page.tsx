import React from 'react'
import { ApolloWrapper } from '../lib/apollo-wrapper'
import CollectionCards from '../components/collectionCards'

const Collection = () => {
    return (
        <ApolloWrapper>
            <CollectionCards />
        </ApolloWrapper>

    )
}

export default Collection;