class StudentPhase2Main extends React.Component {
  render(){
    var filteredPitches = this.props.pitches.filter((pitch) => pitch.round2)
    return(
      <section>
        <PitchList pitches={filteredPitches} phase={this.props.phase} />
        <PrefsForm pitches={filteredPitches}/>
      </section>
    )
  }
}
