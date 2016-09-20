class AdminPhase1Main extends React.Component {
  render(){
    return(
      <section>
        <h1>admin phase 1 yo</h1>
        <PitchList pitches={this.props.pitches} phase={this.props.phase} />
        <form method="get" action="/flows/continue">
          <input type="submit" value="close first round voting and open second round voting"/>
        </form>
      </section>
    )
  }
}
