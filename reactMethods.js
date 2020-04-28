const styleDiv = {
    display: 'flex',
    justifyContent: 'flexStart',
    alignItems: 'center',
    marginBottom: '30px',
    background: 'lightblue'
}

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        //props - Только для чтения и менять динамически их нельзя,
        //в React создается свойство state в виде объекта
        this.state = {
            years: 29,
        }
        this.plusYear = this.plusYear.bind(this); 
        this.minusYear = this.minusYear.bind(this);
        // первый способ привязать контекст
        // this.plusYear = () => {
        //     // this.state.years++;
        //     this.setState(state => ({
        //         years: ++state.years,
        //     }))
        //}// второй способ, использовать => прямо в constructor 
        // так как она привязывает свой контекст к родителю
    }
    plusYear() {
        // this.state.years++;//неправильный подход
        this.setState(state => ({years: ++state.years}))
    }
    minusYear() {
        this.setState(state => ({years: --state.years}))
    }
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <div style={styleDiv}>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <button onClick={this.plusYear}>+</button>
                <button onClick={this.minusYear}>-</button>
                <a href={link}>my email</a>
            </div>
        )    
    }
}


const AllComponents = () => {
    return (
        <>
            <WhoAmI name='Denys' surname="Aptikieiev" link="mailto:rtdan333@gmailcom"/>
            <WhoAmI name='Anna' surname="Piana" link="mailto:anna@gmailcom"/>
            <WhoAmI name='Nikita' surname="Aptikieiev" link="mailto:nikita@gmailcom"/>
        </>
    )
}
