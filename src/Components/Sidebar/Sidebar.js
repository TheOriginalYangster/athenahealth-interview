import React, { useEffect, useState } from 'react'
import SidebarItem from './Children/SidebarItem'

import './Sidebar.scss'

const langs = [
  "All",
  "No Language",
  "JavaScript",
  "Rust",
  "C++",
  "Shell",
  "Python",
  "Java",
  "Dart",
  "TypeScript",
  "C",
]

function Sidebar(props) {

  return (
    <div className="Sidebar">
      <b className="Sidebar-header">Languages</b>
      {langs.map(l => <SidebarItem l={l} {...props}/>)}
    </div>
  );
}

export default Sidebar;