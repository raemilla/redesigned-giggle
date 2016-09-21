class AdminPhase1Main extends React.Component {
  render(){
    return(
      <section>
        <h1>admin phase 1 yo</h1>
        <form method="post" action="/flows/round_two">
          <PitchList pitches={this.props.pitches} phase={this.props.phase} />
          <input type="submit" value="move selected pitches onto round 2"/>
        </form>
        <h2>students yet to vote:</h2>
          {
            this.props.students.map((student, idx) => {
              if(student.votes.length === 0){
                return (<p key={idx}>{student.full_name}</p>)
              }
            })
          }

        <form method="get" action="/flows/continue">
          <input type="submit" value="close first round voting and open second round voting"/>
        </form>
      </section>
    )
  }
}
