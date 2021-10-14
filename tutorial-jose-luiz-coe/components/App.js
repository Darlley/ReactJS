class App extends React.Component {
    render(){
        return (
            <div>
                <Menu />
                
                <Title  name="Friends" lastName="Mulheres" />
                <Friends friends={this.props.friends} gender="F" />
                
                <Title  name="Friends" lastName="Homens" />
                <Friends friends={this.props.friends} gender="M" />
            </div>
        )
    }
}