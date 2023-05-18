import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promotion', label: 'На повышение'},
        {name: 'moreThen50000', label: 'З/П больше 50000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;