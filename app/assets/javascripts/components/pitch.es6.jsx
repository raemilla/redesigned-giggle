class Pitch extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.boxes = []
  }

  handleChange(event){
    pitchSubset = this.boxes.filter((box) => box.checked).map((box) => box.name)
      if (pitchSubset.length > this.props.subset) {
        return alert(`You can only choose ${this.props.subset} pitches to continue`)
    }
  }

  render(){
    return(
        <li>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.description}</p>
          <p>by {this.props.data.author.full_name}</p>
          { (this.props.phase === "1") ? <p>vote count: {this.props.data.votes.length} </p> : null }
          { (this.props.phase === "1") ? <input onChange={this.handleChange} type="checkbox" name={`pitch[${this.props.data.id}]` }/> : null }
        </li>
    )
  }
}
