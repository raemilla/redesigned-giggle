class AdminPhase0Main extends React.Component {
  render(){
    return(
      <section>
        <h1>pitching for final projects is now open!</h1>
          <h2>current pitches:</h2>
            <PitchList pitches={this.props.pitches} />
          <h2>students yet to pitch:</h2>
            {
              this.props.students.map((student, idx) => {
                if(student.pitches.length === 0){
                  return (<p key={idx}>{student.full_name}</p>)
                }
              })
            }
      </section>
    )
  }
}
