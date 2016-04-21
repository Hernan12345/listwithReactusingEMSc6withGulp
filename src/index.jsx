import React from 'react'  
import EmpleadoList from './components/empleado-list'

let empleados = [  
  { id: 1, fullName: "Bruce Springteen", title: "CEO", department: "Business", pic: "bruce_Small.jpg" },
  { id: 2, fullName: "Another Bruce", title: "CMO", department: "Marketing", pic: "bruceW_Small.jpg" },
  { id: 3, fullName: "Lio Messi", title: "CFO", department: "Business", pic: "messi_Small.jpg" },
  { id: 4, fullName: "Michael Jackson", title: "CTO", department: "Engineering", pic: "michael_Small.jpg" },
  { id: 5, fullName: "Neymar Junior", title: "Art Director", department: "Marketing", pic: "neymar_Small.jpg" },
  { id: 6, fullName: "Ronaldinho", title: "Frontend Dev", department: "Engineering", pic: "ronaldinho_Small.jpg" },
  { id: 7, fullName: "Silvester Stallone", title: "Digital Strategist", department: "Marketing", pic: "silvester_Small.jpg" },

]

ReactDOM.render(< EmpleadoList listado={ empleados } />, document.getElementById('application'))