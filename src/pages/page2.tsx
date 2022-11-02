import Table from 'react-bootstrap/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
/*eslint-disable */
const PageTwo = () => {
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
      {dataPosts.map((data) => (
          <Table key={data.id} striped bordered hover responsive>
          <thead>
            <tr>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.title}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  )
}
export default PageTwo
