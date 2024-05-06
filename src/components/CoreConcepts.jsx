export default function CoreConcept(props){
    return (
      <il>
        <img src={props.img} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
  
      </il>
    )
  }