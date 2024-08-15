import './Information.css';
import Name from './NameComponent';
import Job from './Jobs';
import Statistic from './Statistic';
import InterractionComponent from './InterractionComponent';

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
