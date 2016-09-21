class PrefsForm extends React.Component {
  constructor() {
    super()
    this.state = {
      displayForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      displayForm: false
    })
  }

  render() {
    return (
      <div>
      {this.state.displayForm ? <form action="/preferences" method="post" onSubmit={this.handleSubmit}>
        {["1", "2", "3"].map((ranknum) => <PrefsChoices pitches={this.props.pitches} key={ranknum} ranknum={ranknum} />)}
        <input value="submit" type="submit"/>
      </form> : <p>you have submitted your preferences!</p>}
      </div>
    )
  }
}
