class StudentPhase0Main extends React.Component {
  constructor(){
    super()
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleSubmit(event){
  //   event.preventDefault()
  //   $.ajax({
  //     method: 'post',
  //     url: '/posts',
  //     data: {
  //       pitch: {
  //         title: this.refs.pitchTitle.value,
  //         description: this.refs.pitchDescription.value
  //       }
  //     }
  //   }).done((response) => {
  //     this.refs.pitchTitle.value = ""
  //     this.refs.pitchDescription.value = ""
  //   })
  // }

  render(){
    return(
      <section>
        <h1>Pitching is now open!</h1>
          <PitchList pitches={this.props.pitches}/>

        <h2>submit a pitch:</h2>

        <form onSubmit={this.handleSubmit} method="post" action="/pitches">
          <label>working title </label><br/>
          <input ref="pitchTitle" type="text" name="pitch[title]"/><br/>
          <label>description</label><br/>
          <textarea ref="pitchDescription" name="pitch[description]"></textarea><br/>
          <input type="submit" value="pitch it!"/>
        </form>
      </section>
    )
  }
}
