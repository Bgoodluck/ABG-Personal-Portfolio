// import React from 'react'
// import { skills } from '../../data'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';


// function Skills() {
//   return (
//     <div>
//       {
//         skills.map(({title, percentage}, index) => {
//             return (
//                 <div className="progress_box" key={index}>
//                     <div className="progress__circle">
//                         <CircularProgressbar 
//                               strokeWidth={7.5} 
//                               text={`${percentage}`} 
//                               value={percentage}
//                         />
//                     </div>

//                     <h3 className="skills__title">{title}</h3>
//                 </div>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Skills


import React from 'react'
import { skills } from '../../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
  return (
    <div className="skills__grid">
      {
        skills.map(({title, percentage}, index) => {
            return (
                <div className="progress__box" key={index}>
                    <div className="progress__circle">
                        <CircularProgressbar 
                              strokeWidth={7.5} 
                              text={`${percentage}%`} 
                              value={percentage}
                        />
                    </div>
                    <h3 className="skills__title">{title}</h3>
                </div>
            )
        })
      }
    </div>
  )
}

export default Skills;
