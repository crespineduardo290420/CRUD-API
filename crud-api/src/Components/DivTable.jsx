import React from 'react'

const DivTable = ({children, col,off, classLoad, classTable}) => {
  return (
    <div className='row mt-3'>
        <div className={'col-md- '+col+' offset-'+off}>
            <div className={'card border border-white text-center' +classLoad}>
                <div className='card-body'>
                    <img src="/loading.gf" className='img-fluid' alt="" />
                </div>
            </div>
            <div className={'table-responsive '+classTable}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DivTable