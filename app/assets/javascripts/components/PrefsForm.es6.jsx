class PrefsForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    // event.preventDefault()
    // console.log(_form)
    // $.ajax({
    //   url: event.target.action,
    //   method: event.target.method,
    //   data: JSON.serialize(_form)
    // }).done((response) => console.log(response))
  }

  render() {
    return (
      <form action="/preferences" method="post" onSubmit={this.handleSubmit}>
        {["1", "2", "3"].map((ranknum) => <PrefsChoices pitches={this.props.pitches} key={ranknum} ranknum={ranknum} />)}
        <button value="submit" type="submit">submit</button>
      </form>
    )
  }
}
