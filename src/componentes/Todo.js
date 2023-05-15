import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className='card mt-2'>
        <div className='card-body'>
          <h3 className='card-title text-end'>
            {todo.title}
            <button className='btn btn-sm btn-outline-success ml-2 m-2'>
              Terminar
            </button>
          </h3>
          <p className='card-text text-end'>
              {todo.description}
          </p>
          <hr></hr>
          <div className='d-flex justify-content-end'>
            <button className="btn btn-sm btn-outline-primary m-2">
                Editar
            </button>
            <button className="btn btn-sm btn-outline-danger m-2">
                Elimnar
            </button>
          </div>
        </div>
     </div>
  )
}

export default Todo
