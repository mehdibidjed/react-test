import './StatisticComponent.css';

export default function StatisticComponent({ Name, Value }) {
    
    return (
        <div className="StatisticComponent">
            <div id="NameStat">
                {Name}
            </div>
            <div id="ValueStat">
                {Value}
            </div>
        </div>
    );
}
