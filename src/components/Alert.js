import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'60px'}}>
    {props.alertmsg && <div className="container-fluid text-center">
    <div className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertmsg.msg}</strong>
    </div>
    </div>}
    </div>
  )
}