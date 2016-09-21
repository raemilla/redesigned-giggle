class PrefsForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    votes = this.boxes.filter((box) => box.checked).map((box) => box.name)
    if (votes.length < this.props.votecount) {
      return alert(`Please select ${this.props.votecount} choices`)
    }
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: {votes: votes}
    }).done((response) => console.log(response))
  }

  render() {
    return (
      <form action="/preferences" method="post" onSubmit={this.handleSubmit}>
        <label>First choice: <input type="checkbox" name={pitch.title} /></label>
        <button value="submit" type="submit"/>
      </form>
    )
  }
}
