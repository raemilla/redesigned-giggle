class AdminPhase1Main extends React.Component {
  constructor(){
    super()
    this.state = {
      displayForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    this.setState({
      displayForm: false
    })
  }

  render(){
    return(
      <section>
        <h1>round 1 voting is live!</h1>
        {this.state.displayForm ? <form onSubmit={this.handleSubmit} method="post" action="/flows/round_two">
          <PitchList pitches={this.props.pitches} phase={this.props.phase} subset={this.props.subset} />
          <input type="submit" value="move selected pitches onto round 2"/>
        </form> : <p>pitches successfully moved to round two.</p>}
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
