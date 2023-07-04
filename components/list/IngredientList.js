import React from 'react'
import List from '@/components/list/List'
import LinkCard from '@/components/cards/LinkCard'

const IngredientList = ({items}) => {
  return (
    <List>
      {
        items?.map(({imgUrl, title, to}, i) => (
          <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6' key={`${title}-${i}`}>
            <LinkCard to={to} imgUrl={imgUrl} imgSize={100} text={title} />
          </div>
        ))
      }
    </List>
  )
}

export default IngredientList
