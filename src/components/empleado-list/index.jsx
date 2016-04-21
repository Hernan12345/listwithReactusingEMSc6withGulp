import React from 'react'  
import EmpleadoRow from '../empleado-row'

class EmpleadoList extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
              <h1>Employees List</h1>
              <ul className="media-list">
                {
                  this.props.listado.map((empleado) => {
                    return <EmpleadoRow key={ empleado.id }
                                        name={ empleado.fullName }
                                        picture={ empleado.pic }
                                        title={ empleado.title }
                                        department={ empleado.department } />
                  })
                }
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmpleadoList  