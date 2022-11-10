import React from 'react';
import ListViewCards from './ListViewCards';

const ListView = ({ products }) => {

  return (
    <>
      {
        products.map((currListViewData, id) => {
          return (
            <>
              <ListViewCards key={currListViewData.id} {...currListViewData} />
            </>
          )
        })
      }
    </>
  )
}

export default ListView;