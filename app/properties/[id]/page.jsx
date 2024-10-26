'use client'
import * as React from 'react'

const PropertyPage = ({ params }) => {
    // asynchronous access of `params.id`.
  const { id } = React.use(params)
    return <div>Property Page {id}</div>;
};
export default PropertyPage;