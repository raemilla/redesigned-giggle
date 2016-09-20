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
        {this.props.pitches.map((pitch) => <label key={pitch.id}>{pitch.title}<input key={pitch.id} ref={(self) => this.boxes.push(self)} type="checkbox" name={pitch.title} /></label>)}
        <button value="submit" type="submit"/>
      </form>
    )
  }
}
