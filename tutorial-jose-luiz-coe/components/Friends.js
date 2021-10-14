class Friends extends React.Component {
    friendsByGender(gender){
        return this.props.friends.filter(
            item => {
                if(item.gender == gender){
                    return item;
                }
            }
        )
    }
    render(){
        return (
            <ul>{
                this.friendsByGender(this.props.gender).map((friend,index) => <li key={index}>{friend.name} ({friend.gender})</li>)
            }</ul>
        )
    }
}