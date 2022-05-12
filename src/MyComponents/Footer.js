import React from 'react'
import './footer.css'

export const Footer = () => {
  let footerStyle={
      position:"absolute",
       bottom:"0%",
       width:"100%"
  }
  return (
    <div className="bg-dark text-light" style={footerStyle}>
       <p className="text-center">
          Copyright &copy;MyTodoList.com
       </p>
    </div>
  )
}
