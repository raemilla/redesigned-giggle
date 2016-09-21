class StudentPhase1Main extends React.Component {
  render(){
    return(
      <div>
        <h1>student phase 1 yo</h1>
        <VotesForm pitches={this.props.pitches} votecount={this.props.votecount}/>
      </div>
    )
  }
}
