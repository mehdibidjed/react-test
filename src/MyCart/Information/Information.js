import './Information.css';
import Name from './Name/NameComponent';
import Job from './Job/Jobs';
import Statistic from './Statistic/Statistic';
import InterractionComponent from './Interruction/InterractionComponent';
//This file contains the component of  all information exept the picture 
export default function InformationComponent(props) {
    const { FirstName = 'N/A', LastName = 'N/A', Job: jobTitle = 'N/A', Statistics = {} } = props.Information || {};

    return (
        <div className="InformationComponent">
            <Name FirstName={FirstName} LastName={LastName} />
            <Job Job={jobTitle} />
            <Statistic Statistics={Statistics} />
            <InterractionComponent />
        </div>
    );
}
