import femaleImage from './images/femaleProfile.jpg'
import maleImage from './images/maleProfile.jpg'

const TeamMemberCard = ({employee,handleEmployeeCardClick,selectedTeam}) => {
  return (
   <div key ={employee.id} id={employee.id} className={employee.teamName == selectedTeam ? 'card md-2 standout' : 'card-md-2'} style={{cursor:"pointer"}} onClick = {handleEmployeeCardClick}>
            {(employee.gender == 'female')? <img src={femaleImage} className="card-img-top"/>
                                            :<img src={maleImage} className="card-img-top"/>}
               <div className="card-body">
                  <h5 className="card-title"> Full Name: {employee.fullName} </h5>
                  <p className="card-text"><b> Designation: </b> {employee.designation} </p>
               </div>
           </div>
  )
}
export default TeamMemberCard;