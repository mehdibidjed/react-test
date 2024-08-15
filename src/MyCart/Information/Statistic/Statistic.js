import './Statistic.css'
import StatisticComponent from './StatisticComponent';

export default function Statistic(props){

    return (
        <div className='Statistic'>
        <StatisticComponent Name="Articles" Value={props.Statistics.Articles}/>
        <StatisticComponent Name="Followers" Value={props.Statistics.Followers}/>
        <StatisticComponent Name="Rating" Value={props.Statistics.Rating}/> 
        </div>
    );
}