import React from 'react'

export default function Alert(props) {
  return (
    props.alertmsg && <div className="container-fluid text-center mt-2">
    <div className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertmsg.msg}</strong>
    </div>
    </div>
  )
}