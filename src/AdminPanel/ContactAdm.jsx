import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Url from '../config'
function ContactAdm() {

  const [con, setCon] = useState([])

  useEffect( () => {
    async function demo(){
      const res = await axios.get(`${Url}/contact`)
      setCon(res.data)
    }
    demo()
  }, [])

  const deleteContcat = async (_id) => {
    const url = `${Url}/contact/${_id}`
    if (window.confirm("O'chrishni xoxlaysizmi?")) {
     await axios.delete(url)
    }
    window.location.reload(false)
  }

  return (
    <>
      <NavbarAdmin />
      <div className='contacAdmin'>
        <div className="container pb-5 ">
          {
            con.map((tac) => {
              return (
                <div className="row justify-content-center" key={tac._id}>
                  <div className="col-md-8">
                    <div className="media g-mb-30 media-comment">
                      <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Image Description" />
                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div className="g-mb-15">
                          <h5 className="h5 g-color-gray-dark-v1 mb-0">{tac.name} {tac.surename}</h5>
                          <span className="g-color-gray-dark-v4 g-font-size-12">{tac.tel}</span>
                        </div>
                        <p>{tac.title}</p>
                      </div>
                    </div>
                    <button
                      className='btn btn-danger btnContact'
                      onClick={() => { deleteContcat(tac._id) }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ContactAdm;