import React from 'react'


// function Project (props) {

//   const dragStart = e => {

//     e.dataTransfer.setData('project_id', e.target.id)

//     setTimeout(() => {
//       e.target.style.display = 'none'
//     }, 0)
//   }

//   const dragOver = e=> {
//     e.stopPropagation()
//   }

//   return (
//     <div
//       id={props.id}
//       className={props.className}
//       onDragStart={dragStart}
//       onDragOver={dragOver}
//     >
//       {props.children}
//     </div>
//   )


// }

// export default Project


function Project(props) {

  function handleDragStart (e) {
    props.onDragStart(props.id)
  }


  return (
    <div>
      <div 
        onDragStart={handleDragStart}
        onDragEnd={props.onDragEnd}
        id={`item-${props.id}`} 
        className={'item' + (props.active ? ' active' : '')}
        draggable="true"
      >
        <main className="item-main">{props.title}</main>
      </div>
    </div>
  )
}


export default Project