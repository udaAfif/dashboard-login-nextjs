/*eslint-disable */
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PageTwo from './page2';

const CollectionPosts = () => {
  const [dataPosts, setDataPosts] = useState<any[]>([])

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      axios({
        method: 'GET',
        url: `${process.env.API}`,
      })
        .then((result) => setDataPosts(result.data)).catch((error) => console.log(error))
    }
    return () => {
      isCancelled = true
    }
  }, [])
  return (
    <>
    <div className="align-content-center"> 
        <Button href="/" className='my-2 mx-2'>1</Button> 
        <Button href='/PageTwo' className='my-2'>2</Button>
    </div>
      {dataPosts.map((data) => (
        <Table key={data.id} striped bordered hover responsive>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  )
}
export default CollectionPosts

