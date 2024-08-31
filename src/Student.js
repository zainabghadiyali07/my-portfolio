function Student(props) {
  console.log(props)
    
  return (
    <div style={{backgroundColor: "skyblue", margin: 10}}>
        <h2> Name : {props.name}</h2>

        
    </div>
  )
    
}

export default Student