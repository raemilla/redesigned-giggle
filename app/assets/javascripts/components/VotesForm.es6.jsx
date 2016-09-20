class VotesForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.boxes = []
  }

  handleSubmit(event) {
    event.preventDefault()
    votes = this.boxes.filter((box) => box.checked).map((box) => box.name)
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: {votes: votes}
    }).done((response) => console.log(response))
  }

  render() {
    return (
      <form action="/votes" method="post" onSubmit={this.handleSubmit}>
        <label>weather stuff<input ref={(self) => this.boxes.push(self)} type="checkbox" name="weather stuff" /></label>
        <label>richie's stuff<input ref={(self) => this.boxes.push(self)} type="checkbox" name="richie's stuff" /></label>
        <button value="submit" type="submit"/>
      </form>
    )
  }
}
