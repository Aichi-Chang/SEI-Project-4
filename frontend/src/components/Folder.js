import React, { useState } from 'react'



// function Folder (props) {

//   const [data, setData] = useState({
//     in: false
//   })

//   const drop = e => {
//     e.preventDefault()
//     project_id = e.dataTransfer.getData('project_id')

//     const project = document.getElementById(project_id)
//     project.style.display = 'block'

//     e.target.appendChild(project)
//   }

//   const dragOver = e => {
//     e.preventDefault()
//   }

//   return (
//     <div
//       id={props.id}
//       className={props.className}
//       onDrop={drop}
//       onDragOver={dragOver}
//     >
//       {props.children}
//     </div>
//   )


// }

// export default Folder

const STATUS_CODE = {
  1: 'Today',
  2: 'Important',
  3: 'Whatever',
  4: 'Done'
}


function Folder(props) {
  
  const [data, setData] = useState({
    in: false
  })


  handleDragEnter (e) {
    e.preventDefault();
    if (props.canDragIn) {
      setData({
        in: true
      })
    }
  }
  handleDragLeave (e) {
    e.preventDefault();
    if (props.canDragIn) {
      setData({
        in: false
      })
    }
  }
  handleDrop (e) {
    e.preventDefault();
    props.dragTo(props.status);
    setData({
      in: false
    })
  }
  
  return (
    <div 
        id={`col-${props.status}`} 
        className={'col'}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragEnter}
        onDrop={handleDrop}
      >
        <header className="col-header">
          {STATUS_CODE[props.tags.name]}
        </header>
        <main className={'col-main' + (data.in ? ' active' : '')}>
          {children}
        </main>
      </div>
  ) 

  }


export default Folder