class StudentPhase1Main extends React.Component {
  render(){
    return(
      <div>
        <h1>round 1 voting is now open!</h1>
        <VotesForm pitches={this.props.pitches} votecount={this.props.votecount}/>
      </div>
    )
  }
}
