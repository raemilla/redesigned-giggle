class Pitch extends React.Component {
  render(){
    return(
        <li>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.description}</p>
          <p>by {this.props.data.author.full_name}</p>
        </li>
    )
  }
}
