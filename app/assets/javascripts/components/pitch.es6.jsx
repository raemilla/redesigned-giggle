class Pitch extends React.Component {
  render(){
    return(
        <li>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.description}</p>
          <p>by {this.props.data.author.full_name}</p>
          { (this.props.phase === "1") ? <p>vote count: {this.props.data.votes.length} </p> : null }
          { (this.props.phase === "1") ? <input type="checkbox" name={`pitch[${this.props.data.id}]` }/> : null }
        </li>
    )
  }
}
